import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuscriptoresService {

  url:any = "https://espirit-api.herokuapp.com/suscriptores"; /*http://localhost:5000/suscriptores */
  //token:any = localStorage.getItem("Token");

  constructor(
    private http:HttpClient
  ) { }

  getSuscriptores(){
    //const headers = new HttpHeaders().set('x-access-token', this.token)
    return this.http.get(this.url + "/admin");
  }

  createSuscriptor(data:any){
    this.http.post(this.url, data).subscribe(
    (response:any) => console.log(response),
    (error:any) => console.log(error)
    )
  }

  deleteSuscriptor(id:String){
    this.http.delete(this.url + "/" + id).subscribe(
    (response:any) => console.log(response),
    (error:any) => console.log(error)
    )
  }

}
