import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})
export class ControlComponent {
  @Input() name=''
  @Input() text=''
  @Input() formGroup:FormGroup|any;
}
