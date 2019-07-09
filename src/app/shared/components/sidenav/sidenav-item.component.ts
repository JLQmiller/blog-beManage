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

<<<<<<< HEAD
import { SidenavComponent } from './sidenav.component';
import { SidenavSubmenuComponent } from './sidenav-submenu.component';
import { SideNavStateService } from './sidenav-state.service';
=======
import {} from './sidenav.component';
import {} from './sidenav-submenu.component';
import {} from './sidenav-state.service';
>>>>>>> e2c9341eb0f67ee76b744690eb8b640737545d32

@Component({
  selector: 'blog-sidenav-item',
  templateUrl: './sidenav-item.component.html',
})
export class SidenavItemComponent implements OnInit, OnDestroy {
  // 添加class
  @HostBinding('class.blog-sidenav-item') hostClass = true;

  @HostBinding('class.collapsed') get collapsedClass() {
    return this.collapsed;
  }

  get collapsed() {
    return true;
    // return !this.submenu &&
  }

  constructor(
    private sideNav: SidenavComponent,
    @Optional() private subMenu: SidenavSubmenuComponent,
    private state: SideNavStateService,
    public elementRef: ElementRef,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    // const subMenuKey = this.subMenu && this.subMenu.key;
    // this.state.unregister(this.key, subMenuKey);
  }

}
