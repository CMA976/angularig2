import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'app-day',
  standalone: true,
  imports: [],
  templateUrl: './day.component.html',
  styleUrl: './day.component.css'
})
export class DayComponent {
  @Input() day=0
}
