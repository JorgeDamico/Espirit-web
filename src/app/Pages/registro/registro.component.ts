import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  myForm:FormGroup
  arrayUsuarios:any = []
  cantidadUsuarios:number = 0

  constructor(
    private fb:FormBuilder,
    private usuariosSrv:UsuariosService,
    private auth:AuthService
  ) {
    this.myForm = this.fb.group({
      user:["",[Validators.required,Validators.minLength(3)]],
      correo:["",[Validators.required,Validators.email]],
      clave:["",[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,12}')]],
      role:["",Validators.required]
    })
   }

  Registrar(){
    let form = {
      "user":this.myForm.get("user")?.value,
      "email":this.myForm.get("correo")?.value,
      "password":this.myForm.get("clave")?.value,
      "rol":this.myForm.get("role")?.value
    }
    console.log(form)
    this.usuariosSrv.create(form);
    this.myForm.reset();
  }

  eliminarUsuario(id:string){
    this.usuariosSrv.delete(id);
  }

  refreshUsuarios(){
    this.obtenerUsuarios();
  }

  ngOnInit(): void {
    this.obtenerUsuarios()
  }

  obtenerUsuarios(){
    this.usuariosSrv.getUsuarios()
    .subscribe(data => {
      this.arrayUsuarios = data;
      this.cantidadUsuarios = this.arrayUsuarios.length
    })
  }

}
