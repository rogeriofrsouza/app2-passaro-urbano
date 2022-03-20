import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Oferta } from './../shared/oferta.model';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  private ofertasUrl = environment.baseUrl + '/ofertas';

  constructor(private httpClient: HttpClient) { }

  public getOfertas(): Promise<any> {
    return lastValueFrom(this.httpClient.get(`${this.ofertasUrl}?destaque=true`));
  }

  public getOfertasPorCategoria(categoria: string): Promise<any> {
    return lastValueFrom(this.httpClient.get(`${this.ofertasUrl}?categoria=${categoria}`));
  }

  public async getOfertaPorId(idOferta: number): Promise<Oferta> {
    return await lastValueFrom(this.httpClient.get(`${this.ofertasUrl}?id=${idOferta}`))
      .then((resposta: any) => {
        return resposta[0];
      });
  }
  
}


/*
public getOfertas(): Promise<Oferta[]> {
  return this.http.get('http://localhost:3000/ofertas')
    .toPromise()
    .then((resposta: any) => resposta.json());
}


public getOfertas2(): Promise<Oferta[]> { 
  return new Promise((resolve, reject) => {

    resolve(this.ofertas);
    reject({ codigoErro: 404, mensagem: 'Not found' })
  });
}
*/