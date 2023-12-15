import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IAdminCalendarFormat} from "../../../../interface/calendar/i-admin-calendar-format";
import {IAdminCalendarEvent} from "../../../../interface/calendar/i-admin-calendar-event";

@Component({
  selector: 'calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @Input() eventList: IAdminCalendarEvent[][][] = [];
  @Output() callClickEventOnDateRequest = new EventEmitter<Date>();
  @Output() callClickEventOnEventRequest = new EventEmitter<string>();

  readonly months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  readonly daysOfTheWeek = ["Su", "Mo", 'Tu', "We", 'Th', 'Fr', 'Sa'];

  date = new Date();
  currYear = this.date.getFullYear();
  currMonth = this.date.getMonth();

  calendarDate: IAdminCalendarFormat[][] = [];

  ngOnInit(): void {
    this.renderCalendar();
  }

  renderCalendar() {
    let firstDayofMonth = new Date(this.currYear, this.currMonth, 1).getDay()
    let lastDateofMonth = new Date(this.currYear, this.currMonth + 1, 0).getDate()
    let lastDayofMonth = new Date(this.currYear, this.currMonth, lastDateofMonth).getDay()
    let lastDateofLastMonth = new Date(this.currYear, this.currMonth, 0).getDate();
    let tempCalendarDate: IAdminCalendarFormat[] = [];

    //create previous month day
    /*if (this.currMonth < 0 || this.currMonth > 11) { // if current month is less than 0 or greater than 11
      // creating a new date of current year & month and pass it as date value
      this.date = new Date(this.currYear, this.currMonth, new Date().getDate());
      this.currYear = this.date.getFullYear(); // updating current year with new date year
      this.currMonth = this.date.getMonth(); // updating current month with new date month
    }*/

    let previousMonth: number = this.currMonth - 1;
    for (let i = firstDayofMonth; i > 0; i--) {
      tempCalendarDate.push(
        {
          date: new Date(this.currYear, this.currMonth - 1, lastDateofLastMonth - i + 1),
          info: 'previous'
        }
      )
    }

    //create current month day
    for (let i = 1; i <= lastDateofMonth; i++) {
      let isToday = i === this.date.getDate() && this.currMonth === new Date().getMonth() && this.currYear === new Date().getFullYear();
      tempCalendarDate.push(
        {
          date: new Date(this.currYear, this.currMonth, i),
          info: isToday ? 'today' : 'current'
        }
      )

    }

    //create future month
    let i = lastDayofMonth;
    while (tempCalendarDate.length < 42) {
      tempCalendarDate.push(
        {
          date: new Date(this.currYear, this.currMonth + 1, i - lastDayofMonth + 1),
          info: 'future'
        }
      )
      i++;
    }
    this.calendarDate = this.splitArrayBy7(tempCalendarDate)
  }

  redirectToToday() {
    this.date = new Date();
    this.currYear = this.date.getFullYear();
    this.currMonth = this.date.getMonth();
    this.renderCalendar();
  }

  changeMonth(redirectToMonth: number) {
    this.currMonth = redirectToMonth;
    if (this.currMonth < 0 || this.currMonth > 11) { // if current month is less than 0 or greater than 11
      // creating a new date of current year & month and pass it as date value
      this.date = new Date(this.currYear, this.currMonth, new Date().getDate());
      this.currYear = this.date.getFullYear(); // updating current year with new date year
      this.currMonth = this.date.getMonth(); // updating current month with new date month
    } else {
      this.date = new Date(); // pass the current date as date value
    }
    this.renderCalendar();
  }

  splitArrayBy7(calendarDate: IAdminCalendarFormat[]): IAdminCalendarFormat[][] {
    return calendarDate.reduce((result: any[][], current: any, index: number) => {
      const chunkIndex = Math.floor(index / 7);

      if (!result[chunkIndex]) {
        result[chunkIndex] = [];
      }

      result[chunkIndex].push(current);
      return result;
    }, []);
  }

  clickEventOnDate(date: Date | undefined) {
    this.callClickEventOnDateRequest.emit(date);
  }

  clickEventOnEvent(clickResponse: string) {
    this.callClickEventOnEventRequest.emit(clickResponse);
  }
}
