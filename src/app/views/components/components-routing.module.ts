import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticleViewComponent } from './article-view.component';
import { ArticleWriteComponent } from './article-write.component';
import {CategoryComponent} from "./category/category.component";
import {CategoryViewComponent} from "./category/category-view.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Article'
    },
    children: [

      {
        path: 'article-view',
        component: ArticleViewComponent,
        data: {
          title: 'View article'
        }
      },
      {
        path: 'article-write',
        component: ArticleWriteComponent,
        data: {
          title: 'Write article'
        }
      },
      {
        path: 'category',
        component: CategoryComponent,

        data: {
          title: 'categories'
        }
      },
      {
        path: 'view/:id',
        component: CategoryViewComponent,
        data: {
          title: 'View category'
        }
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule {}
