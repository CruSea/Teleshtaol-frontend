import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../../auth.service";
import { Router } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onRegister(form: NgForm){
    this.authService.register(form.value.name, form.value.email, form.value.password)
   console.log("registered", form.value.name, form.value.email, form.value.password)
   swal({
    position: 'top-end',
    type: 'success',
    title: 'Thank you for Registering',
    showConfirmButton: false,
    timer: 1500
  })
  this.router.navigate(['/login']);
  }

}
