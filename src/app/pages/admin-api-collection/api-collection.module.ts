import {NgModule} from '@angular/core';

import {ApiCollectionRoutingModule} from './api-collection-routing.module';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzFormModule} from "ng-zorro-antd/form";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzInputModule} from "ng-zorro-antd/input";
import {NzTableModule} from "ng-zorro-antd/table";
import {CommonModule} from "@angular/common";
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzMessageModule} from 'ng-zorro-antd/message';
import {NzToolTipModule} from "ng-zorro-antd/tooltip";
import {ApiCollectionComponent} from './page/api-collection/api-collection.component';
import {NzTagModule} from "ng-zorro-antd/tag";
import {NzDividerModule} from "ng-zorro-antd/divider";
import {NzUploadModule} from "ng-zorro-antd/upload";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {NzEmptyModule} from "ng-zorro-antd/empty";
import {UIModule} from "../UI/UI.module";
import {HeaderModule} from "../admin-header/header.module";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzStepsModule} from "ng-zorro-antd/steps";
import {ProductModule} from "../product/product.module";
import {NzCollapseModule} from "ng-zorro-antd/collapse";
import {PreviewApiCollectionComponent} from './components/preview-api-collection/preview-api-collection.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzMenuModule} from "ng-zorro-antd/menu";

@NgModule({
  imports: [ApiCollectionRoutingModule, HeaderModule, NzButtonModule, NzFormModule, ReactiveFormsModule, NzInputModule, NzTableModule, CommonModule, NzSkeletonModule, NzModalModule, NzCardModule, NzMessageModule, NzToolTipModule, NzTagModule, NzDividerModule, NzUploadModule, NzAvatarModule, NzCheckboxModule, FormsModule, NzEmptyModule, UIModule, HeaderModule, NzIconModule, NzStepsModule, ProductModule, NzCollapseModule, NzMessageModule, HeaderModule, NzLayoutModule, NzSelectModule, NzMenuModule, HeaderModule],
  declarations: [ApiCollectionComponent, PreviewApiCollectionComponent],
  exports: [ApiCollectionComponent]
})
export class ApiCollectionModule {
}
