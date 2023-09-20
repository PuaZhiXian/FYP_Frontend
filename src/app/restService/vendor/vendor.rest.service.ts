import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IApiCategory} from "../../interface/api-collection/i-api-category";
import {IPersonalInformation} from "../../interface/user/i-personal-information";

@Injectable({
  providedIn: 'root'
})
export class VendorRestService {

  private baseUrl = 'http://localhost:1337';
  private ProjectUrl: string = this.baseUrl + '/api';

  constructor(private httpClient: HttpClient) {
  }

  getVendorProfile(): Observable<IPersonalInformation> {
    return this.httpClient.get<IPersonalInformation>(this.ProjectUrl + '/vendors', {withCredentials: true});
  }
}
