import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {VendorRestService} from "../../restService/vendor/vendor.rest.service";
import {IPersonalInformation} from "../../interface/user/i-personal-information";
import {IMessage} from "../../interface/authorization/i-message";
import {IAdminNewUser} from "../../interface/user/i-admin-new-user";
import {IAdminUserDetails} from "../../interface/user/i-admin-user-details";
import {IAdminUser} from "../../interface/user/i-admin-user";
import {IAdminUserStatistic} from "../../interface/user/i-admin-user-statistic";

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  constructor(
    private vendorRestService: VendorRestService,) {
  }

  getVendorProfile(): Observable<IPersonalInformation> {
    return this.vendorRestService.getVendorProfile();
  }

  updateVendorProfile(personalInformation: IPersonalInformation): Observable<IMessage> {
    return this.vendorRestService.updateVendorProfile(personalInformation);
  }

  changePassword(password: string, newPassword: string): Observable<IMessage> {
    return this.vendorRestService.changePassword(password, newPassword);
  }

  //ADMIN
  getUserList(): Observable<IAdminUser[]> {
    return this.vendorRestService.getUserList();
  }

  addUserSendEmail(userInformation: IAdminUser): Observable<IMessage> {
    return this.vendorRestService.addUserSendEmail(userInformation);
  }

  sendActivationEmail(email: string): Observable<IMessage> {
    return this.vendorRestService.sendActivationEmail(email);
  }

  blockUser(vendorId: number): Observable<IMessage> {
    return this.vendorRestService.blockUser(vendorId);
  }

  unblockUser(vendorId: number): Observable<IMessage> {
    return this.vendorRestService.unblockUser(vendorId);
  }

  getTotalUser(period: number): Observable<number> {
    return this.vendorRestService.getTotalUser(period);
  }

  getNewUser(): Observable<IAdminNewUser> {
    return this.vendorRestService.getNewUser();
  }

  getNonActiveUser(): Observable<number> {
    return this.vendorRestService.getNonActiveUser();
  }

  getOneUser(vendorId: string): Observable<IAdminUserDetails> {
    return this.vendorRestService.getOneUser(vendorId);
  }

  getUserStatistic(): Observable<IAdminUserStatistic> {
    return this.vendorRestService.getUserStatistic();
  }
}
