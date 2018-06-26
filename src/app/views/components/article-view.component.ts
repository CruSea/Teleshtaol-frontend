import { Component, OnInit } from '@angular/core';
import {Article, ArticlesPaginator} from "./article.interface";
import {ArticleService} from "./services/article.service";
import {NgForm} from "@angular/forms";
import swal from "sweetalert2";

@Component({
  selector: 'app-article-view',
  templateUrl: './article-view.component.html',
 
})
export class ArticleViewComponent implements OnInit {
  
  public articles = new  Article();
  public articlenew = new Article();
  public article_list_paginator = new ArticlesPaginator();

  constructor(private articleservice: ArticleService) {
  }

// get contact list when page loads
  ngOnInit() {
    this.UpdatepagePaginator();
    this.articleservice.Articlelistpaginator.subscribe(
      data => {
        this.article_list_paginator = data
      });
     
     
  }

  public UpdatepagePaginator() {
    this.articleservice.getArticlePaginator();
  }

  public getPaginatedArticle(request_url) {
    this.articleservice.getPaginatedArticle(request_url);
  }

  // add contact on modal form submit
  public onSubmit(form: NgForm) {
    // this.articles.body = form.value.body;
    // this.articles.title = form.value.title;
    this.articleservice.addarticle(form.value.title, form.value.body, form.value.category).subscribe(
      data => {
        this.UpdatepagePaginator()
      });
    form.reset();
  }

  //ad
  // addFile(): void {
  //   const fi = this.fileInput.nativeElement;
  //   if (fi.files && fi.files[0]) {
  //     const fileToUpload = fi.files[0];
  //     this.contactservice.upload(fileToUpload)
  //       .subscribe(res => {
  //         console.log(res);
  //       });
  //   }
  // }
  // pre-populate existing data on edit button
  public  onedit(articles) {
    this.articlenew = articles;
  }

// update contact information
  public  onupdate(form: NgForm) {
    console.log(this.articlenew.id, this.articlenew);
    this.articleservice.updateArticle(this.articlenew.id, form.value.title, form.value.body, form.value.category).subscribe(
      () => {
        this.UpdatepagePaginator();
      });
      swal(
        'Updated!',
        'Your file has been deleted.',
        'success'
      )
  }

// delete contact information
  public  ondelete() {
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.articleservice.deleteArticle(this.articlenew.id).subscribe(
          () => {
            this.UpdatepagePaginator()
          });
        console.log(this.articlenew.id);
        swal(
          'Deleted!',
          'Your file has been deleted.',
          'success' 
        )
      }
    })
    
    
     
     
    }
}