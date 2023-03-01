import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { successNotification, tinyAlert } from '../alertas';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url:any = "https://espirit-api.herokuapp.com/users";   /* http://localhost:5000/users*/
  //token:any = localStorage.getItem("Token");

  constructor(
    private route:Router,
    private http:HttpClient,
    private auth:AuthService
  ) { }

  login(data:any){
    this.http.post(this.url + '/login', data).subscribe(
    (response:any) => {if(response.token){
      this.auth.authenticate(response.token)
    } else{
      console.log(tinyAlert(response.message));
    }
    }, //aca pasar el token al auth para storagear ** console.log(response)
    (error:any) => tinyAlert(error)
    )
  }

  getUsuarios(){
    const token:any = localStorage.getItem("Token");
    const headers = new HttpHeaders().set('x-access-token', token);
    return this.http.get(this.url + "/admin", {headers});
  }

  create(data:any){
    const token:any = localStorage.getItem("Token");
    const headers = new HttpHeaders().set('x-access-token', token);
    this.http.post(this.url + "/registro",data, {headers}).subscribe(
      (response:any) => [successNotification(response.message, 'Creación correcta'),
        this.auth.timeToken(response.message)
      ],
      (error:any) => [tinyAlert('Error al crear'), console.log(error)],
    );
  }

  update(id:number,data:any){
    this.http.put(this.url + "/admin" + id, data)
  }

  delete(id:string){
    const token:any = localStorage.getItem("Token");
    const headers = new HttpHeaders().set('x-access-token', token);
    this.http.delete(this.url + "/admin/" + id , {headers}).subscribe(
      (response:any) => [successNotification(response.message, 'Eliminado correcto'),
        this.auth.timeToken(response.message)
      ],
      (error:any) => [tinyAlert('Error al eliminar'), console.log(error)]
    );
  }

}
