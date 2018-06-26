import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {LoginRoutingModule} from './login-routing.module';

import { LoginComponent } from './login.component';

import {HttpService} from "../../http.service";
import {AuthService} from "../../auth.service";



@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [LoginComponent],
  providers: [ AuthService , HttpService ]
})
export class LoginModule { }
