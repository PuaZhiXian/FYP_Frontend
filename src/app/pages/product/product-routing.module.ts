import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllProductComponent} from "./page/all-product/all-product.component";
import {SingleApiComponent} from "./page/single-api/single-api.component";
import {ApiDocumentationComponent} from "./page/api-documentation/api-documentation.component";

const routes: Routes = [
  {
    path: '',
    component: AllProductComponent,
  },
  {
    path: 'single-api/:apiCollectionId',
    component: SingleApiComponent,
  },
  {
    path: 'documentation',
    component: ApiDocumentationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
