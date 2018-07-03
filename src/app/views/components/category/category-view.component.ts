import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from './services/category.service';
import { Article } from '../article.interface';

@Component({
  selector: 'app-category-view',
  templateUrl: './category-view.component.html',
  
})
export class CategoryViewComponent implements OnInit {
  public id:any = 1;
  public article = new Article();

  constructor(private route: ActivatedRoute, private categoryservice: CategoryService ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      console.log(params)
    });
    
    
    
  }

  public setData(data){
    this.article = data;
}


public GetCategory(id) {
  this.categoryservice.getCategory(id);
  
 }
//  publi
}
