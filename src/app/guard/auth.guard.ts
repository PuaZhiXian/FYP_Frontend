import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {AuthService} from "./auth.service";
import {SignInUpComponent} from "../pages/sign-in-up/page/sign-in-up/sign-in-up.component";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public authService: AuthService,
              public router: Router) {
  }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.isAuthenticated().pipe(
      map((isAuthenticated) => {

        if (route.component === SignInUpComponent) {
          if (route.params['type'] === 'reset-password' || route.params['type'] === 'set-up-password') {
            let token = route.queryParams['token'];
            if (isAuthenticated) {
              this.router.navigate(['dashboard']);
              return false;
            } else if (token && !isAuthenticated) {
              return true;
            } else {
              this.router.navigate(['error', 'not-found']);
              return false;
            }
          } else if (isAuthenticated) {
            this.router.navigate(['dashboard']);
            return false;
          } else {
            return true;
          }
        } else {
          if (isAuthenticated) {
            return true;
          } else {
            this.router.navigate(['sign', 'sign-in']);
            return false;
          }
        }
      })
    );
  }

}
