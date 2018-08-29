import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from 'app/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }
  checkLogin(url) {
  if (this.auth.isLoggedIn) {
    console.log("logged in")
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
  // public redirecturl.navigate
  

