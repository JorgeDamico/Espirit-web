import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  productos:any = []

  obtenerStorage:any 
  carrito:any = new Array
  carritoActualizado:any = new Array
  total:number = 0 

  constructor(

    private route:Router,
    private productosSrv:ProductosService
  ) {
    this.obtenerProductos()
   }

  ngOnInit(): void {
  } 
  
  obtenerProductos(){
    this.productosSrv.getProductos()
    .subscribe(data => {
      this.productos = data;         

    this.obtenerStorage = !localStorage.getItem("carro")
    if(this.obtenerStorage == true){
      //this.i = 0
    }else{
      this.obtenerStorage = localStorage.getItem("carro")
      this.carrito = JSON.parse(this.obtenerStorage)  
      //this.i = this.carrito.length
    }
    
    for(var i = 0; i < this.carrito.length; i++){
      for(var j = 0; j < this.productos.length; j++){
        if(this.carrito[i].id == this.productos[j]._id){
          this.carritoActualizado[i] = this.productos[j] 
          this.total += this.carritoActualizado[i].precio
        }
      }
    }
    console.log(this.carritoActualizado)
  })
  }

  descartarUno(id:any){
    for (let i = 0; i < this.carritoActualizado.length; i++) {
      const producto:any = this.carritoActualizado[i];
      if(producto._id == id){
        let j = this.carritoActualizado.indexOf(producto)
        this.carritoActualizado.splice(j,1)
        this.total -= producto.precio
        if(this.total == 0){
          localStorage.removeItem("carro")
          this.route.navigate(["/"])
        }else{
          localStorage.setItem("carro",JSON.stringify(this.carritoActualizado))
        }
        break;
      }
    } 
  }
   
  descartarTodo(){
    localStorage.removeItem("carro")
    this.obtenerProductos()
  }

}
