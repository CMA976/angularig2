import { afterNextRender, Component, computed, effect, inject, Injector, signal } from '@angular/core';


function getTime(date: Date) {
  let options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return new Intl.DateTimeFormat('es-ES', options).format(date);
}

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  private readonly injector = inject(Injector);
  date = signal(new Date())
  timer = computed(() => getTime(this.date()))
  constructor() {
    afterNextRender(() => {
      effect((onCleanUp) => {
        const handler = setInterval(() => this.date.set(new Date()), 1000)
        onCleanUp(() => {
          clearInterval(handler);
        })
      },{injector:this.injector})
    })
  }
}
