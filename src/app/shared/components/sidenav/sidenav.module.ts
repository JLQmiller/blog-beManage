import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav.component';
import { SidenavItemComponent } from './sidenav-item.component';
import { SidenavSubmenuComponent } from './sidenav-submenu.component';

@NgModule({
  declarations: [SidenavComponent, SidenavItemComponent, SidenavSubmenuComponent],
  imports: [
    CommonModule
  ]
})
export class SidenavModule { }
