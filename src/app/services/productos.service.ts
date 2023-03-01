import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { successNotification, tinyAlert } from '../alertas';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  url:any = "https://espirit-api.herokuapp.com/productos"; 

  constructor(
    private route:Router,
    private http:HttpClient,
    private auth:AuthService
  ) { 
    
  }
  
  getProductos(){
    return this.http.get(this.url);
  }

  getProductoById(id:String){
    return this.http.get(this.url + "/" + id)
  }

  createProducto(data:any){
    const token:any = localStorage.getItem("Token");
    const headers = new HttpHeaders().set('x-access-token', token)
    this.http.post(this.url + '/admin', data, {headers}).subscribe(
    (response:any) => [successNotification(response.message, 'Creación correcta'),
      this.auth.timeToken(response.message)
    ],
    (error:any) => [tinyAlert('Error al crear'), console.log(error)]
    )
  }

  updateProducto(id:any, data:any){
    const token:any = localStorage.getItem("Token");
    const headers = new HttpHeaders().set('x-access-token', token)
    this.http.put(this.url + '/admin/' + id, data, {headers}).subscribe(
    (response:any) => [successNotification(response.message, 'Actualizado correcto'),
      this.auth.timeToken(response.message)
    ],
    (error:any) => [tinyAlert('Error al actualizar'), console.log(error)]
    )
  }

  deleteProducto(id:any){
    const token:any = localStorage.getItem("Token");
    const headers = new HttpHeaders().set('x-access-token', token)
    this.http.delete(this.url + '/admin/' + id, {headers}).subscribe(
    (response:any) => [successNotification(response.message, 'Eliminado correcto'),
      this.auth.timeToken(response.message)
    ],
    (error:any) => [tinyAlert('Error al eliminar'), console.log(error)]
    )
  }

}