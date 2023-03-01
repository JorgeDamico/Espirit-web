import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { SuscriptoresService } from 'src/app/services/suscriptores.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  myForm:FormGroup

  constructor(
    private http:HttpClient,
    private fb:FormBuilder,
    private usuariosSrv:UsuariosService,
    private suscriptoresSrv:SuscriptoresService
  ) {
    this.myForm = this.fb.group({
      correo:["",[Validators.required,Validators.email]],
    })
   }

  Suscribirse(){
    //this.suscriptoresSrv.createSuscriptor(this.myForm.value);
    let form = {"email":this.myForm.get('correo')?.value}
    this.suscriptoresSrv.createSuscriptor(form);
    this.myForm.reset();
  }

  ngOnInit(): void {
  }

}
