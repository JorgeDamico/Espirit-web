import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm:FormGroup

  constructor(
    private router:Router,
    private fb:FormBuilder,
    private usuariosSrv:UsuariosService,
    private auth:AuthService
  ) {
    this.myForm = this.fb.group({
      correo:["",[Validators.required,Validators.email]],
      clave:["",[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,10}')]]
    })
   }

   Loguearse(){
     let form = {
       "email":this.myForm.get('correo')?.value,
       "password":this.myForm.get('clave')?.value
     }
     console.log("login")
     this.usuariosSrv.login(form);
     //this.auth.authenticate()
     this.router.navigate(['/'])
   }

  ngOnInit(): void {
  }

}
