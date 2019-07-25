import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditArticleComponent } from './edit-article/edit-article.component';

const editRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: EditArticleComponent,
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(editRoutes)],
  exports: [RouterModule]
})
export class EditRoutingModule { }
