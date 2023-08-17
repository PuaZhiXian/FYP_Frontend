import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {ILoginRequest} from "../../interface/authorization/i-login-request";
import {ILoginResponse} from "../../interface/authorization/i-login-response";
import {IMessage} from "../../interface/authorization/i-message";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationRestService {

  private baseUrl = environment.apiUrl;
  private ProjectUrl: string = this.baseUrl + '/api';

  constructor(private httpClient: HttpClient) {
  }

  login(loginRequest: ILoginRequest): Observable<IMessage> {
    return this.httpClient.post<IMessage>(`${this.ProjectUrl}/custom/login`, loginRequest);
  }

  logout() {
    //TODO: integrate logout API
    return this.httpClient.get("https://api.github.com/users/hadley/orgs");
  }

  sendResetEmail(email: string) {
    //TODO: integrate send reset email API
    return this.httpClient.post(`${this.ProjectUrl}/auth/forgot-password`, {email});
  } //GOT ERROR

  resetPassword(password: string) {
    //TODO: integrate reset password API
    return this.httpClient.get("https://api.github.com/users/hadley/orgs");
  }

  signup(loginRequest: ILoginRequest): Observable<IMessage> {
    return this.httpClient.post<IMessage>(`${this.ProjectUrl}/custom/register`, loginRequest);
  }


  insertNewUser(username: string, email: string, organization: string, password: string) {
    return this.httpClient.post(`${this.ProjectUrl}/auth/local/register`, {username, email, organization, password});
  }

  getPersonalInformation(): Observable<any> {
    //TODO: get user perfonal information
    return this.httpClient.get("https://api.github.com/users/hadley/orgs");
  }

}
