import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, RequiredValidator, Validators } from '@angular/forms';
import e from 'express';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
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
