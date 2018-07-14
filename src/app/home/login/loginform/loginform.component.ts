import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'ngx-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  redirectDelay: number = 0;
  showMessages: any = {};
  strategy: string = '';

  errors: string[] = [];
  messages: string[] = [];
  user: any = {};
  submitted: boolean = false;
  
  constructor(private activatedRoute: ActivatedRoute, private authService : AuthService) { }

  ngOnInit() {
    let param1 = this.activatedRoute.snapshot.queryParams["lout"];
    console.log(param1);
    switch(param1){
      case 'yes': this.authService.logout();
      break;
      default:
      break
    }
  }

  login() {
    this.authService.emailLogin(this.user.email, this.user.password);
  }

  getConfigValue(config : any){
    //console.log(config);
    let response = null;
    switch(config){
      case "forms.validation.email.required": response = true;
      break;
    }

    return response;
  }

}
