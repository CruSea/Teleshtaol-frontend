import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoleComponent } from 'app/views/role_and_permission/roles.component';

const routes: Routes = [
  {
    path: '',
    component: RoleComponent,
    data: {
      title: 'Roles'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule {}
