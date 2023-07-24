import {Injectable} from '@angular/core';
import {AuthorizationRestService} from "../../restService/authorization/authorization.rest.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(
    private authorizationRestService: AuthorizationRestService,) {
  }

  login(email: string, password: string) {
    return this.authorizationRestService.login(email, password);
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

  signup(email: string, organization: string) {
    return this.authorizationRestService.signup(email, organization);
  }

  getPersonalInformation():Observable<any>{
    return this.authorizationRestService.getPersonalInformation();
  }
}
