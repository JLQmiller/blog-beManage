import {
  Component,
  OnInit,
  HostBinding,
  HostListener,
  Input,
  TemplateRef,
  NgZone,
  ChangeDetectorRef,
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { SidenavComponent } from './sidenav.component';
import { SideNavStateService } from './sidenav-state.service';

@Component({
  selector: 'blog-sidenav-submenu',
  templateUrl: './sidenav-submenu.component.html',
})
export class SidenavSubmenuComponent implements OnInit {
  @HostBinding('class.blog-sidenav-submenu') hostClass = true;

  // @HostBinding('class.collapsed')


  constructor() { }

  ngOnInit() {
  }

}
