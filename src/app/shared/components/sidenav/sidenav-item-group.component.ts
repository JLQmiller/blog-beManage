import { Component, HostBinding, Input } from '@angular/core';
import { SidenavComponent } from './sidenav.component';

@Component({
  selector: 'blog-sidenav-item-group',
  templateUrl: './sidenav-item-group.component.html',
})
export class SidenavItemGroupComponent {
  @HostBinding('class.sui-side-nav-item-group') hostClass = true;

  @HostBinding('class.collapsed') get collapsedClass() {
    return this.sideNav.collapsed;
  }

  @Input() sideNavTitle: string;

  constructor(
    private sideNav: SidenavComponent,
  ) { }

}
