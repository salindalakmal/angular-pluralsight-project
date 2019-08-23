import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.opened') isOpen = false;

  @HostListener('click') toggleClass() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

}
