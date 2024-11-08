import { Component, HostListener } from '@angular/core';
import { Pizza } from '../pizza';
import { PizzaitemComponent } from '../pizzaitem/pizzaitem.component';

@Component({
  selector: 'app-listpizzas',
  standalone: true,
  imports: [PizzaitemComponent],
  templateUrl: './listpizzas.component.html',
  styleUrl: './listpizzas.component.css'
})
export class ListpizzasComponent {
  pizzas:Pizza[] =[
    {id:1,name:"carbonara",price:2},
    {id:2,name:"mediterraneo",price:3},
    {id:3,name:"atún",price:1.5}
  ]

  @HostListener('click', ["$event"])
  handlerClick(ev:Event){
    const node = (ev.composedPath() as [HTMLElement]).find(n=>n.dataset && 'id' in n.dataset)
    if(node){
      const {id} = node.dataset;
      const pizza = this.pizzas.find(p=>p.id===Number(id))
      if(pizza){
        const events = this.createEvent(pizza)
        document.dispatchEvent(events)
      }
    }
  }
  private createEvent(pizza:Pizza):CustomEvent{
    //https://developer.mozilla.org/es/docs/Web/API/CustomEvent
    return new CustomEvent('add-carrito',{
      bubbles:true,
      composed:true,
      detail:structuredClone(pizza)
    })
  }
}
