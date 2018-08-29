import { Component, OnInit } from '@angular/core';
import { TestimonyService } from './services/testimony.service';
import { Testimony, TestimoniesPaginator } from './testimony.interface';
import {NgForm} from "@angular/forms";
import { concat } from 'rxjs/observable/concat';
import swal from 'sweetalert2';
@Component({
  selector: 'app-testimony',
  templateUrl: './testimony.component.html',
  
})

export class TestimonyComponent implements OnInit {
  Testimonys: any;
  public Testimonynew = new Testimony();
  public Testimony = new Testimony();
  public Testimony_list_paginator = new TestimoniesPaginator();

  constructor(private Testimonyservice: TestimonyService) {
  }

// get contact list when page loads
  ngOnInit() {
    this.UpdatepagePaginator();
    this.Testimonyservice.Testimonylistpaginator.subscribe(
      data => {
        this.Testimony_list_paginator = data; 
      
      });
  }

  public UpdatepagePaginator() {
    this.Testimonyservice.getTestimonyPaginator();
  }

  public getPaginatedTestimony(request_url) {
    this.Testimonyservice.getPaginatedTestimony(request_url);
  }

  // add contact on modal form submit
   public onSubmit(form: NgForm) {
    this.Testimonyservice.addTestimony(form.value.title, form.value.body, form.value.approval).subscribe(
      data => {
        this.UpdatepagePaginator()
      });
    form.reset();
    swal({
      position: 'top',
      type: 'success',
      title: 'Your testimony has been saved!!',
      showConfirmButton: false,
      timer: 1500
    })
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
  public  onedit(Testimonys) {
    this.Testimonynew = Testimonys;
  }

// update contact information
  public  onupdate(form: NgForm) {
    // console.log(this.Testimonynew.id, this.Testimonynew);
    console.log(form.value);
    this.Testimonyservice.updateTestimony(this.Testimonynew.id, form.value.title, form.value.body, form.value.approval).subscribe(
      () => {
        this.UpdatepagePaginator();
      });
      swal({
        position: 'top',
        type: 'success',
        title: 'testimony has been Updated!!',
        showConfirmButton: false,
        timer: 1500
      })
  }

// delete contact information
  public  ondelete(Testimonys) {
    swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.Testimonyservice.deleteTestimony(this.Testimonynew.id).subscribe(
          () => {
            this.UpdatepagePaginator()
          });
        swal(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
    
      
  }
}
