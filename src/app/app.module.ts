/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AuthService } from './services/auth.service';
import {  AuthGuard } from './services/auth.guard';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RequestPasswordComponent } from './auth/request-password/request-password.component';
import { ResetPasswordComponent } from './home/reset-password/reset-password.component';
import { TestComponent } from './auth/test/test.component';
import { RegisterComponent } from './home/register/register.component';
import { SignupformComponent } from './home/register/signupform/signupform.component';
import { LoginComponent } from './home/login/login.component';
import { LoginformComponent } from './home/login/loginform/loginform.component';
import { ResetPasswordFormComponent } from './home/reset-password/reset-password-form/reset-password-form.component';
import { ChangePasswordComponent } from './home/change-password/change-password.component';
import { ChangePasswordFormComponent } from './home/change-password/change-password-form/change-password-form.component';

@NgModule({
  declarations: [AppComponent, SignupComponent, SigninComponent, RequestPasswordComponent, ResetPasswordComponent, TestComponent, RegisterComponent, SignupformComponent, LoginComponent, LoginformComponent, ResetPasswordFormComponent, ChangePasswordComponent, ChangePasswordFormComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,

    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,

    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [ AuthGuard, AuthService,
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppModule {
}
