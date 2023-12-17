import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPersonalInformation} from "../../interface/user/i-personal-information";
import {IMessage} from "../../interface/authorization/i-message";
import {AuthorizationService} from "../../service/authorization/authorization.service";
import {environment} from "../../../environments/environment";
import {IAdminNewUser} from "../../interface/user/i-admin-new-user";
import {IAdminUserDetails} from "../../interface/user/i-admin-user-details";
import {IAdminUser} from "../../interface/user/i-admin-user";
import {IAdminUserStatistic} from "../../interface/user/i-admin-user-statistic";

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

  //ADMIN
  getUserList(): Observable<IAdminUser[]> {
    return this.httpClient.get<IAdminUser[]>(this.ProjectUrl + '/custom/getVendorList', {withCredentials: true});
  }

  addUserSendEmail(userInformation: IAdminUser): Observable<IMessage> {
    return this.httpClient.post<IMessage>(this.ProjectUrl + '/custom/create-user', userInformation, {withCredentials: true});
  }

  sendActivationEmail(email: string): Observable<IMessage> {
    return this.httpClient.post<IMessage>(this.ProjectUrl + '/custom/sendEmail', {email}, {withCredentials: true});
  }

  blockUser(vendorId: number): Observable<IMessage> {
    return this.httpClient.post<IMessage>(this.ProjectUrl + '/custom/block-vendor', {id: vendorId}, {withCredentials: true});
  }

  unblockUser(vendorId: number): Observable<IMessage> {
    return this.httpClient.post<IMessage>(this.ProjectUrl + '/custom/unblock-vendor', {id: vendorId}, {withCredentials: true});
  }

  getTotalUser(period: number): Observable<number> {
    if (period > 0) {
      return this.httpClient.get<number>(this.ProjectUrl + '/custom/get-all-user/' + period, {withCredentials: true});
    } else {
      return this.httpClient.get<number>(this.ProjectUrl + '/custom/get-all-user', {withCredentials: true});
    }
  }

  getNewUser(): Observable<IAdminNewUser> {
    return this.httpClient.get<IAdminNewUser>(this.ProjectUrl + '/custom/get-new-user', {withCredentials: true});
  }

  getNonActiveUser(): Observable<number> {
    return this.httpClient.get<number>(this.ProjectUrl + '/custom/get-non-active-user', {withCredentials: true});
  }

  getOneUser(vendorId: string): Observable<IAdminUserDetails> {
    return this.httpClient.get<IAdminUserDetails>(this.ProjectUrl + '/custom/get-one-user/' + vendorId, {withCredentials: true});
  }

  getUserStatistic(): Observable<IAdminUserStatistic> {
    return this.httpClient.get<IAdminUserStatistic>(this.ProjectUrl + '/custom/get-user-data/', {withCredentials: true});
  }

}
