import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPersonalInformation} from "../../interface/user/i-personal-information";
import {IMessage} from "../../interface/authorization/i-message";
import {AuthorizationService} from "../../service/authorization/authorization.service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class VendorRestService {

  private ProjectUrl: string = environment.apiUrl + '/api';

  constructor(private httpClient: HttpClient,
              private authorizationService: AuthorizationService) {
  }

  getVendorProfile(): Observable<IPersonalInformation> {
    return this.authorizationService.handleApiError(this.httpClient.get<IPersonalInformation>(this.ProjectUrl + '/vendors', {withCredentials: true}));
  }

  updateVendorProfile(personalInformation: IPersonalInformation): Observable<IMessage> {
    return this.authorizationService.handleApiError(this.httpClient.post<IMessage>(this.ProjectUrl + '/custom/updateProfile', personalInformation, {withCredentials: true}));
  }

  changePassword(password: string, newPassword: string): Observable<IMessage> {
    const body = {password, newPassword};
    return this.authorizationService.handleApiError(this.httpClient.post<IMessage>(this.ProjectUrl + '/custom/changePassword', body, {withCredentials: true}));
  }

}
