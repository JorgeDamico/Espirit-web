import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosService } from 'src/app/services/productos.service';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {

  myForm:FormGroup
  value1:any = ""
  value2:any = "" 
  conSinUserName:any = "sin"
  userName:any = ""
  carritoActualizado:any = new Array
  obtenerStorage:any
  productos:any = []
  carrito:any = new Array
  total:any = 0

  constructor(
    private productosSrv:ProductosService,
    private clientesSrv:ClientesService,
    private fb:FormBuilder
  ) { 
    this.myForm = this.fb.group({
      nombre:["",[Validators.required,Validators.minLength(3)]],
      apellido:["",[Validators.required,Validators.minLength(3)]],
      correo: "",
      telefono:["",[Validators.required,Validators.pattern('(?=.*[0-9]).{6,16}')]],
      direccion:["",[Validators.required,Validators.minLength(3)]]
    })
    this.obtenerProductos();
    this.conSin();
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

  con(){
    this.conSinUserName = "con";
  }

  conSin(){
    if(localStorage.getItem("clienteUser")){
      this.conSinUserName = "con";
      this.userName = localStorage.getItem("clienteUser");
    }
  }

  Registrar(){
    let form = {
      "nombre": this.myForm.get("nombre")?.value,
      "apellido": this.myForm.get("apellido")?.value,
      "email": this.myForm.get("correo")?.value,
      "telefono": this.myForm.get("telefono")?.value,
      "direccion": this.myForm.get("direccion")?.value,
      "clienteUser": this.value1+this.value2
    }
    console.log(form.clienteUser);
    localStorage.setItem("clienteUser", form.clienteUser);
    this.clientesSrv.crearCliente(form);
    this.myForm.reset();
  }

  ngOnInit(): void {
  }

}
