import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { PopoverComponent } from './popover.component';
import { PopoverTriggerDirective } from './popover-trigger.directive';

export * from './popover.component';
export * from './popover-trigger.directive';

@NgModule({
  imports: [
    CommonModule,
    OverlayModule,
  ],
  declarations: [
    PopoverComponent,
    PopoverTriggerDirective
  ],
  exports: [
    PopoverComponent,
    PopoverTriggerDirective,
  ]
})
export class PopoverModule { }
