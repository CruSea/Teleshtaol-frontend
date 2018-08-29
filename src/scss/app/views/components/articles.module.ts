import { NgModule } from '@angular/core';



// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';
import { ArticleViewComponent } from './article-view.component';
import { ArticleWriteComponent } from './article-write.component';
import { ArticlesComponent } from './articles.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ModalModule} from "ngx-bootstrap";
import {CommonModule} from "@angular/common";
import {AuthService} from "../../auth.service";
import {HttpService} from "../../http.service";
import {ArticleService} from "./services/article.service";
import { CategoryComponent } from './category/category.component';
import { CategoryService } from './category/services/category.service';
import { CategoryViewComponent } from './category/category-view.component';
 
@NgModule({
  imports: [
    ComponentsRoutingModule,
    CommonModule,
    ModalModule.forRoot(),
    HttpModule,
    FormsModule,
    HttpClientModule,
    // PopupModule.forRoot()
  ],
  declarations: [ArticleViewComponent,ArticleWriteComponent, CategoryComponent, CategoryViewComponent ],
  providers:[ArticleService, AuthService, HttpService, CategoryService]
})
export class ArticlesModule { }
