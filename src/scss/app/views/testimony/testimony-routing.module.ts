import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestimonyComponent } from './testimony.component';
import { DisapprovedComponent } from './disapproved.component';
import { ApprovedComponent } from './approved.component';

// import {ArticlesComponent} from "./articles.component";


const routes: Routes = [
    {
        path: '',
        data: {
          title: 'testimony'
        },
        children: [
          {
            path: 'testimonies',
            component: TestimonyComponent,
            data: {
              title: 'testimony'
            }
          },
                {
                  path: 'disapproved',
                  component: DisapprovedComponent,
                  data: {
                    title: 'Disapproved'
                  }
                },
                {
                  path: 'approved',
                  component: ApprovedComponent,
                  data: {
                    title: 'approved'
                  }
                },
              ]
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  TestimonyRoutingModule  {}
