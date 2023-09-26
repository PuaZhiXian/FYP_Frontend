import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, switchMap, throwError} from "rxjs";
import {environment} from "../../../environments/environment";
import {ILoginRequest} from "../../interface/authorization/i-login-request";
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
    return this.httpClient.post<IMessage>(`${this.ProjectUrl}/custom/login`, loginRequest, {withCredentials: true});
  }

  logout(): Observable<IMessage> {
    return this.httpClient.delete<IMessage>(`${this.ProjectUrl}/custom/logout`, {withCredentials: true});
  }

  sendResetEmail(email: string): Observable<IMessage> {
    return this.httpClient.post(`${this.ProjectUrl}/custom/sendEmail`, {email});
  }

  resetPassword(token: string, password: string): Observable<IMessage> {
    //TODO: integrate reset password API
    return this.httpClient.post<IMessage>(this.ProjectUrl + '/custom/setPassword', {token: token, password: password});
  }

  signup(loginRequest: ILoginRequest): Observable<IMessage> {
    return this.httpClient.post<IMessage>(`${this.ProjectUrl}/custom/register`, loginRequest);
  }


  insertNewUser(username: string, email: string, organization: string, password: string) {
    return this.httpClient.post(`${this.ProjectUrl}/auth/local/register`, {username, email, organization, password});
  }

  checkToken(verifyToken: string): Observable<boolean> {
    return this.httpClient.post<boolean>(`${this.ProjectUrl}/custom/checkToken`, {verifyToken});
  }

  refreshToken(): Observable<IMessage> {
    return this.httpClient.post<IMessage>(`${this.ProjectUrl}/custom/refresh-token`, {},{withCredentials: true} );
  }



}
