import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  url:any = "https://espirit-api.herokuapp.com/ventas";

  constructor() { }
}
