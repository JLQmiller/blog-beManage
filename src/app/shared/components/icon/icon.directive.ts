import {
  Directive,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  ElementRef,
  HostBinding,
} from '@angular/core';

const ICON_COLORS = ['danger', 'primary', 'warning', 'success', 'info', 'light', 'white'];

@Directive({
  selector: '[blogIcon]'
})
export class IconDirective implements OnChanges {
  @HostBinding('class.blog-icon') true;

  @HostBinding('style.width') width;

  @HostBinding('style.height') height;

  // icon使用的svg
  @Input() blogIcon: string;

  // 填充颜色
  @Input() color: string;

  // icon的尺寸
  @Input() size: string;

  // 创建svg use节点
  node: SVGUseElement = document.createElementNS('http://www.w3.org/2000/svg', 'use');

  constructor(
    private el: ElementRef,
  ) {
    console.log(this.node);
    this.el.nativeElement.appendChild(this.node);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
    const {
      blogIcon: iconChange,
      size: sizeChange,
      color: colorChange,
    } = changes;
    if (iconChange && iconChange.currentValue) {
      this.setIcon(`#${iconChange.currentValue}`);
    }
    if (sizeChange && sizeChange.currentValue) {
      this.setSize(sizeChange.currentValue);
    }
    if (colorChange && colorChange.currentValue) {
      this.setColor(colorChange.currentValue);
    }
  }

  setSize(size) {
    let unit: string;
    switch (size) {
      case 'lg':
        unit = '24px';
        break;
      case 'md':
        unit = '16px';
        break;
      case 'sm':
        unit = '12px';
        break;
      default:
        unit = size;
    }
    this.height = this.width = unit;
  }

  setColor(color) {
    if (ICON_COLORS.indexOf(color) > -1) {
      ICON_COLORS.forEach((c) => {
        this.node.classList.remove(`blog-icon-${c}`);
      });
      this.node.classList.add(`sui-icon-${color}`);
    }
  }

  setIcon(iconName) {
    this.node.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', iconName);
  }

}
