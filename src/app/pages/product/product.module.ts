import {NgModule} from '@angular/core';

import {ProductRoutingModule} from './product-routing.module';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {CommonModule} from "@angular/common";
import {NzCardModule} from "ng-zorro-antd/card";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzTableModule} from "ng-zorro-antd/table";
import {ApiDocumentationComponent} from './page/api-documentation/api-documentation.component';
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzBreadCrumbModule} from "ng-zorro-antd/breadcrumb";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {NzTabsModule} from "ng-zorro-antd/tabs";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzSelectModule} from "ng-zorro-antd/select";
import {CodeEditorComponent} from './component/code-editor/code-editor.component';
import {NzAnchorModule} from "ng-zorro-antd/anchor";
import {ChildAttributeComponent} from './component/child-attribute/child-attribute.component';
import {SingleApiCollectionComponent} from './component/single-api-collection/single-api-collection.component';
import {NzOverlayModule} from "ng-zorro-antd/core/overlay";
import {NzSkeletonModule} from "ng-zorro-antd/skeleton";


@NgModule({
  imports: [ProductRoutingModule, ReactiveFormsModule, NzFormModule, NzCheckboxModule, FormsModule, CommonModule, NzCardModule, NzButtonModule, NzTableModule, NzLayoutModule, NzBreadCrumbModule, NzIconModule, NzMenuModule, NzTabsModule, NzDropDownModule, NzSelectModule, NzAnchorModule, NzOverlayModule, NzSkeletonModule],
  declarations: [
    ApiDocumentationComponent,
    CodeEditorComponent,
    ChildAttributeComponent,
    SingleApiCollectionComponent
  ],
  exports: [ApiDocumentationComponent]
})
export class ProductModule {
}
