import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/sign/sign-in'},
  {path: 'sign', loadChildren: () => import('./pages/sign-in-up/sign-in-up.module').then(m => m.SignInUpModule)},
  {path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)},
  {path: 'dev', loadChildren: () => import('./pages/dev/dev.module').then(m => m.DevModule)},
  {path: 'subscription', loadChildren: () => import('./pages/subscription/subscription.module').then(m => m.SubscriptionModule)},
  {path: 'product', loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule)},
  {path: 'project', loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule)},
  {path: 'guide', loadChildren: () => import('./pages/guide/guide.module').then(m => m.GuideModule)},
  {path: '**', loadChildren: () => import('./pages/error-handler-page/error-handler-page.module').then(m => m.ErrorHandlerPageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
