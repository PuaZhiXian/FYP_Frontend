import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardModule} from "./pages/admin-dashboard/dashboard.module";
import {AuthGuard} from "./guard/auth.guard";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/sign/sign-in'},
  {
    path: 'sign',
    loadChildren: () => import('./pages/sign-in-up/sign-in-up.module').then(m => m.SignInUpModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_VENDOR, ROLE_ADMIN'
    }
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_VENDOR'
    }
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_VENDOR'
    }
  },
  {
    path: 'subscription',
    loadChildren: () => import('./pages/subscription/subscription.module').then(m => m.SubscriptionModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_VENDOR'
    }
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.module').then(m => m.ProductModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_VENDOR'
    }
  },
  {
    path: 'project', loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_VENDOR'
    }
  },
  {
    path: 'guide', loadChildren: () => import('./pages/guide/guide.module').then(m => m.GuideModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_VENDOR'
    }
  },
  {
    path: 'admin/notification',
    loadChildren: () => import('./pages/admin-notification/notification.module').then(m => m.NotificationModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN'
    }
  },
  {
    path: 'admin/user',
    loadChildren: () => import('./pages/admin-user/user.module').then(m => m.UserModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN'
    }
  },
  {
    path: 'admin/dashboard',
    loadChildren: () => import('./pages/admin-dashboard/dashboard.module').then(m => m.DashboardModule),
    canActivate: [AuthGuard],
    data: {
      role: 'ROLE_ADMIN'
    }
  },
  {
    path: 'admin/api-collection',
    loadChildren: () => import('./pages/admin-api-collection/api-collection.module').then(m => m.ApiCollectionModule),
    canActivate: [AuthGuard],
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
