import {Injectable} from '@angular/core';
import {AuthorizationRestService} from "../../restService/authorization/authorization.rest.service";
import {catchError, Observable, switchMap, throwError} from "rxjs";
import {ILoginRequest} from "../../interface/authorization/i-login-request";
import {IMessage} from "../../interface/authorization/i-message";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private router: Router,
              private authorizationRestService: AuthorizationRestService,) {
  }

  refreshTokenInProgress: boolean = true;

  login(loginRequest: ILoginRequest): Observable<IMessage> {
    // loginRequest.password = AES.encrypt(loginRequest.password + "", environment.secretKey).toString();
    return this.authorizationRestService.login(loginRequest);
  }

  logout(): Observable<IMessage> {
    return this.authorizationRestService.logout();
  }

  sendResetEmail(email: string): Observable<IMessage> {
    return this.authorizationRestService.sendResetEmail(email);
  }

  resetPassword(token: string, password: string): Observable<IMessage> {
    // password = AES.encrypt(password + "", environment.secretKey).toString();
    return this.authorizationRestService.resetPassword(token, password);
  }

  signup(loginRequest: ILoginRequest): Observable<IMessage> {
    return this.authorizationRestService.signup(loginRequest);
  }

  insertNewUser(username: string, email: string, organization: string, password: string) {
    return this.authorizationRestService.insertNewUser(username, email, organization, password);
  }

  checkToken(verifyToken: string): Observable<boolean> {
    return this.authorizationRestService.checkToken(verifyToken);
  }

  refreshToken(): Observable<IMessage> {
    return this.authorizationRestService.refreshToken();
  }

  handleApiError(observable: Observable<any>): Observable<any> {
    return observable.pipe(
      catchError(error => {
        if (error.status === 401) {
          return this.authorizationRestService.refreshToken().pipe(
            switchMap((message) => {
              return observable;
            }),
            catchError(e => {
              return this.authorizationRestService.logout();
            }));
        } else if (error.status === 403) {
          return this.router.navigate(['/', 'dashboard'])
        } else {
          return throwError(() => error);
        }
      })
    );
  }

  handleApiErrorV2(observable: Observable<any>): Observable<any> {
    return observable.pipe(
      catchError(error => {
        if (error.status === 401) {
          return this.authorizationRestService.refreshToken().pipe(
            switchMap((message) => {
              return observable;
            }),
            catchError(e => {
              return this.authorizationRestService.logout();
            }));
        } else if (error.status === 403) {
          return this.router.navigate(['/', 'dashboard'])
        } else {
          return throwError(() => error);
        }
      })
    );
  }
}
