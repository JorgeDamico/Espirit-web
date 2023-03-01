import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Pages/home/home.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { MenuComponent } from './Components/menu/menu.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Pages/login/login.component';
import { DetalleComponent } from './Pages/detalle/detalle.component'
import { ListadosModule } from './listados/listados.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NosotrosComponent } from './Pages/nosotros/nosotros.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ProductoComponent } from './Components/producto/producto.component';
import { RegistroComponent } from './Pages/registro/registro.component';
import { BannerPrincipalComponent } from './Components/banner-principal/banner-principal.component';
import { CarroComponent } from './Pages/carro/carro.component';
import { EdicionComponent } from './Pages/edicion/edicion.component';
import { BlogComponent } from './Pages/blog/blog.component';
import { NotaComponent } from './Pages/nota/nota.component';
import { CompraComponent } from './Pages/compra/compra.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    LoginComponent,
    DetalleComponent,
    NosotrosComponent,
    ProductoComponent,
    RegistroComponent,
    BannerPrincipalComponent,
    CarroComponent,
    EdicionComponent,
    BlogComponent,
    NotaComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//Incluir
    ReactiveFormsModule, //Incluir
    HttpClientModule,
    ListadosModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
