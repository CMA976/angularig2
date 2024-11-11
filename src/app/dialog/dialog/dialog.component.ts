import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  //https://web.dev/learn/html/dialog?hl=es-419
  //https://angular.dev/guide/signals/queries#viewchild
  private dialog = viewChild<ElementRef>('dialog')
  open(){
    (this.dialog()?.nativeElement as HTMLDialogElement).showModal()
  }
}
