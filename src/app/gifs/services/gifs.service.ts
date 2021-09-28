import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsRespone } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private APIKey: string = 'qW6zWq5b6u8Jqi4hymL6U4BjIn6TE66U';
  private servicioURL: string = 'https://api.giphy.com/v1/gifs'
  private _historial: string[]=[];

  public resultados : Gif[]=[];

  get historial() {
    
    return [...this._historial];
  }

  constructor(private http : HttpClient){

    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];

  }

  buscarGifs( query : string ){

    query = query.trim().toLowerCase();

    if (!this._historial.includes( query )) {
      this._historial.unshift( query );

      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial',JSON.stringify(this._historial));
    }

    const params = new HttpParams()
    .set('api_key',this.APIKey)
    .set('limit','10')
    .set('q',query);

    this.http.get<SearchGifsRespone>(`${this.servicioURL}/search`, {params})
    .subscribe(( resp ) => {
      this.resultados=resp.data;
      localStorage.setItem('resultados',JSON.stringify(this.resultados));
    })
    
  }
}
