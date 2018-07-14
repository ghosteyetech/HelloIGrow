import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router, private authService: AuthService) { }

  canActivate() {
    if  ( this.authService.isLoggedIn() ) {
      console.log("can activate true");
      return true;
    }

    this.router.navigate(['auth']);
    console.log("can activate false");
    return false;
  }
}