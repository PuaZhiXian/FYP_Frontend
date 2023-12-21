import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {HeaderComponent} from "../../../header/page/header/header.component";
import {VendorService} from "../../../../service/vendor/vendor.service";
import {NzMessageService} from "ng-zorro-antd/message";
import {finalize} from "rxjs";
import {IAdminNewUser} from "../../../../interface/user/i-admin-new-user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  chartOptions: any = {};
  currentDate: Date = new Date();
  totalUserDayOption: number[] = [30, 60, 90]
  selectedTotalUserDayOption !: number
  totalUser: number = 0;
  totalNewUser!: IAdminNewUser;
  totalNonActiveUser: number = 0;

  loadingTotalUser: boolean = true;
  loadingNewUser: boolean = true;
  loadingNonActiveUser: boolean = true;


  constructor(private vendorService: VendorService,
              private message: NzMessageService,
              private ref: ChangeDetectorRef,) {
  }

  ngOnInit(): void {
    HeaderComponent.headerIndicator = 'user';
    this.selectedTotalUserDayOption = this.totalUserDayOption[0];
    this.getTotalUser();
    this.getUserStatistic();
  }

  getUserStatistic() {
    this.vendorService.getUserStatistic()
      .subscribe((resp) => {
        this.chartOptions = {
          height: 150,
          animationEnabled: true,
          data: [{
            type: "pie", //change type to column, line, area, doughnut, etc
            indexLabel: "{name}: {y}%",
            dataPoints: [
              {name: "Active User", y: resp.activeUserPercentage},
              {name: "New User", y: resp.newUserPercentage},
              {name: "Non-actived User", y: resp.nonActivatedUserPercentage},
              {name: "Non-active User", y: resp.nonActiveUserPercentage},
            ]
          }]
        }
      })
  }

  getTotalUser() {
    this.loadingTotalUser = true;
    this.vendorService.getTotalUser(this.selectedTotalUserDayOption)
      .pipe(finalize(() => {
        this.loadingTotalUser = false;
        this.ref.detectChanges();
        this.ref.markForCheck();
      }))
      .subscribe((resp) => {
        this.totalUser = resp;
      })
  }

  getNewUser() {
    this.vendorService.getNewUser()
      .pipe(finalize(() => {
        this.loadingNewUser = false;
        this.ref.detectChanges();
        this.ref.markForCheck();
      }))
      .subscribe((resp) => {
        this.totalNewUser = resp;
      })
  }


  getNonActiveUser() {
    this.vendorService.getNonActiveUser()
      .pipe(finalize(() => {
        this.loadingNonActiveUser = false;
        this.ref.detectChanges();
        this.ref.markForCheck();
      }))
      .subscribe((resp) => {
        this.totalNonActiveUser = resp;
      })
  }
}
