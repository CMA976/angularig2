import { Component } from '@angular/core';
import { GridComponent } from '../grid/grid.component';
import { TimerComponent } from '../timer/timer.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [GridComponent, TimerComponent],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent {

}
