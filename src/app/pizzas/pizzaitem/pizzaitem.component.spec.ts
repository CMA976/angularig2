import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaitemComponent } from './pizzaitem.component';

describe('PizzaitemComponent', () => {
  let component: PizzaitemComponent;
  let fixture: ComponentFixture<PizzaitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizzaitemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizzaitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
