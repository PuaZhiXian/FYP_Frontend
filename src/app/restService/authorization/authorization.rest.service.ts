import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationRestService {

  private baseUrl = 'http://localhost:4200';
  private ProjectUrl: string = this.baseUrl + '/api';

  constructor(private httpClient: HttpClient) {
  }

  login(email: string, password: string) {
    //TODO : integrate log in API
    return this.httpClient.get("https://api.github.com/users/hadley/orgs");
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

  signup(email: string, organization: string) {
    //TODO: integrate sign up API
    return this.httpClient.get("https://api.github.com/users/hadley/orgs");
  }

}
