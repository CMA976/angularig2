import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appMyDirective]',
  standalone: true
})
export class MyDirectiveDirective implements OnInit, OnDestroy  {

  //https://angular.dev/guide/directives
  constructor(element:ElementRef) {
    console.log(element)
    console.log("contructor directive")
  }
  ngOnDestroy(): void {
    console.log("OnDestroy")
  }
  ngOnInit(): void {
    console.log("Oninit")
  }
  ngAfterViewInit(){
    console.log("ViewInit")
  }


}
