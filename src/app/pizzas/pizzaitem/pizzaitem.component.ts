import { Component, input } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizzaitem',
  standalone: true,
  imports: [],
  templateUrl: './pizzaitem.component.html',
  styleUrl: './pizzaitem.component.css'
})
export class PizzaitemComponent {
  pizza = input.required<Pizza>()
}
