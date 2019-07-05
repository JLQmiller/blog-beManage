import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { SidenavComponent } from './sidenav.component';
import { SidenavItemComponent } from './sidenav-item.component';
import { SidenavSubmenuComponent } from './sidenav-submenu.component';
import { SidenavItemGroupComponent } from './sidenav-item-group.component';

@NgModule({
  declarations: [SidenavComponent, SidenavItemComponent, SidenavSubmenuComponent, SidenavItemGroupComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SidenavComponent,
    SidenavItemGroupComponent,
    SidenavItemComponent,

  ]
})
export class SidenavModule { }
