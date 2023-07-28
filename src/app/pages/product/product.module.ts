import {NgModule} from '@angular/core';

import {ProductRoutingModule} from './product-routing.module';
import {AllProductComponent} from './page/all-product/all-product.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {CommonModule} from "@angular/common";
import {NzCardModule} from "ng-zorro-antd/card";
import { SingleApiComponent } from './page/single-api/single-api.component';
import { LockScreenComponent } from './component/lock-screen/lock-screen.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import { ResponseTableComponent } from './component/response-table/response-table.component';
import {NzTableModule} from "ng-zorro-antd/table";


@NgModule({
    imports: [ProductRoutingModule, ReactiveFormsModule, NzFormModule, NzCheckboxModule, FormsModule, CommonModule, NzCardModule, NzButtonModule, NzTableModule],
  declarations: [
    AllProductComponent,
    SingleApiComponent,
    LockScreenComponent,
    ResponseTableComponent
  ],
  exports: [AllProductComponent]
})
export class ProductModule {
}
