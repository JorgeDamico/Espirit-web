import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  productos:any = []
  arrayProductos:any = [];
  
  i:number = 0
  obtenerStorage:any 
  carrito:any = new Array
  catHombre:any = "Masculinos"
  catMujer:any = "Femeninos"

  constructor(
    private productosSrv:ProductosService
  ) { }

  obtenerProductos(){
    this.productosSrv.getProductos()
    .subscribe(data => {
      this.arrayProductos = data;     
      console.log(this.arrayProductos);
    })
  }

  agregar(e:any){
    this.carrito = []
    this.obtenerStorage = !localStorage.getItem("carro")
    if(this.obtenerStorage == true){
      console.log("vacio")
      this.agregarAlCarrito(e,this.carrito)
      //this.cantidadCarrito()
      console.log(this.carrito)
    } else {
      this.obtenerStorage = localStorage.getItem("carro")
      this.carrito = JSON.parse(this.obtenerStorage)
      console.log("lleno")
      this.agregarAlCarrito(e,this.carrito)
      //this.cantidadCarrito()
      console.log(this.carrito)
    }
  
}

agregarAlCarrito(dato:any, carro:any){
  carro[carro.length] = {
    id:dato.id,
    nombre:dato.nombre,
    precio:dato.precio,
    imagen:dato.imagen
  }
  localStorage.setItem("carro",JSON.stringify(carro))
  this.i = this.carrito.length
}

filtrarHombre(){
  this.catMujer = "Masculinos"
  this.catHombre = "Masculinos"
}
filtrarMujer(){
  this.catMujer = "Femeninos"
  this.catHombre = "Femeninos"
}
filtrarTodos(){
  this.catMujer = "Femeninos"
  this.catHombre = "Masculinos"
}

  ngOnInit(): void {
    this.obtenerProductos()
  }

}
