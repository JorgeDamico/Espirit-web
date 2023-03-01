import { Component, OnChanges, OnInit} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ProductosService } from '../../services/productos.service';
import { cantidad } from 'src/app/globales';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  i:any = cantidad
  obtenerStorage:any 
  carrito:any = new Array

  isLogin!:boolean 

  constructor(
    private productosSrv:ProductosService,
    private auth:AuthService
  ) { 

    this.obtenerCarrito()

    this.auth.isAuthenticate()
    .subscribe(data=>{
      console.log(data)
      this.isLogin = data
    })

  }

  Salir(){
    this.auth.logout()
  }

  obtenerCarrito(){
    this.obtenerStorage = !localStorage.getItem("carro")
    if(this.obtenerStorage == true){
      this.i = 0
    }else{
      this.obtenerStorage = localStorage.getItem("carro")
      this.carrito = JSON.parse(this.obtenerStorage)
      this.i = this.carrito.length
    }
  }

  ngOnInit(): void {
  }

}
