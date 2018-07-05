import { Component, OnInit } from '@angular/core';
import {CategoryService } from './services/category.service';
import 'rxjs/Rx'; 
import { Category, CategoryArray } from 'app/views/components/category/category.interface';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
})
export class CategoryComponent implements OnInit {
  public id:any;
// public category = new Category();
// public categories = new Category();
public category_array = new CategoryArray();

  constructor(private categoryservice: CategoryService,private route: ActivatedRoute) { }


  ngOnInit() {
    
   this.GetCategories();
   this.categoryservice.getCategories().subscribe(
    data => {
    // this.category_array = data;
      this.setData(data);
      console.log("data " , this.category_array);
      //this.categories = data; 
      
    });
 
   
  //  console.log(this.GetCategories());
  }

  public setData(data){
      this.category_array = data;
  }

  
  public GetCategories() {
    this.categoryservice.getCategories();
    
   }
  //  public GetCategory(id){
  //    this.categoryservice.getCategory(id);
  //  }
}
