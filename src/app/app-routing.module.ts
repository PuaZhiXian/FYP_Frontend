import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/sign/sign-in'},
  {
    path: 'sign',
    loadChildren: () => import('./pages/sign-in-up/sign-in-up.module').then(m => m.SignInUpModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    data: {
      role: 'ROLE_VENDOR'
    }
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
    data: {
      role: 'ROLE_VENDOR'
    }
  },
  {
    path: 'subscription',
    loadChildren: () => import('./pages/subscription/subscription.module').then(m => m.SubscriptionModule),
    data: {
      role: 'ROLE_VENDOR'
    }
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule),
    data: {
      role: 'ROLE_VENDOR'
    }
  },
  {
    path: 'project', loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule),
    data: {
      role: 'ROLE_VENDOR'
    }
  },
  {
    path: 'guide', loadChildren: () => import('./pages/guide/guide.module').then(m => m.GuideModule),
    data: {
      role: 'ROLE_VENDOR'
    }
  },
  {
    path: 'admin/notification',
    loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationModule),
    data: {
      role: 'ROLE_ADMIN'
    }
  },
  {
    path: '**',
    loadChildren: () => import('./pages/error-handler-page/error-handler-page.module').then(m => m.ErrorHandlerPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
