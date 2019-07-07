import {
  Component,
  OnInit,
  HostBinding,
  Input,
  Optional,
  HostListener,
  OnDestroy,
  TemplateRef,
  ElementRef,
} from '@angular/core';

import {} from './sidenav.component';
import {} from './sidenav-submenu.component';
import {} from './sidenav-state.service';

@Component({
  selector: 'blog-sidenav-item',
  templateUrl: './sidenav-item.component.html',
})
export class SidenavItemComponent implements OnInit {
  @HostBinding('class.blog-sidenav-item') hostClass = true;

  // @HostBinding('class.collapsed') get collapsedClass() {
    // return this.collapsed;
  // }

  constructor() { }

  ngOnInit() {
  }

}
