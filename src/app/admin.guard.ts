import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/auth.service';
import { Router } from '@angular/router/src/router';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }
  checkLogin(url) {
  if (this.auth.isAdmin) {
    console.log("admin")
    // redirect the user
    return true;
  
  }else{
    console.log("not looged in")
  }
   
  url = this.router.navigate(['/roles']);
  // this.auth.redirectUrl = url;
      
      this.router.navigate(['/login']);
  
    return false;
  }
 
}

