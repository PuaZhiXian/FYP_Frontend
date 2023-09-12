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
import { ApiDocumentationComponent } from './page/api-documentation/api-documentation.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzCodeEditorModule} from "ng-zorro-antd/code-editor";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzSelectModule} from "ng-zorro-antd/select";
import { CodeEditorComponent } from './component/code-editor/code-editor.component';
import {NzAnchorModule} from "ng-zorro-antd/anchor";
import { ChildAttributeComponent } from './component/child-attribute/child-attribute.component';
import { SingleApiCollectionComponent } from './component/single-api-collection/single-api-collection.component';


@NgModule({
    imports: [ProductRoutingModule, ReactiveFormsModule, NzFormModule, NzCheckboxModule, FormsModule, CommonModule, NzCardModule, NzButtonModule, NzTableModule, NzLayoutModule, NzBreadCrumbModule, NzIconModule, NzMenuModule, NzTabsModule, NzCodeEditorModule, NzDropDownModule, NzSelectModule, NzAnchorModule],
  declarations: [
    AllProductComponent,
    SingleApiComponent,
    LockScreenComponent,
    ResponseTableComponent,
    ApiDocumentationComponent,
    CodeEditorComponent,
    ChildAttributeComponent,
    SingleApiCollectionComponent
  ],
  exports: [AllProductComponent]
})
export class ProductModule {
}
