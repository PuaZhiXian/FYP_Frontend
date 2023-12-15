import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IRole} from "../interface/authorization/i-role";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.apiUrl;
  private ProjectUrl: string = this.baseUrl + '/api';

  constructor(private httpClient: HttpClient) {
  }

  public isAuthenticated(): Observable<IRole> {
    return this.httpClient.post<IRole>(this.ProjectUrl + '/custom/check-is-expired', null, {withCredentials: true});
  }
}
