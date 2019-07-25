import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';

import { AccountService } from './account.service';

import { BuiModule } from '../shared';

import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MarkdownModule.forChild(),
    BuiModule,
  ],
  providers: [
    AccountService,
  ],
})
export class AccountModule { }
