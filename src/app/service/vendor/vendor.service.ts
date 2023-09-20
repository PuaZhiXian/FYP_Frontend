import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {VendorRestService} from "../../restService/vendor/vendor.rest.service";
import {IPersonalInformation} from "../../interface/user/i-personal-information";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(
    private vendorRestService: VendorRestService,) {
  }

  getVendorProfile(): Observable<IPersonalInformation> {
    return this.vendorRestService.getVendorProfile();
  }

}
