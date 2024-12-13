import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemserviceService {

  constructor() { }

  welcome(value:any){
    window.alert(`Yokoso ${value}`)
  }
}
