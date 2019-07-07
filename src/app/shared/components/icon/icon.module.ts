import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconSymbolComponent } from './icon-symbol.component';
import { IconDirective } from './icon.directive';

export * from './icon-symbol.component';
export * from './icon.directive';

@NgModule({
  declarations: [
    IconSymbolComponent,
    IconDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    IconSymbolComponent,
    IconDirective,
  ],
})
export class IconModule { }
