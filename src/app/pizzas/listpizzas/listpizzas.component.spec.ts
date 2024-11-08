import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpizzasComponent } from './listpizzas.component';

describe('ListpizzasComponent', () => {
  let component: ListpizzasComponent;
  let fixture: ComponentFixture<ListpizzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListpizzasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListpizzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
