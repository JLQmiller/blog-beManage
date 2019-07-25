import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule),
  },
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then(m => m.EditModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
