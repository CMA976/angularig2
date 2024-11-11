import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class ChildComponent {

}
