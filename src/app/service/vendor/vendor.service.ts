import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {VendorRestService} from "../../restService/vendor/vendor.rest.service";
import {IPersonalInformation} from "../../interface/user/i-personal-information";
import {IMessage} from "../../interface/authorization/i-message";

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
}
