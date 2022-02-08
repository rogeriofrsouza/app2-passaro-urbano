import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor() { }

  public getOfertas(): string[] {
    let ofertas = ['Oferta1', 'Oferta2', 'Oferta3'];
    return ofertas;
  }
}
