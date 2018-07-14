import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { RequestPasswordComponent } from './auth/request-password/request-password.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';

import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { 
    path: 'pages', 
    loadChildren: 'app/pages/pages.module#PagesModule',
    canActivate : [ AuthGuard ] 
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: SigninComponent,// NbLoginComponent,
      },
      {
        path: 'login',
        component: SigninComponent,// NbLoginComponent,
      },
      {
        path: 'register',
        component: SignupComponent,// NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: RequestPasswordComponent,// NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent,// NbResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
