import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAnnouncement} from "../../interface/common/i-announcement";
import {AuthorizationService} from "../../service/authorization/authorization.service";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommonRestService {

  private ProjectUrl: string = environment.apiUrl + '/api';

  constructor(private httpClient: HttpClient,
              private authorizationService: AuthorizationService) {
  }

  getAnnouncement(): Observable<IAnnouncement[]> {
    return this.authorizationService.handleApiError(this.httpClient.get<IAnnouncement[]>(this.ProjectUrl + '/announcements', {withCredentials: true}));
  }

}
