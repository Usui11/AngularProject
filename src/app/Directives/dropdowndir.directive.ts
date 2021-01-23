import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdowndir]'
})
export class DropdowndirDirective {
@HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleOpen(){
          this.isOpen = !this.isOpen;
  }   
  constructor() { }

}
