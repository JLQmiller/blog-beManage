import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditArticleComponent } from './edit-article/edit-article.component';
import { EditArticlesListComponent } from './edit-articles-list/edit-articles-list.component';

import { EditRoutingModule } from './edit-routing.module';
import { MarkdownModule } from 'ngx-markdown';
import { BuiModule } from '../shared';

@NgModule({
  declarations: [
    EditArticleComponent,
    EditArticlesListComponent
  ],
  imports: [
    CommonModule,
    EditRoutingModule,
    FormsModule,
    MarkdownModule.forRoot(),
    BuiModule,
  ]
})
export class EditModule { }
