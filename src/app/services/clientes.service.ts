import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { successNotification, tinyAlert } from '../alertas';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  url:any = "https://espirit-api.herokuapp.com/clientes";

  constructor(
    private http:HttpClient,
    private auth:AuthService
  ) {}

  crearCliente(data:any){
    console.log(data)
    this.http.post(this.url, data).subscribe(
      (response:any) => [successNotification(response.message, 'Creación correcta'),
        this.auth.timeToken(response.message)
      ],
      (error:any) => [tinyAlert('Error al crear'), console.log(error)],
    );
  }


}
/* const token:any = localStorage.getItem("Token");
    const headers = new HttpHeaders().set('x-access-token', token); */

