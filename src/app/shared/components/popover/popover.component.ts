import {
  Component,
  OnInit,
  Input,
  HostBinding,
  ViewEncapsulation,
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

import { Placement, OverlayEntry, POSITION_MAP, DEFAULT_POPOVER_POSITIONS } from '../shared';


@Component({
  selector: 'blog-popover',
  templateUrl: './popover.component.html',
  animations: [
    trigger('fadeAnimation', [
      state('void', style({ opacity: 0 })),
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition('* => true', animate('150ms cubic-bezier(0.0, 0.0, 0.2, 1)')),
      transition('* => true', animate('150ms cubic-bezier(0.4, 0.0, 1, 1)')),
    ]),
  ],
})
export class PopoverComponent extends OverlayEntry implements OnInit {
  @HostBinding('class.blog-popover-container') hostClass = true;

  @Input('placement')
  set _placement(value: Placement) {
    this.placement.next(value);
  }

  @Input() trigger: 'hover' | 'click' = 'hover';

  @Input() customClass: string;

  classMap: object = {}

  get hasBackdrop() {
    return this.trigger === 'click';
  }

  constructor(
    protected ngZone: NgZone,
    protected cdr: ChangeDetectorRef,
  ) {
    super(ngZone, cdr);
  }

  ngOnInit() {
    this.placement.subscribe(placement => {
      this.ngZone.run(() => {

      })
    })
  }

  setPosition(placement: Placement) {
    placement = placement || 'top';
    this.positions = [POSITION_MAP[placement], ...DEFAULT_POPOVER_POSITIONS];
    this.setClassMap(placement);
  }

  setClassMap(placement: Placement) {
    this.classMap = {
      ['blog-popover']: true,
      [`blog-popover-placement-${placement}`]: true,
    };

    if (this.customClass) {
      this.classMap[this.customClass] = true;
    }
  }

}
