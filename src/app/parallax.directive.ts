import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[blogParallax]'
})
export class ParallaxDirective {

  @Input('ratio') parallaxRatio: number = 1;

  initialTop = 0;

  constructor(
    private el: ElementRef,
  ) {
    console.log(this.el.nativeElement.getBoundingClientRect().top);
    this.initialTop = this.el.nativeElement.getBoundingClientRect().top;
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    console.log('监听滚动');
    const scrolled = window.pageYOffset;
    this.el.nativeElement.style.top = (this.initialTop - (scrolled * this.parallaxRatio)) + 'px';
  }

}
