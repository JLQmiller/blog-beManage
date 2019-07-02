import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { EditArticlesListComponent } from './edit-articles-list/edit-articles-list.component';

@NgModule({
  declarations: [EditArticleComponent, EditArticlesListComponent],
  imports: [
    CommonModule
  ]
})
export class EditModule { }
