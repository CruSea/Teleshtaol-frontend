import { Component, OnInit } from '@angular/core';

import {NgForm} from "@angular/forms";
import {AuthService} from "../../auth.service";
import {Router} from "@angular/router";
import swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isauthenticated: boolean;
  constructor(private authService: AuthService, private router: Router) { }
  ngOnInit() {
    
  }

  onSignin(form: NgForm){
    this.authService.authenticate(form.value.email, form.value.password);
    this.authService.autheticate_emiter.subscribe( res => {
      this.isauthenticated = res;
      if(this.isauthenticated){
        this.router.navigate(['/dashboard']);
      
        swal({
          position: 'top-end',
          type: 'success',
          title: 'Your are loggged in as: ADMIN',
          showConfirmButton: false,
          timer: 1500
        })
      }else{
        this.isauthenticated = false;
        swal({
          position: 'top-end',
          type: 'error',
          title: 'Your are loggged in as: ADMIN',
          showConfirmButton: false,
          timer: 1500
        })

      }

    } );
    
    // console.log('nic');

  }
}
