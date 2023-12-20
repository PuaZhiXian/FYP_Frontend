import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {IAdminNotification} from "../../interface/notification/i-admin-notification";
import {IMessage} from "../../interface/authorization/i-message";
import {IAdminCalendarEvent} from "../../interface/calendar/i-admin-calendar-event";
import {IAdminNotificationAlert} from "../../interface/notification/i-admin-notification-alert";

@Injectable({
  providedIn: 'root'
})
export class NotificationRestService {

  private ProjectUrl: string = environment.apiUrl + '/api';

  constructor(private httpClient: HttpClient) {
  }

  getNotificationList(): Observable<IAdminNotification[]> {
    return this.httpClient.get<IAdminNotification[]>(this.ProjectUrl + '/custom/get-announcement-list', {withCredentials: true});
  }

  deleteNotification(notificationId: number): Observable<IMessage> {
    return this.httpClient.delete<IMessage>(this.ProjectUrl + '/custom/delete-announcement/' + notificationId, {withCredentials: true});
  }

  getNotificationEventList(year: number, month: number): Observable<IAdminCalendarEvent[][][]> {
    return this.httpClient.post<IAdminCalendarEvent[][][]>(this.ProjectUrl + '/custom/get-announcement-event-list', {
      year,
      month
    }, {withCredentials: true});
  }

  createSaveNotification(notification: IAdminNotification): Observable<IMessage> {
    return this.httpClient.post<IMessage>(this.ProjectUrl + '/custom/create-announcement', notification, {withCredentials: true});
  }

  getSingleNotification(eventId: string): Observable<IAdminNotification> {
    return this.httpClient.get<IAdminNotification>(this.ProjectUrl + '/announcements/' + eventId, {withCredentials: true});
  }

  getNotificationAlertList(): Observable<IAdminNotificationAlert[]> {
    //TODO : api
    return this.httpClient.get<IAdminNotificationAlert[]>(this.ProjectUrl + '/custom/get-announcement-alert', {withCredentials: true});
  }

}
