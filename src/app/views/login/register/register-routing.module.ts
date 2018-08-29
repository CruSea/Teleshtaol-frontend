import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {RegisterComponent} from './register.component';


const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    data: {
      title: 'Register'
    }
  }


];

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RegisterRoutingModule { }
