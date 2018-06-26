import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';
import { CategoryViewComponent } from './category-view.component';
// import {ArticlesComponent} from "./articles.component";


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'category'
    },
    children: [

      {
        path: 'categoryview',
        component: CategoryViewComponent,
        data: {
          title: 'View category'
        }
      },
      {
        path: 'category',
        component: CategoryComponent,
        data: {
          title: 'View category'
        }
      }


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
