import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from './services/dashboard.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {

public total = '';


  constructor(private categoryservice: DashboardService) { }

   ngOnInit() {
     this.GetTotal();
     this.GetProfile();
     this.categoryservice.getProfile().subscribe(
      data => {
          this.setData(data);
         
        });
     this.categoryservice.getTotal().subscribe(
      data => {
        // this.category_array = data;
          this.setData(data);
          console.log("data " , this.total);
          //this.categories = data; 
          
        });
        
   }
   public setData(data){
    this.total = data;
    
}
  public GetTotal() {
    this.categoryservice.getTotal();
    
   }
   public GetProfile() {
    this.categoryservice.getProfile();
    
   }
}
