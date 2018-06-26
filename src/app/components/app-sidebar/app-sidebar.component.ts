import { Component, ElementRef } from '@angular/core';
import {CategoryService } from '../../views/components/category/services/category.service';
import { Category, CategoryArray } from 'app/views/components/category/category.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html'
})
export class AppSidebar {

  public category_array = new CategoryArray();
  constructor(private el: ElementRef, private categoryservice: CategoryService) { }

  //wait for the component to render completely
  ngOnInit(): void {
    this.GetCategories();
    this.categoryservice.getCategories().subscribe(
      data => {
      // this.category_array = data;
        this.setData(data);
        console.log("data " , this.category_array);
        //this.categories = data; 
        
      });
    var nativeElement: HTMLElement = this.el.nativeElement,
    parentElement: HTMLElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
  }
  public setData(data){
    this.category_array = data;
}


public GetCategories() {
  this.categoryservice.getCategories();
  
 }
}
