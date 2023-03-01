import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrosComponent } from './filtros/filtros.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    FiltrosComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ResultadosComponent
  ]
})
export class ListadosModule { }
