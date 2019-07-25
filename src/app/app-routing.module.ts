import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'edit',
        loadChildren: () => import('./edit/edit.module').then(m => m.EditModule),
      },
      {
        path: '',
        redirectTo: 'edit',
        pathMatch: 'full',
      },

    ]
    // canActivate: []
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
