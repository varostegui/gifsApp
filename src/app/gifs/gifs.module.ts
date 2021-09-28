import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPaigeComponent } from './gifs-paige/gifs-paige.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    GifsPaigeComponent,
    BuscarComponent,
    ResultadosComponent
  ],
  exports: [
    GifsPaigeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
