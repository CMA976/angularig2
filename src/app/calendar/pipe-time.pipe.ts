import { Pipe, PipeTransform } from '@angular/core';

function getTime(date: Date) {
  let options: Intl.DateTimeFormatOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return new Intl.DateTimeFormat('es-ES', options).format(date);
}

@Pipe({
  name: 'pipeTime',
  standalone: true
})
export class PipeTimePipe implements PipeTransform {
  //https://angular.dev/guide/templates/pipes
  transform(value: Date, ...args: unknown[]): unknown {
    return getTime(value)
  }

}
