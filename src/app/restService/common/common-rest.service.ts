import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAnnouncement} from "../../interface/common/i-announcement";
import {AuthorizationService} from "../../service/authorization/authorization.service";

@Injectable({
  providedIn: 'root'
})
export class CommonRestService {

  private baseUrl = 'http://localhost:1337';
  private ProjectUrl: string = this.baseUrl + '/api';

  constructor(private httpClient: HttpClient,
              private authorizationService: AuthorizationService) {
  }

  getAnnouncement(): Observable<IAnnouncement> {
    return this.authorizationService.handleApiError(this.httpClient.get<IAnnouncement>(this.ProjectUrl + '/announcements', {withCredentials: true}));
  }

}
