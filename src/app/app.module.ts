import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { RegisterFailComponent } from './user/register-fail/register-fail.component';
import { LoginActivateComponent } from './user/login-activate/login-activate.component';
import { EmailNotifComponent } from './user/email-notif/email-notif.component';
import { ConfirmationComponent } from './user/confirmation/confirmation.component';
import { RegisterDataComponent } from './user/register-data/register-data.component';
import { VerificationComponent } from './user/verification/verification.component';
import { VerificationCodeComponent } from './user/verification-code/verification-code.component';
import { HeaderComponent } from './utils/header/header.component';
import { FooterComponent } from './utils/footer/footer.component';
import { DashboardComponent } from './reservations/dashboard/dashboard.component';
import { CardComponent } from './reservations/card/card.component';
import { FilterComponent } from './reservations/filter/filter.component';
import { SearchCardComponent } from './reservations/search-card/search-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RegisterFailComponent,
    LoginActivateComponent,
    EmailNotifComponent,
    ConfirmationComponent,
    RegisterDataComponent,
    VerificationComponent,
    VerificationCodeComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    CardComponent,
    FilterComponent,
    SearchCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
