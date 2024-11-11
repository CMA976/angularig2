import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { URLSERVER } from '../app.config';
import { lastValueFrom } from 'rxjs';

//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
/*@Injectable({
  providedIn: 'root'
})*/
export class GetallService<T> {

  constructor(
      private http:HttpClient,
      private url:string,
      private path:string
      )
   {
  }
  getAll():Promise<T[]>{
    const url = `${this.url}${this.path}`
    return lastValueFrom(this.http.get<T[]>(url))
  }
}
