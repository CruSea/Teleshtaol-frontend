import { Component, OnInit } from '@angular/core';
import {Article, ArticlesPaginator} from "./article.interface";
import {ArticleService} from "./services/article.service";
import swal from "sweetalert2";
import {NgForm} from "@angular/forms";
@Component({
  selector: 'app-article-write',
  templateUrl: './article-write.component.html',

})
export class ArticleWriteComponent implements OnInit {

  constructor(private articleservice: ArticleService) { }

  ngOnInit() {
 
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
}
