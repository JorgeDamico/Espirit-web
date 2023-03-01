import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  url:any = "https://espirit-api.herokuapp.com/categorias";

  constructor(
    private http:HttpClient
  ) { }

  getCategorias(){
    return this.http.get(this.url)
  }

}
