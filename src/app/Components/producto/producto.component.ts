import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Producto } from 'src/app/interfaces/Productos';
import { AuthService } from 'src/app/services/auth.service';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input()
  data!:any  //Producto

  @Output()
  miEvento1 = new EventEmitter<any>()

  i:number = 0
  total:number = 0
  carrito = new Array
  isLogin:boolean = false

  constructor(
    private productosSrv:ProductosService,
    private auth:AuthService
  ) {
    this.auth.isAuthenticate()
    .subscribe(dato=>{
       this.isLogin = dato
    })
   }

  ngOnInit(): void {
  }

  emitir(id:string,nombre:any,precio:number,imagen:any){
    this.carrito[this.i] = {
      id:id,
      nombre:nombre,
      precio:precio,
      imagen:imagen
    }
    this.miEvento1.emit(this.carrito[this.i])
    this.i += 1;
    this.total = this.total + precio
}


}
