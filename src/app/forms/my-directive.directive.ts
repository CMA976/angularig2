import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyDirective]',
  standalone: true
})
export class MyDirectiveDirective {

  //https://angular.dev/guide/directives
  constructor(element:ElementRef) {
    console.log(element)
    console.log("contructor directive")
  }

}
