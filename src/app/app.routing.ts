import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Import Containers
import {
  FullLayout,
  SimpleLayout
} from './containers';
import {DashboardComponent} from "./views/dashboard/dashboard.component";
import {AppSidebar} from "./components/app-sidebar/app-sidebar.component";
import {TestimonyComponent} from "./views/testimony/testimony.component";
import {LoginComponent} from "./views/login/login.component";

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: SimpleLayout,
    data: {
      title: 'Login'
    },
    children: [
      {
        path: 'auth',
        loadChildren: './views/login/login.module#LoginModule'
      },
    ]
  },

  {
    path: '',
    component: FullLayout,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'components',
        loadChildren: './views/components/components.module#ComponentsModule'
      },
      {
        path: 'testimony',
        loadChildren: './views/testimony/testimony.module#TestimonyModule'
      },
      
      {
        path: 'roles',
        loadChildren: './views/role_and_permission/roles.module#RoleModule'
      }

    ]
  },





];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
