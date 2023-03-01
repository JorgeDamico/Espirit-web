import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  url:any = "https://espirit-api.herokuapp.com/notas";

  constructor(
    private http:HttpClient
  ) { }

  getNotas(){
    return this.http.get(this.url)
  }

  getNotaById(id:String){
    return this.http.get(this.url + "/" + id)
  }

}
