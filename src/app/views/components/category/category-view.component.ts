import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './services/category.service';
import { Article } from '../article.interface';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  
})
export class CategoryViewComponent implements OnInit {
  public id:any;
  public article = new Article();

  constructor(private route: ActivatedRoute, private categoryservice: CategoryService ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      console.log(params)
    });
    // // this.GetCategory(params);
    // this.categoryservice.getCategory(this.id).subscribe(
    //  data => {
    //  // this.category_array = data;
    //    this.setData(data);
    //    console.log("data " , this.article);
    //    //this.categories = data; 
       
    //  });

    // )
  }

  public setData(data){
    this.article = data;
}


public GetCategory(id) {
  this.categoryservice.getCategory(id);
  
 }
//  publi
}
