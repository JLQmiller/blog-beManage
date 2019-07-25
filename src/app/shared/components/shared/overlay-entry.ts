import {
  NgZone,
  ChangeDetectorRef,
} from '@angular/core';

import {
  CdkOverlayOrigin,
  ConnectionPositionPair, // origin与overlay相对位置点定义的类
  ConnectedOverlayPositionChange
} from '@angular/cdk/overlay';

import { BehaviorSubject } from 'rxjs';

import { POSITION_MAP, Placement } from './position-map';

// Overlay入口静态类
export abstract class OverlayEntry {
  // entry是否显示
  visible = new BehaviorSubject<boolean>(false);

  disabled = false;

  // subject负责分发connectionPosition
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
    if (this.disabled) {
      return;
    }

    this.visible.next(true);
  }

  hide() {
    this.visible.next(false);
  }

  // cdk positionChange默认回调方法
  onPositionChange(event: ConnectedOverlayPositionChange) {
    const pair: ConnectionPositionPair = event.connectionPair;
    console.log(pair);
    // true or false
    const placement: Placement = Object.keys(POSITION_MAP).find(mapKey => {
      const mapPair = POSITION_MAP[mapKey];
      return this.isPositionEqual(pair, mapPair);
    }) as Placement;
    if (placement && placement !== this.placement.getValue()) {
      this.placement.next(placement);
    }
    console.log(placement);
    const direction = this.toDirection(placement);
    /**
     * Set direction to 'none' synchronously, then set it to real direction later.
     * Use the transition for animation.
     */
    if (direction !== this.direction) {
      this.ngZone.run(() => { // 手动触发变更检测
        this.direction = 'none';
        // this.cdr.markForCheck();

        setTimeout(() => {
          this.direction = direction;
          this.cdr.detectChanges();
        });
      });
    }
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
