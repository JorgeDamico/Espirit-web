import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { CarroComponent } from './Pages/carro/carro.component';
import { DetalleComponent } from './Pages/detalle/detalle.component';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { NosotrosComponent } from './Pages/nosotros/nosotros.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { EdicionComponent } from './Pages/edicion/edicion.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { NotaComponent } from './Pages/nota/nota.component';
import { CompraComponent } from './Pages/compra/compra.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"ingresar",component:LoginComponent},
  {path:"producto/:productoID",component:DetalleComponent},  //
  {path:"nosotros",component:NosotrosComponent},
  {path:"registro",component:RegistroComponent},
  {path:"carro",component:CarroComponent},
  {path:"blog",component:BlogComponent},
  {path:"nota/:notaID",component:NotaComponent},
  {path:"edicion",component:EdicionComponent,canActivate:[AuthGuard]},
  {path:"compra",component:CompraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


