import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable, of, switchMap} from 'rxjs';
import {AuthService} from "./auth.service";
import {SignInUpComponent} from "../pages/sign-in-up/page/sign-in-up/sign-in-up.component";
import {AuthorizationService} from "../service/authorization/authorization.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public authService: AuthService,
              public router: Router,
              public authorizationService: AuthorizationService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isAuthenticated().pipe(
      switchMap((isAuthenticated) => {
        let userRole = 'ROLE_VENDOR';
        if (isAuthenticated) {
          if (route.data['role'] && route.data['role'] === userRole) {
            if (route.component === SignInUpComponent) {
              (route.data['role'] && route.data['role'] === 'ROLE_VENDOR') ?
                this.router.navigate(['dashboard']) : this.router.navigate(['dashboard']);
              return of(false);
            }
            return of(true);
          } else {
            (route.data['role'] && route.data['role'] === 'ROLE_VENDOR') ?
              this.router.navigate(['dashboard']) : this.router.navigate(['dashboard']);
            return of(false);
          }
        } else {
          // UnAuthorize & in reset password/ set up password page
          if (route.component === SignInUpComponent && (route.params['type'] === 'reset-password' || route.params['type'] === 'set-up-password')) {
            let token = route.queryParams['token'];
            // check token append at the end of url
            return this.authorizationService.checkToken(token).pipe(
              map((validToken) => {
                if (validToken) {
                  return true;
                } else {
                  this.router.navigate(['error', 'not-found']);
                  return false;
                }
              })
            );
          } else {
            //UnAuthorize
            this.router.navigate(['sign', 'sign-in']);
            return of(false);
          }
        }
      })
    );
  }

}
