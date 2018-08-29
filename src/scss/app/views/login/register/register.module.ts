import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {HttpService} from "../../../http.service";
import {AuthService} from "../../../auth.service";
import { RegisterComponent } from 'app/views/login/register/register.component';
// import { RegisterComponent } from './register/register.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [RegisterComponent
  ],
  providers: [ AuthService , HttpService ]
})
export class RegisterModule { }
