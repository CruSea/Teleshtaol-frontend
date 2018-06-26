import { Component, OnInit } from '@angular/core';
import { DisapprovedService } from './services/disapproved.service';
import { Testimony, TestimoniesPaginator } from './testimony.interface';
@Component({
  selector: 'app-approved',
  templateUrl: './disapproved.component.html',
  
})
export class DisapprovedComponent implements OnInit {
   Testimonys: any;
  
  public Testimony = new Testimony();
  public Testimony_list_paginator = new TestimoniesPaginator();

  constructor(private Testimonyservice: DisapprovedService) {
  }

// get contact list when page loads
  ngOnInit() {
    this.UpdatepagePaginator();
    this.Testimonyservice.Disapprovedlistpaginator.subscribe(
      data => {
        this.Testimony_list_paginator = data; 
      
      });
  }

  public UpdatepagePaginator() {
    this.Testimonyservice.getDisapprovedPaginator();
  }

  public getPaginatedTestimony(request_url) {
    this.Testimonyservice.getPaginatedDisapproved(request_url);
  }

 


}
