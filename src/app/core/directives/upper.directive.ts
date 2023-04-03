import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUpper]'
})
export class UpperDirective {

  constructor(
    private elementRef: ElementRef,
  ) {
    this.toUpperText();
  }

  @HostListener('window:keydown', ['$event']) onKeyDown() {
    this.toUpperText();
  }

  private toUpperText() {
    setTimeout(() => {
      const nativeElement = this.elementRef.nativeElement;
      nativeElement.value = nativeElement.value.toUpperCase();
    }, 200);
  }
}
