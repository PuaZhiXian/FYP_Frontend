import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IAnnouncement} from "../../interface/common/i-announcement";

@Injectable({
  providedIn: 'root'
})
export class CommonRestService {

  private baseUrl = 'http://localhost:1337';
  private ProjectUrl: string = this.baseUrl + '/api';

  constructor(private httpClient: HttpClient) {
  }

  getAnnouncement(): Observable<IAnnouncement> {
    return this.httpClient.get<IAnnouncement>(this.ProjectUrl + '/announcements', {withCredentials: true});
  }

}
