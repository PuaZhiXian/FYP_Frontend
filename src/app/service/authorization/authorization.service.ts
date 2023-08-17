import {Injectable} from '@angular/core';
import {AuthorizationRestService} from "../../restService/authorization/authorization.rest.service";
import {Observable} from "rxjs";
import {ILoginRequest} from "../../interface/authorization/i-login-request";
import {IMessage} from "../../interface/authorization/i-message";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(
    private authorizationRestService: AuthorizationRestService,) {
  }

  login(loginRequest: ILoginRequest): Observable<IMessage> {
    return this.authorizationRestService.login(loginRequest);
  }

  logout() {
    return this.authorizationRestService.logout();
  }

  sendResetEmail(email: string) {
    return this.authorizationRestService.sendResetEmail(email);
  }

  resetPassword(password: string) {
    return this.authorizationRestService.resetPassword(password);
  }

  signup(loginRequest: ILoginRequest): Observable<IMessage> {
    return this.authorizationRestService.signup(loginRequest);
  }

  insertNewUser(username: string, email: string, organization: string, password: string) {
    return this.authorizationRestService.insertNewUser(username, email, organization, password);
  }

  getPersonalInformation(): Observable<any> {
    return this.authorizationRestService.getPersonalInformation();
  }
}
