import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent {

  @ViewChild('textBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifsService : GifsService){

  }


    buscar() {

      const valor = this.txtBuscar.nativeElement.value;

      if (valor.trim().length === 0) {
        return;
      }

      this.gifsService.buscarGifs(valor);

      this.txtBuscar.nativeElement.value='';
    }

}
