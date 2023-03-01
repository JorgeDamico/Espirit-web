import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from 'src/app/services/productos.service';
import { cantidad } from 'src/app/globales';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  public product:any | undefined
  carrito:any = new Array
  obtenerStorage:any 
  
  constructor(
    private activatedRoute:ActivatedRoute,
    private productoSrv:ProductosService
  ) { 
    const id = this.activatedRoute.snapshot.paramMap.get("productoID")
    this.activatedRoute.params
    .subscribe(data=>{
      console.log(data)
    })
    console.log("id",id)
    if(id){
      this.productoSrv.getProductoById(id).subscribe((response:any)=>{
        this.product = response                        
        console.log(this.product)
      })
    }

  }

  agregar(){
    this.carrito = []
    this.obtenerStorage = !localStorage.getItem("carro")
    if(this.obtenerStorage == true){
      console.log("vacio")
      this.agregarAlCarrito(this.product,this.carrito)
      
      console.log(this.carrito)
    } else {
      this.obtenerStorage = localStorage.getItem("carro")
      this.carrito = JSON.parse(this.obtenerStorage)
      console.log("lleno")
      this.agregarAlCarrito(this.product,this.carrito)
      
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
}

  ngOnInit(): void {
    
  }

}
