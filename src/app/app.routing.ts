import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Import Containers
import {
  FullLayout,
  SimpleLayout
} from './containers';
// import {DashboardComponent} from "./views/dashboard/dashboard.component";
import {AppSidebar} from "./components/app-sidebar/app-sidebar.component";
// import {TestimonyComponent} from "./views/testimony/testimony.component";
import {LoginComponent} from "./views/login/login.component";
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';

export const routes: Routes = [

  {
    path: '',
    redirectTo: '/login',
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
        path: 'login',
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
        loadChildren: './views/dashboard/dashboard.module#DashboardModule',
        // canActivate: [AuthGuard]
      },

    {
      path: 'components',
      loadChildren: 'app/views/components/components.module',
    },
    {
      path: 'testimony',
      loadChildren: 'app/views/testimony/testimony.module#TestimonyModule',
      
    },
    
    {
      path: 'roles',
      loadChildren: 'app/views/role_and_permission/roles.module#RoleModule',
      // canActivate: [AdminGuard]
    }
  
     

    ]
  },

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
