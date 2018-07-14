import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-change-password-form',
  templateUrl: './change-password-form.component.html',
  styleUrls: ['./change-password-form.component.scss']
})
export class ChangePasswordFormComponent implements OnInit {

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};

  constructor() { }

  ngOnInit() {
  }

  getConfigValue(key: string): any {
    //return getDeepFromObject(this.options, key, null);
  }

}
