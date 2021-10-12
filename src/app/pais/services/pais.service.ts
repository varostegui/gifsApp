import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private APIURL: string='http://api.countrylayer.com/v2';
  private accesKey: string='dd29e78b5160361464f8656f944f65b5';
  private segundoTermino:string='';

  constructor( private http: HttpClient) { }

  buscarPais( termino: string): Observable<Country[]> {

    this.segundoTermino = termino;
    const url = `${ this.APIURL }/name/${ this.segundoTermino }?access_key=${ this.accesKey }`;
    return this.http.get<Country[]>( url );
  }

  buscarCapital( termino: string): Observable<Country[]> {

    this.segundoTermino = termino;
    const url = `${ this.APIURL }/capital/${ this.segundoTermino }?access_key=${ this.accesKey }`;
    return this.http.get<Country[]>( url );
  }

  getPaisPorAlpha( id: string): Observable<Country[]> {

    this.segundoTermino = id;
    const url = `${ this.APIURL }/alpha/${ this.segundoTermino }?access_key=${ this.accesKey }`;
    return this.http.get<Country[]>( url );
  }

  buscarRegion(region: string):Observable<Country[]> {
    
    this.segundoTermino = region;
    const url = `${ this.APIURL }/region/${ this.segundoTermino }?access_key=${ this.accesKey }`;
    return this.http.get<Country[]>( url );
  }
}
