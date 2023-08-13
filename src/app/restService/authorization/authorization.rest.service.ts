import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import { environment} from "../../../environments/environment";
import {ILoginRequest} from "../../interface/authorization/i-login-request";
import {ILoginResponse} from "../../interface/authorization/i-login-response";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationRestService {

  private baseUrl = environment.apiUrl;
  private ProjectUrl: string = this.baseUrl + '/api';

  constructor(private httpClient: HttpClient) {
  }

  // login(email: string, password: string) {
  //   //TODO : integrate log in API
  //   return this.httpClient.get("https://api.github.com/users/hadley/orgs");
  // }

  // login(email: string, password: string) {
  //   return this.httpClient.post(`${this.ProjectUrl}/user/mysql/login`, {email, password});
  // }
  login(loginRequest: ILoginRequest):Observable<ILoginResponse> {
    return this.httpClient.post<ILoginResponse>(`${this.ProjectUrl}/custom/vendorLogin`, loginRequest);
  }

  logout() {
    //TODO: integrate logout API
    return this.httpClient.get("https://api.github.com/users/hadley/orgs");
  }

  // sendResetEmail(email: string) {
  //   //TODO: integrate send reset email API
  //   return this.httpClient.get("https://api.github.com/users/hadley/orgs");
  // }
  sendResetEmail(email: string) {
    //TODO: integrate send reset email API
    return this.httpClient.post(`${this.ProjectUrl}/auth/forgot-password`, {email});
  } //GOT ERROR

  resetPassword(password: string) {
    //TODO: integrate reset password API
    return this.httpClient.get("https://api.github.com/users/hadley/orgs");
  }

  // signup(email: string, organization: string) {
  //   //TODO: integrate sign up API
  //   return this.httpClient.get("https://api.github.com/users/hadley/orgs");
  // }
  // signup(email: string, organization: string) {
  //   return this.httpClient.post(`${this.ProjectUrl}/user/mysql/signup`, {email, organization});
  // }
  signup() {
    const token = "0e60f538c29b5211bc233626f9905b0b713a793e3943bfbd27d83ebddd7101481e6f47c500dc0b2321e6082bf7d6ef44c3f21374f10d1b41fceacac843e3bb658f4665e134b4fee92e323e5582a9e0b7a78dd9c5b12c0dee6899d1e3e1a7c91584408a6846a07264f8b85b2b85d5dbfed1a80a196887fdbaedc0bbbf10ef800d";
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    return this.httpClient.get(`${this.ProjectUrl}/users`, httpOptions);
  }


  insertNewUser(username: string, email: string, organization: string, password: string) {
    return this.httpClient.post(`${this.ProjectUrl}/auth/local/register`, {username, email, organization, password});
  }

  getPersonalInformation():Observable<any> {
    //TODO: get user perfonal information
    return this.httpClient.get("https://api.github.com/users/hadley/orgs");
  }

}
