import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { environment} from "../../../environments/environment";

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
  login(identifier: string, password: string) {
    return this.httpClient.post(`${this.ProjectUrl}/auth/local`, {identifier, password});
  }

  logout() {
    //TODO: integrate logout API
    return this.httpClient.get("https://api.github.com/users/hadley/orgs");
  }

  sendResetEmail(email: string) {
    //TODO: integrate send reset email API
    return this.httpClient.get("https://api.github.com/users/hadley/orgs");
  }

  resetPassword(password: string) {
    //TODO: integrate reset password API
    return this.httpClient.get("https://api.github.com/users/hadley/orgs");
  }

  // signup(email: string, organization: string) {
  //   //TODO: integrate sign up API
  //   return this.httpClient.get("https://api.github.com/users/hadley/orgs");
  // }
  signup(email: string, organization: string) {
    return this.httpClient.post(`${this.ProjectUrl}/user/mysql/signup`, {email, organization});
  }

  insertNewUser(email: string, organization: string, password: string) {
    return this.httpClient.post(`${this.ProjectUrl}/user/mysql/insertNewUser`, {email, organization, password});
  }

  getPersonalInformation():Observable<any> {
    //TODO: get user perfonal information
    return this.httpClient.get("https://api.github.com/users/hadley/orgs");
  }

}
