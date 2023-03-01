import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { CategoriasService } from 'src/app/services/categorias.service';
import { ProductosService } from 'src/app/services/productos.service';
import { SuscriptoresService } from 'src/app/services/suscriptores.service';

@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.css']
})
export class EdicionComponent implements OnInit {

  visible:String = "none"
  verID:String = "none"
  textBtn:String = "Agregar"
  arrayCategorias:any = []
  arrayProductos:any = []
  arraySuscriptores:any = []
  arrayUsuarios:any = []
  cantidadSuscriptores:Number = 0
  cantidadUsuarios:Number = 0

  myForm:FormGroup

  constructor(
    private fb:FormBuilder,
    private suscriptoresSrv:SuscriptoresService,
    private productosSrv:ProductosService,
    private categoriasSrv:CategoriasService,
    private auth:AuthService
  ) {
    this.myForm = this.fb.group({
      id:String,
      nombre:["",[Validators.required,Validators.minLength(3)]],
      precio:["",[Validators.required,Validators.min(3)]],
      cantidad:["",[Validators.required,Validators.min(1)]],
      stock:["",[Validators.required,Validators.min(0)]],
      descripcion:["",[Validators.required,Validators.minLength(5)]],
      categoria:["",Validators.required],
      imagen:["",[Validators.required]]
    })
   }

  ngOnInit(): void {
    this.obtenerCategorias()
    this.obtenerProductos()
    this.obtenerSuscriptores()
  }

  ngOnChanges(): void {
    this.obtenerSuscriptores()
  }

  obtenerProductos(){
    this.productosSrv.getProductos()
    .subscribe(data => {
      this.arrayProductos = data;     
      console.log(this.arrayProductos);
    })
  }

  obtenerCategorias(){
    this.categoriasSrv.getCategorias()
    .subscribe(data => {
      this.arrayCategorias = data;     
      console.log(this.arrayCategorias);
    })
  }

  obtenerSuscriptores(){
    this.suscriptoresSrv.getSuscriptores()
    .subscribe(data => {
      this.arraySuscriptores = data;  
      this.cantidadSuscriptores = this.arraySuscriptores.length;   
      console.log(this.arraySuscriptores);
    })
  }

  eliminarSuscriptor(id:String){
    this.suscriptoresSrv.deleteSuscriptor(id);
    this.obtenerSuscriptores();
  }

  refreshSuscriptores(){
    this.obtenerSuscriptores();
  }

  crearProducto(){ 
    let form = {
          "nombre":this.myForm.get('nombre')?.value,
          "precio":this.myForm.get('precio')?.value,
          "cantidad":this.myForm.get('cantidad')?.value,
          "stock":this.myForm.get('stock')?.value,
          "descripcion":this.myForm.get('descripcion')?.value,
          "categoria":this.myForm.get('categoria')?.value,
          "imagen":this.myForm.get('imagen')?.value
        }

    if(this.textBtn === "Agregar"){

      console.log(form)
      this.productosSrv.createProducto(form);
      //this.obtenerProductos();
      //this.myForm.reset();

    }else if(this.textBtn === "Modificar"){
      
      this.productosSrv.updateProducto(this.myForm.get('id')?.value,form);
      
    }
    this.obtenerProductos();
    this.myForm.reset();
  }

  eliminar(){
    if(this.myForm.get('id')?.value){
      this.productosSrv.deleteProducto(this.myForm.get('id')?.value);
    }
    this.obtenerProductos();
    this.myForm.reset();
  }

  seleccionarProducto(id:String,nombre:String,precio:number,cantidad:number,stock:number,descripcion:String,categoria:String,imagen:String){
    this.myForm.get('id')?.setValue(id),
    this.myForm.get('nombre')?.setValue(nombre),
    this.myForm.get('precio')?.setValue(precio),
    this.myForm.get('cantidad')?.setValue(cantidad),
    this.myForm.get('stock')?.setValue(stock),
    this.myForm.get('descripcion')?.setValue(descripcion),
    this.myForm.get('categoria')?.setValue(categoria),
    this.myForm.get('imagen')?.setValue(imagen)
    this.modificar()
    this.mostrar()
    this.textBtn = "Modificar"
  }

  modificar(){
    this.verID = "block"
    this.obtenerProductos()
  }

  mostrar(){
    this.visible = "block"
  }

  nuevo(){
    this.mostrar()
    this.descartarModificacion()
    this.textBtn = "Agregar"
  }

  descartarModificacion(){
    this.myForm.reset()
    this.verID = "none"
  }

}
