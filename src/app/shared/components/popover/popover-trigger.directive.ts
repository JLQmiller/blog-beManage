import {
  Directive,
  OnInit,
  AfterViewInit,
  Input,
  ElementRef,
  Renderer2,
  HostBinding,
} from '@angular/core';
import { PopoverComponent } from './popover.component';

@Directive({
  selector: '[buiPopoverTrigger]',
})
export class PopoverTriggerDirective implements OnInit, AfterViewInit {
  @Input() buiPopoverTrigger: PopoverComponent;

  @HostBinding('class.bui-popover-open') popoverOpenClass;

  constructor(
    public elementRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngOnInit() {
    this.buiPopoverTrigger.setOverlayOrigin(this);
    this.buiPopoverTrigger.visible
    .subscribe((visible: boolean) => {
      this.popoverOpenClass = visible;
    })
  }

  ngAfterViewInit() {
    if (this.buiPopoverTrigger.trigger === 'hover') {
      this.renderer.listen(this.elementRef.nativeElement, 'mouseenter', () => this.show());
      this.renderer.listen(this.elementRef.nativeElement, 'mouseleave', () => this.hide());
    }
    if (this.buiPopoverTrigger.trigger === 'click') {
      this.renderer.listen(this.elementRef.nativeElement, 'click', (e) => {
        e.preventDefault();
        this.show();
      });
    }
  }

  // 触发popover组件内show
  show() {
    this.buiPopoverTrigger.show();
  }

  // 触发popover组件内hide
  hide() {
    this.buiPopoverTrigger.hide();
  }

}
