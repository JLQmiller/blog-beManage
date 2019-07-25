import { NgModule } from '@angular/core';
import { BuiModule } from './components/bui.module';
import { ApiService,  } from './services'
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BuiModule,
  ],
  exports: [
    BuiModule,
  ]
})
export class SharedModule { }
