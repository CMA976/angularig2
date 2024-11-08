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
  @Output() changeDay = new EventEmitter<number>()

  @HostListener('click', ["$event"])
  handlerClick(ev:Event){
    ev.stopPropagation();
    this.changeDay.emit(this.day)
  }
}
