import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.apiUrl;
  private ProjectUrl: string = this.baseUrl + '/api';

  constructor(private httpClient: HttpClient) {
  }

  public isAuthenticated(): Observable<boolean> {
    return this.httpClient.post<boolean>(this.ProjectUrl + '/custom/check-is-expired', null,{withCredentials: true});
  }
}
