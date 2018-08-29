import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  }

];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class LoginRoutingModule { }
