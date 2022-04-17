import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Oferta } from './../shared/oferta.model';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  private ofertasUrl = environment.baseUrl + '/ofertas';

  constructor(private httpClient: HttpClient) { }

  public getOfertas(): Promise<Oferta[]> {
    return lastValueFrom(this.httpClient.get<Oferta[]>(`${this.ofertasUrl}?destaque=true`));
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return lastValueFrom(this.httpClient.get<Oferta[]>(`${this.ofertasUrl}?categoria=${categoria}`));
  }

  public getOfertaPorId(id: number): Promise<Oferta> {
    return lastValueFrom(this.httpClient.get<Oferta>(`${this.ofertasUrl}?id=${id}`))
      .then((resposta: any) => {
        return resposta[0];
      });
  }

  public getComoUsarOfertaPorId(id: number): Promise<string> {
    return lastValueFrom(this.httpClient.get<string>(environment.baseUrl + `/como-usar?id=${id}`))
      .then((resposta: any) => {
        return resposta[0].descricao;
      });
  }

  public getOndeFicaOfertaPorId(id: number): Promise<string> {
    return lastValueFrom(this.httpClient.get<string>(environment.baseUrl + `/onde-fica?id=${id}`))
      .then((resposta: any) => {
        return resposta[0].descricao;
      });
  }

  public pesquisaOfertas(termo: string): Observable<Oferta[]> {
    return this.httpClient.get<Oferta[]>(`${this.ofertasUrl}?descricaoOferta_like=${termo}`)
      .pipe(
        retry(10)
      );
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