import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { 
  LayoutComponent, LoginComponent,
  HomeComponent
} from './pages';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: LayoutComponent, children: [
      { path: '', component: HomeComponent }
    ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: false });
