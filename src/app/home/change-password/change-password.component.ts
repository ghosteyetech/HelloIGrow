import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getConfigValue(key: string): any {
    //return getDeepFromObject(this.options, key, null);
  }
}
