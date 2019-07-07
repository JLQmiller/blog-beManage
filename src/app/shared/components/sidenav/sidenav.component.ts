import {
  Component,
  OnInit,
  HostBinding,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  ElementRef,
} from '@angular/core';

import { SideNavRouterHandlerType, SideNavStateService } from './sidenav-state.service';

@Component({
  selector: 'blog-side-nav',
  templateUrl: './sideNav.component.html',
  providers: [ SideNavStateService ],
})
export class SidenavComponent implements OnInit {
  @HostBinding('class.blog-side-nav') hostClass = true;

  @HostBinding('class.collapsed')
  get isCollapsed() {
    return this.collapsed;
  }

  @Input() set routeHandler(value: boolean) {
    console.log(value);
    if (value === false) {
      console.log('normal');
      this.handlerType = 'normal';
    } else {
      console.log('route');
      this.handlerType = 'route';
    }
  }

  @Input() selectedKey: string;

  @Input() collapsed = false;

  @Input() sideNavTitle: string;

  @Input() sideNavHeadTemplate: TemplateRef<{$implicit: boolean, collapsed: boolean}>;

  @Input() sideNavTemplate: TemplateRef<{$implicit: boolean, collapsed: boolean}>;

  @Output() collapsedChange = new EventEmitter();

  @Output() selectChange = new EventEmitter();

  @Output() openChange = new EventEmitter();

  get context() {
    return {
      $implicit: this.collapsed,
      collapsed: this.collapsed,
    };
  }

  handlerType: SideNavRouterHandlerType;

  constructor(
    private state: SideNavStateService,
    public elementRef: ElementRef,
  ) { }

  ngOnInit() {
    this.state.selectedKeyObservable
    .subscribe(selectedKey => {
      if (selectedKey !== this.selectedKey) {
        this.selectChange.emit(selectedKey);
      }
    });
    setTimeout(() => {
      this.state.init(this.handlerType, this.selectedKey);
    });
  }

  // 触发收起展开事件
  toggle() {
    this.collapsed = !this.collapsed;
    this.collapsedChange.emit(this.collapsed);
  }

}
