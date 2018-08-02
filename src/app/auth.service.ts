import {EventEmitter, Injectable, Output} from '@angular/core';
import swal from 'sweetalert2';
import 'rxjs/Rx';
import {HttpService} from './http.service';
import {HttpHeaders} from '@angular/common/http';
@Injectable()
export class AuthService {
  public AuthenticatedUserEmitter = new EventEmitter<boolean>();
  @Output() autheticate_emiter = new EventEmitter<boolean>();
  public is_authenticated: boolean;
  constructor(private httpRequest: HttpService) { }
  // Authenticate user

  public authenticate(Email: string, Password: string) {
    return this.httpRequest.sendPostRequest('authenticate', {email: Email, password: Password},
      {headers : new HttpHeaders({'Content-Type': 'application/json'})} ).subscribe(
        data => {this.processAuthenticateUser(data)},
      error => {this.processAuthenticateUser(error)}
    );
  }
  private processAuthenticateUser(data: any) {
    if (data && data.status && data.token && data.user) {
      this.storeUserToken(data.token);
      this.setUserRoleID(data.user_role[0].id);
      this.setFullName(data.user.full_name);
      this.setEmail(data.user.email);
      this.setRoleName(data.user_role[0].name);
      this.setPermissionName(data.user_permissions);
      this.AuthenticatedUserEmitter.emit(data.user);
      this.is_authenticated = true;
      this.login(data);
    } else {
      return false;
     
    }
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
  public setUserRoleID(user_role_id: string) {
    localStorage.setItem('user_role_id', user_role_id);
  }
  public setEmail(email: string) {
    localStorage.setItem('user_email', email);
  }
  public setFullName(first_name: string) {
    localStorage.setItem('full_name', first_name);
  }
  public getEmail() {
    return localStorage.getItem('email');
  }
  public getFullName() {
    return localStorage.getItem('full_name');
  }
  public setRoleName(user_name: string) {
    return localStorage.setItem('user_role_name', user_name);
  }
  public setPermissionName(user_permissions: any) {
    return localStorage.setItem('user_permission', JSON.stringify(user_permissions));
    // console.log(this.user_permission);
  }
  public getRoleName() {
    return localStorage.getItem('user_role_name');
  }
  get isAdmin() {
    const role_id: number = parseInt(this.getUserRoleID(), 10);
    // return (role_id <= 1);
    if (role_id === 1){
      return true;
    }
    else
    {
      return false;
    }
}
  public isSuperAdmin() {
    const role_id: number = parseInt(this.getUserRoleID(), 10);
    return (role_id <= 4);
  }
  
  public isEditor() {
    const role_id: number = parseInt(this.getUserRoleID(), 10);
    return (role_id <= 2);
  }

  get isLoggedIn(){

    // const role_id: number = parseInt(this.getUserRoleID(), 10);
    // console.log(this.getUserRoleID())
    // if (this.is_authenticated === true && role_id){
      return true;
      
      // }
    // else{
    //   return false;
    //  }
    }
    public getUserRoleID() {
      return localStorage.getItem('user_role_id');
   
      
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



















