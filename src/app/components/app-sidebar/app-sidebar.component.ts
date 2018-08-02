import { Component, ElementRef } from '@angular/core';
import {CategoryService } from '../../views/components/category/services/category.service';
import { Category, CategoryArray } from 'app/views/components/category/category.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html'
})
export class AppSidebar {
  public id:number;
  public category_array = new CategoryArray();
  constructor(private el: ElementRef, private categoryservice: CategoryService, private router: Router) { }

  //wait for the component to render completely
  ngOnInit(): void {
    this.GetCategories();
    this.categoryservice.getCategories().subscribe(
      data => {
      // this.category_array = data;
        this.setData(data);
        // console.log("data " , this.category_array);
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
 public onmth(id){
   this.router.navigate(['/components/view/' + id])
  //  console.log(id);
   this.id = id;
   
  //  this.categoryservice.getCategory(this.id).subscribe(
  //    data => {
  //    // this.category_array = data;

  //      console.log(data);
  //      //this.categories = data; 
       
  //    });
 }
}

