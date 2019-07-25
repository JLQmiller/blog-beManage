import {
  ConnectionPositionPair,
  HorizontalConnectionPos,
  VerticalConnectionPos,
} from '@angular/cdk/overlay';


// 定义可选位置
export type Placement = 'top' | 'topCenter' | 'topLeft' | 'topRight'
  | 'bottom' | 'bottomCenter' | 'bottomLeft' | 'bottomRight'
  | 'right' | 'rightTop' | 'rightBottom'
  | 'left' | 'leftTop' | 'leftBottom';

const _POSITION_MAP: {[key: string]: PositionMapPair} = {
  top: {
    originX: 'center',
    originY: 'top',
    overlayX: 'center',
    overlayY: 'bottom',
  },
  topCenter: {
    originX: 'center',
    originY: 'top',
    overlayX: 'center',
    overlayY: 'bottom',
  },
  topLeft: {
    originX: 'start',
    originY: 'top',
    overlayX: 'start',
    overlayY: 'bottom',
  },
  topRight: {
    originX: 'end',
    originY: 'top',
    overlayX: 'end',
    overlayY: 'bottom',
  },
  right: {
    originX: 'end',
    originY: 'center',
    overlayX: 'start',
    overlayY: 'center',
  },
  rightTop: {
    originX: 'end',
    originY: 'top',
    overlayX: 'start',
    overlayY: 'bottom',
  },
  rightBottom: {
    originX: 'end',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'bottom',
  },
  bottom: {
    originX: 'center',
    originY: 'bottom',
    overlayX: 'center',
    overlayY: 'top',
  },
  bottomCenter: {
    originX: 'center',
    originY: 'bottom',
    overlayX: 'center',
    overlayY: 'top',
  },
  bottomLeft: {
    originX: 'start',
    originY: 'bottom',
    overlayX: 'start',
    overlayY: 'top',
  },
  bottomRight: {
    originX: 'end',
    originY: 'bottom',
    overlayX: 'end',
    overlayY: 'top',
  },
  left: {
    originX: 'start',
    originY: 'center',
    overlayX: 'end',
    overlayY: 'center',
  },
  leftTop: {
    originX: 'start',
    originY: 'center',
    overlayX: 'end',
    overlayY: 'top',
  },
  leftBottom: {
    originX: 'start',
    originY: 'bottom',
    overlayX: 'end',
    overlayY: 'bottom',
  },
};

function createConnectionPositionPair(pair: PositionMapPair): ConnectionPositionPair {
  const {
    originX,
    originY,
    overlayX,
    overlayY,
  } = pair;
  return new ConnectionPositionPair({originX, originY}, {overlayX, overlayY});
}

class PositionMapPair {
  originX: HorizontalConnectionPos;
  originY: VerticalConnectionPos;
  overlayX: HorizontalConnectionPos;
  overlayY: VerticalConnectionPos;
}

export const POSITION_MAP: {[key: string]: ConnectionPositionPair} = Object.keys(_POSITION_MAP).reduce((acc, key) => {
  acc[key] = createConnectionPositionPair(_POSITION_MAP[key]);
  return acc;
}, {});

export const DEFAULT_POPOVER_POSITIONS: ConnectionPositionPair[] = [
  POSITION_MAP['top'], POSITION_MAP['topRight'], POSITION_MAP['topLeft'],
  POSITION_MAP['bottom'], POSITION_MAP['bottomRight'], POSITION_MAP['bottomLeft'],
  POSITION_MAP['right'], POSITION_MAP['rightTop'], POSITION_MAP['rightBottom'],
  POSITION_MAP['left'], POSITION_MAP['leftTop'], POSITION_MAP['leftBottom'],
];

export const DEFAULT_MENU_POSITIONS: ConnectionPositionPair[] = [
  POSITION_MAP['rightTop'],
  POSITION_MAP['rightBottom'],
  POSITION_MAP['leftTop'],
  POSITION_MAP['leftBottom'],
];
