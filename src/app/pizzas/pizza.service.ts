import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Pizza } from './pizza';
@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  private subject = new Subject<Pizza>()
  constructor() {
    console.log("contructor pizzaService")
  }
  emit(pizza:Pizza){
    this.subject.next(pizza)
  }
  asObservable():Observable<Pizza>{
    return this.subject.asObservable()
  }
}
