import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/sign/sign-in'},
  {path: 'sign', loadChildren: () => import('./pages/sign-in-up/sign-in-up.module').then(m => m.SignInUpModule)},
  {path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)},
  {path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)},
  {path: 'dev', loadChildren: () => import('./pages/dev/dev.module').then(m => m.DevModule)},
  {path: 'subcription', loadChildren: () => import('./pages/subcription/subcription.module').then(m => m.SubcriptionModule)},
  {path: 'product', loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
