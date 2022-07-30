import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderBox]'
})
export class BorderBoxDirective {

  constructor(public elem: ElementRef) {
    elem.nativeElement.classList.add("rounded","shadow")
  }

  @HostListener('mouseover') onMouseMove() {
    this.elem.nativeElement.classList.add("shadow-lg");
  }
  
  @HostListener('mouseout') onMouseOut() {
    this.elem.nativeElement.classList.remove("shadow-lg");
  }

}
