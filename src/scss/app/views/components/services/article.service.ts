import {AuthService} from "../../../auth.service";
import {EventEmitter, Injectable, Output} from '@angular/core';
import 'rxjs/Rx';
import { HttpHeaders } from '@angular/common/http';


import {Article, ArticlesPaginator} from "../article.interface";
import {HttpService} from "../../../http.service";
import {Observable} from "rxjs/Observable";
import { Response } from "@angular/http/src/static_response";
import { from } from "rxjs/observable/from";

@Injectable()
export class ArticleService {
  public Articlelistpaginator = new EventEmitter<ArticlesPaginator>();
  constructor(private http: HttpService, private authservice: AuthService) { }
// nntact list services handled here

 public addarticle(title: string, body: string, category: number)
  {
      const token = this.authservice.getUserToken();
        return this.http.sendPostRequest('article?token=' + token, {title: title, body:body, category:category} ,
         { headers : new HttpHeaders ({'Content-Type': 'application/json' }) }); 
  }
  
  // upload(fileToUpload: any) {
  //       const input = new FormData();
  //       input.append('file', fileToUpload);
  //       return this.http.post('http://localhost:80/testapp/public/api/Contact-list', input); }
  // getContact() {
  //   const token = this.authservice.getUserToken();
  //          return this.http.sendCustomGetRequest('http://localhost/testapp/public/api/Contact-list?token=' + token) }


  public getArticlePaginator(){
    const token = this.authservice.getUserToken();
    return this.http.sendGetRequest('article?token=' + token).subscribe(
      data => {this.processGetArticlePaginator(data)},
      error => {console.log(error)} );
  }
  processGetArticlePaginator(article_data){

    if(article_data && article_data.data){
      this.Articlelistpaginator.emit(article_data);
    } else{
      console.log(' error has Occured!!');
    }
  }
  public getPaginatedArticle(request_full_url) {
    const token = this.authservice.getUserToken();
    this.http.sendCustomGetRequest(request_full_url + '&token=' + token).subscribe(
      data => {this.processGetArticlePaginator(data)}
    );
  }
  updateArticle(id: number, title: string, body: string, category: number) {
    const token = this.authservice.getUserToken();
    return this.http.sendPutRequest('article/' + id + '?token=' + token , {title: title, body:body, category:category},
      { headers : new HttpHeaders ({'Content-Type': 'application/json' })
      }); }
      deleteArticle(id: number) {
        const token = this.authservice.getUserToken();
        return this.http.sendCustomDeleteRequest('http://localhost:8000/article/' + id + '?token=' + token); }


  // postTogroup(group_id: number, contact_id: number) {
  //   return this.http.post('http://localhost:80/testapp/public/api/Contact-detail/' + group_id / + contact_id,{
  //     headers : new HttpHeaders ({'Content-Type': 'application/json' })
  //   }); }

}
