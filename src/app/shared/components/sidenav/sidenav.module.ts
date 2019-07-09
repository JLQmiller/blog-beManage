import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { IconModule } from '../icon/icon.module';

// import { SidenavComponent } from './sidenav.component';
// import { SidenavItemComponent } from './sidenav-item.component';
// import { SidenavSubmenuComponent } from './sidenav-submenu.component';
// import { SidenavItemGroupComponent } from './sidenav-item-group.component';
// import { SideNavRouterHandler } from './sidenav-state.service';

// export * from './sidenav-item.component';
// export * from './sidenav-item.component';
// export * from './sidenav-item-group.component';
// export * from './sidenav-submenu.component';
// export * from './sidenav-state.service';

@NgModule({
  declarations: [
    // SidenavComponent,
    // SidenavItemComponent,
    // SidenavSubmenuComponent,
    // SidenavItemGroupComponent
  ],
  imports: [
    CommonModule,
    OverlayModule,
    IconModule,
  ],
  providers: [
<<<<<<< HEAD
    // SideNavRouterHandler,
  ],
  exports: [
    // SidenavComponent,
    // SidenavItemGroupComponent,
    // SidenavItemComponent,
    // SidenavSubmenuComponent,
=======
    SideNavRouterHandler,
  ],
  exports: [
    SidenavComponent,
    SidenavItemGroupComponent,
    SidenavItemComponent,
    SidenavSubmenuComponent,
>>>>>>> e2c9341eb0f67ee76b744690eb8b640737545d32
  ]
})
export class SideNavModule { }
