import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import e from 'express';
import { ControlComponent } from '../control/control.component';
import { MyDirectiveDirective } from '../my-directive.directive';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, ControlComponent, MyDirectiveDirective],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  profileForm = new FormGroup({
    firstName: new FormControl('Pedro', [Validators.required]),
    lastName: new FormControl(''),
  });
  handlerSubmit(){
    if(this.profileForm.valid){
      console.log(this.profileForm.value)
    }
  }
  get name(){
    return this.profileForm.get("firstName")
  }
}
