import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {NotificationRestService} from "../../restService/notification/notification.rest.service";
import {IAdminNotification} from "../../interface/notification/i-admin-notification";
import {IMessage} from "../../interface/authorization/i-message";
import {IAdminCalendarEvent} from "../../interface/calendar/i-admin-calendar-event";
import {IAdminNotificationAlert} from "../../interface/notification/i-admin-notification-alert";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private notificationRestService: NotificationRestService,) {
  }

  getNotificationList(): Observable<IAdminNotification[]> {
    return this.notificationRestService.getNotificationList();
  }

  deleteNotification(notificationId: number): Observable<IMessage> {
    return this.notificationRestService.deleteNotification(notificationId);
  }

  getNotificationEventList(year: number, month: number): Observable<IAdminCalendarEvent[][][]> {
    return this.notificationRestService.getNotificationEventList(year, month);
  }

  createSaveNotification(notification: IAdminNotification): Observable<IMessage> {
    return this.notificationRestService.createSaveNotification(notification);
  }

  getSingleNotification(eventId: string): Observable<IAdminNotification> {
    return this.notificationRestService.getSingleNotification(eventId);
  }

  getNotificationAlertList(): Observable<IAdminNotificationAlert[]> {
    return this.notificationRestService.getNotificationAlertList();
  }

}
