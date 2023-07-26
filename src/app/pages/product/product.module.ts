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


@NgModule({
  imports: [ProductRoutingModule, ReactiveFormsModule, NzFormModule, NzCheckboxModule, FormsModule, CommonModule, NzCardModule],
  declarations: [
    AllProductComponent,
    SingleApiComponent,
    LockScreenComponent
  ],
  exports: [AllProductComponent]
})
export class ProductModule {
}
