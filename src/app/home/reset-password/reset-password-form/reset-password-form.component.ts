import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-reset-password-form',
  templateUrl: './reset-password-form.component.html',
  styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent implements OnInit {

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  submitted = false;
  errors: string[] = [];
  messages: string[] = [];
  user: any = {};

  constructor() { }

  ngOnInit() {
  }

  requestPass(): void {
    this.errors = this.messages = [];
    this.submitted = true;

    // this.service.requestPassword(this.strategy, this.user).subscribe((result: NbAuthResult) => {
    //   this.submitted = false;
    //   if (result.isSuccess()) {
    //     this.messages = result.getMessages();
    //   } else {
    //     this.errors = result.getErrors();
    //   }

    //   const redirect = result.getRedirect();
    //   if (redirect) {
    //     setTimeout(() => {
    //       return this.router.navigateByUrl(redirect);
    //     }, this.redirectDelay);
    //   }
    // });
  }

  getConfigValue(key: string): any {
    //return getDeepFromObject(this.options, key, null);
  }

}
