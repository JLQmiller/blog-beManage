import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { filter, map, distinctUntilChanged, skip } from 'rxjs/operators';

export type SideNavRouterHandlerType = 'normal' | 'route';

@Injectable()
export class SideNavStateService {

  // 处理方式
  handler: SideNavRouterHandlerType = 'normal';

  itemKeys: string[] = [];

  subMenuKeys: {[key: string]: string[]} = {};

  subMenuOpens: {[key: string]: boolean} = {};

  // 分发所选项subject
  selectedKeySubject = new BehaviorSubject<string>(null);

  // Subject分发初始化为Null,应该skip第一个分发结果
  selectedKeyObservable = this.selectedKeySubject.asObservable().pipe(
    skip(1),
    distinctUntilChanged(),
  );

  constructor(
    private routerHandler: SideNavRouterHandler,
  ) { }

  // 初始化选项
  init(handler: SideNavRouterHandlerType, selectedKey: string) {
    this.initHandler(handler);
    if (selectedKey) {
      // this.select(selectedKey);
    }
    // route模式
    if (this.handler === 'route') {
      this.openSelectedMenuItem();
    }
  }

  initHandler(handler: SideNavRouterHandlerType) {
    this.handler = handler;
  }

  openSelectedMenuItem() {

  }

  updateSelectedKey(key: string) {
    this.selectedKeySubject.next(key);
  }

  // 选择
<<<<<<< HEAD
  // select(itemKey: string) {
  //   if (this.handler === 'route') {
  //     this.routerHandler.nav(itemKey);
  //   } else {
  //     this.updateSelectedKey(itemKey);
  //   }
  // }
=======
  select(itemKey: string) {
    if (this.handler === 'route') {
      this.routerHandler.nav(itemKey);
    } else {
      this.updateSelectedKey(itemKey);
    }
  }
>>>>>>> e2c9341eb0f67ee76b744690eb8b640737545d32

  isActive(itemKey: string) {
    const selectedKey = this.selectedKeySubject.getValue();
  }

  isSubMenuActive(subMenuKey: string) {

  }

  unregister(itemKey: string, subMenuKey?: string) {
    const idx = this.itemKeys.indexOf(itemKey);
    this.itemKeys.splice(idx, 1);
    if (subMenuKey) {
      const sIdx = this.subMenuKeys[subMenuKey].indexOf(itemKey);
      this.subMenuKeys[subMenuKey].splice(sIdx, 1);
    }
  }

  registerSubMenu(subMenuKey: string) {
    this.subMenuKeys[subMenuKey] = [];
  }
}

@Injectable()
// 处理侧边栏路由导航事件
export class SideNavRouterHandler {
  urlObservable: Observable<string> = this.router.events.pipe(
    filter(event => event instanceof NavigationEnd),
    map((event: NavigationEnd) => event.url),
  );

  constructor(
    private router: Router,
  ) {}

  findActive(urls: string[]) {
    return urls.find(url => this.router.isActive(url, false));
  }

  nav(url: string) {
    this.router.navigateByUrl(url);
  }
}
