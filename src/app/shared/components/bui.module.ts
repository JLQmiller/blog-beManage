import { NgModule, ModuleWithProviders } from '@angular/core';

import { IconModule } from './icon/icon.module';
import { PopoverModule } from './popover/popover.module';
// import { SideNavModule } from './sidenav/sidenav.module';

const BUI_MODULES = [
  IconModule,
  PopoverModule,
  // SideNavModule,
];

@NgModule({
  imports: BUI_MODULES,
  exports: BUI_MODULES,
})
export class BuiModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: BuiModule,
    };
  }

  public static forChild(): ModuleWithProviders {
    return {
      ngModule: BuiModule,
    };
  }
}
