import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GridComponent } from './calendar/grid/grid.component';
import { CalendarComponent } from './calendar/calendar/calendar.component';
import { ListpizzasComponent } from './pizzas/listpizzas/listpizzas.component';
import { CarritoComponent } from './pizzas/carrito/carrito.component';
import { ParentComponent } from './parent/parent/parent.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CalendarComponent, ListpizzasComponent, CarritoComponent, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Pedro'
  isAutenticated = false
  data = [1,2,3,4,5,6]
  login(ev:Event){
    this.isAutenticated = true
  }
  changeData(){
    this.data[3] = 88
  }
}
