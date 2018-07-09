import { Http }       from '@angular/http';
import {EventEmitter, Injectable, Output} from '@angular/core';
import {AuthService} from "../../../../auth.service";
import { HttpHeaders } from '@angular/common/http';
import { Response } from "@angular/http/src/static_response";
import 'rxjs/Rx'; 
import {Category} from "../category.interface";
import {HttpService} from "../../../../http.service";
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {
  // public categories;
  // public CategoryList= new EventEmitter<Category>();
  constructor(private http: HttpService, private authservice: AuthService) { }
  // processGetCategory(data){
    
  //       if(data && data.data){
  //         this.CategoryList.emit(data);
  //       } else{
  //         console.log(' error has Occured!!!');
  //       }}
  public addcategory(name: string) {
    const token = this.authservice.getUserToken();
    return this.http.sendPostRequest('category?token=' + token, {name: name} ,
      { headers : new HttpHeaders ({'Content-Type': 'application/json' }) }); }
      
    public getCategories() {
    const token = this.authservice.getUserToken();
    return this.http.sendGetRequest('category' + '?token=' + token);
  }

  public getCategory(id: number) {
    const token = this.authservice.getUserToken();
    return this.http.sendGetRequest('category/' + id + '?token=' + token);
  }

  }
