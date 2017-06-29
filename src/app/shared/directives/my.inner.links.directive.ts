import {Directive, Input, HostListener, ElementRef} from "@angular/core";
@Directive({
  selector : 'a',
})
export class MyInhertLink {
  @Input() href;

  constructor(private el: ElementRef) { }

  @HostListener('click', ['$event']) onclick(event) {
    if(!this.href || this.href == 0 || this.href === '#') event.preventDefault();
  }
}
