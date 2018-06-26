import {EventEmitter, Injectable, Output} from '@angular/core';

import 'rxjs/Rx';
import {HttpService} from './http.service';
import {HttpHeaders} from '@angular/common/http';
@Injectable()
export class AuthService {
  @Output() autheticate_emiter = new EventEmitter<boolean>();
  public is_authenticated: boolean;
  constructor(private httpRequest: HttpService) { }
  // Authenticate user
  public authenticate(Email: string, Password: string) {
    return this.httpRequest.sendPostRequest('authenticate', {email: Email, password: Password},
      {headers : new HttpHeaders({'Content-Type': 'application/json'})} ).subscribe(
        data => {this.authenticate_user(data, true)},
      error => {this.authenticate_user(error, false)}
    );
  }
  /*public login() {
   if (this.getUserToken() != null) {
   this.httpRequest.sendGetRequest('signin?token=' + this.getUserToken()).subscribe(
   data => {this.login_status(data)},
   error => {this.login_status(error)} );
   }
   }*/

  public login(login_data){
    if(login_data){
      this.autheticate_emiter.emit(true);
      this.is_authenticated = true;
      console.log(login_data);
    }else {
      this.autheticate_emiter.emit(false);
      this.is_authenticated = false;
    }
  }

  private authenticate_user(response: any, status) {
    if ( status) {
      if (response && response.token) {
        this.storeUserToken(response.token);
        this.is_authenticated = true;
        this.login(response);
      } else{
        this.is_authenticated = false;

      }
    }

  }
  public getUserLogedIn(){
    return this.is_authenticated;
    // return this.autheticate_emiter;
  }
  public storeUserToken( user_token: string ) {
    localStorage.setItem('token_auth_key', user_token);
  }
  public getUserToken() {
    return localStorage.getItem('token_auth_key');
    // console.log(localStorage.getItem('token_auth_key'))

  }


}












