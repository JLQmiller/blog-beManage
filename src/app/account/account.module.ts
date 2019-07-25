import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './login/login.component';
import { AccountService } from './account.service';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { BuiModule } from '../shared';

import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    NzFormModule,
    ReactiveFormsModule,
    MarkdownModule.forChild(),
    BuiModule,
    NgZorroAntdModule
  ],
  providers: [
    AccountService,
  ],
})
export class AccountModule { }
