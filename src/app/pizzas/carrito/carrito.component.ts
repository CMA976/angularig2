import { Component, computed, signal } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaService } from '../pizza.service';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  private pizzas=signal<Pizza[]>([])
  total = computed(()=>this.pizzas().map(p=>p.price).reduce((a,p)=>a+p,0))
  constructor(private service:PizzaService){
    this.service.asObservable().subscribe(p=>{
      this.pizzas().push(p)
      this.pizzas.set([...this.pizzas()])
    })
    //this.addPizza = this.addPizza.bind(this)
    /*effect((onCleanUp)=>{
      document.addEventListener('add-carrito', this.addPizza)
      onCleanUp(()=>{
        document.removeEventListener('add-carrito', this.addPizza)
      })
    })*/
  }
  /*private addPizza(ev:Event){
    const customEvent = ev as CustomEvent;
    const pizza = customEvent.detail as Pizza
    this.pizzas().push(pizza)
    this.pizzas.set([...this.pizzas()])

  }*/
}
