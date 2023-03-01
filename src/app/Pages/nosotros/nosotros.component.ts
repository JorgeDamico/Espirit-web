import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/services/productos.service';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  arrayProductos:any = []

  constructor(
    private productosSrv:ProductosService
  ) {
    this.obtenerProductos()
   }

  obtenerProductos(){
    this.productosSrv.getProductos()
    .subscribe(data => {
      console.log(data)
      this.arrayProductos = data;
    })
  }

  ngOnInit(): void {
  }

}
