import { Component, OnInit } from '@angular/core';
import {Article, ArticlesPaginator} from "./article.interface";
import {ArticleService} from "./services/article.service";
import swal from "sweetalert2";
import {NgForm} from "@angular/forms";
import { CategoryService } from './category/services/category.service';
import { CategoryArray} from "../components/category/category.interface";
@Component({
  selector: 'app-article-write',
  templateUrl: './article-write.component.html',

})
export class ArticleWriteComponent implements OnInit {
  public category_array = new CategoryArray();
  constructor(private articleservice: ArticleService,private categoryservice: CategoryService) { }

  ngOnInit() {
    this.categoryservice.getCategories().subscribe(
      data => {
      // this.category_array = data;
            this.setData(data);
            console.log(data)
        // console.log("data " , this.category_array);
        //this.categories = data; 
        
      
      });
 
  }
  public setData(data){
    this.category_array = data;
}
  // creating article
  public onSubmit(form: NgForm) {

    swal('Article Posted','you can edit it in all articles list','success')
    // this.articles.body = form.value.body;
    // this.articles.title = form.value.title;
    this.articleservice.addarticle(form.value.title, form.value.body, form.value.category).subscribe(
      data => {
        
      });
    form.reset();
  }
  public onCreate(form: NgForm) {
    
        swal('new category created','please relode to find it inn categories list','success')
        // this.articles.body = form.value.body;
        // this.articles.title = form.value.title;
        this.categoryservice.addcategory(form.value.name).subscribe(
          data => {
            console.log (data)
          });
        form.reset();
      }
}
