import {Injectable} from '@angular/core';
import {ILoginRequest} from "../../interface/authorization/i-login-request";
import {Observable} from "rxjs";
import {ILoginResponse} from "../../interface/authorization/i-login-response";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {
  }

  signIn(loginRequest: ILoginRequest): Observable<ILoginResponse> {
    return this.httpClient.post<ILoginResponse>(`http://localhost:3000/auth/login`, loginRequest, {withCredentials: true});
  }

  signUp(){

  }

  project(): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:3000`, {withCredentials: true});
  }


}
