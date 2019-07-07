import {
  NgZone,
  ChangeDetectorRef,
} from '@angular/core';

import {
  CdkOverlayOrigin,
  ConnectionPositionPair,
  ConnectedOverlayPositionChange
} from '@angular/cdk/overlay';

import { BehaviorSubject } from 'rxjs';

import { Placement } from './position-map';

// Overlay入口静态类
export abstract class OverlayEntry {
  // entry是否显示
  visible = new BehaviorSubject<boolean>(false);

  disabled = false;

  placement = new BehaviorSubject<Placement>(null);

  // entry打开方向
  direction: string;

  // Overlay元素定位相对应的的origin
  overlayOrigin: CdkOverlayOrigin;

  positions: ConnectionPositionPair[] = [];

  constructor(
    protected ngZone: NgZone,
    protected cdr: ChangeDetectorRef,
  ) { }

  show() {
    // if () {

    // }
  }

  onPositionChange(event: ConnectedOverlayPositionChange) {
    const pair: ConnectionPositionPair = event.connectionPair;
    // const placement: Placement = Object.keys(POSITION_MAP)
  }
  // 判断两个position位置p1, p2是否等值
  isPositionEqual(p1: ConnectionPositionPair, p2: ConnectionPositionPair) {
    const notEqualProperty = Object.getOwnPropertyNames(p1).find(property => {
      return p1[property] !== p2[property];
    });

    return !notEqualProperty;
  }

  // 设置overlay origin,为计算相对位置的元素
  setOverlayOrigin(origin: CdkOverlayOrigin) {
    this.overlayOrigin = origin;
  }

  // 获取方向，但进行处理如topRight => top
  toDirection(camel: Placement) {
    return camel.split(/(?=[A-Z])/)[0];
  }
}
