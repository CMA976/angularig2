import { Component, viewChild } from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-showdialog',
  standalone: true,
  imports: [],
  templateUrl: './showdialog.component.html',
  styleUrl: './showdialog.component.css'
})
export class ShowdialogComponent {
  dialog = viewChild(DialogComponent)
  handlerClick(ev:Event){
    ev.stopPropagation()
    this.dialog()?.open()
  }
}
