import { Component } from '@angular/core';
import { BuscarComponent } from 'src/app/gifs/buscar/buscar.component';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
 
  get historial(){
    return this.gifsService.historial;
  }
  
  constructor(private gifsService: GifsService){  }

  busca( termino : string ){
    this.gifsService.buscarGifs(termino);
  }

}
