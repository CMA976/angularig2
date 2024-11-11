import { HttpClient } from '@angular/common/http';
import { inject, Inject, Injectable } from '@angular/core';
import { URLSERVER } from '../app.config';
import { lastValueFrom } from 'rxjs';

//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
@Injectable({
  providedIn: 'root'
})
export class GetallService<T> {

  constructor(
      private http:HttpClient,
      @Inject(URLSERVER) private url:string
      )
   {
  }
  getAll():Promise<T[]>{
    return lastValueFrom(this.http.get<T[]>(this.url))
  }
}
