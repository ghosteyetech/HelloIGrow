import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  //socialLinks: NbAuthSocialLink[] = [];

  constructor() { 

    //this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
    //this.showMessages = this.getConfigValue('forms.register.showMessages');
    //this.strategy = this.getConfigValue('forms.register.strategy');
    //this.socialLinks = this.getConfigValue('forms.login.socialLinks');

  }

  ngOnInit() {
  }

  register(): void {
    this.errors = this.messages = [];
    this.submitted = true;

    /*this.service.register(this.strategy, this.user).subscribe((result: NbAuthResult) => {
      this.submitted = false;
      if (result.isSuccess()) {
        this.messages = result.getMessages();
      } else {
        this.errors = result.getErrors();
      }

      const redirect = result.getRedirect();
      if (redirect) {
        setTimeout(() => {
          return this.router.navigateByUrl(redirect);
        }, this.redirectDelay);
      }
    });
    */
  }

  getConfigValue(key: string): any {
    //return getDeepFromObject(this.options, key, null);
  }
}
