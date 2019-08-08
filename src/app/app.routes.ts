import { Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';

export const appRoutes: Routes = [
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'support',
    loadChildren: './_modules/support/support.module#SupportModule'
  }
];