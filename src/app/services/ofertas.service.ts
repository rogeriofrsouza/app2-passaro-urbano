import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  constructor(private httpClient: HttpClient) { }

  public getOfertas(): Promise<any> {
    return lastValueFrom(this.httpClient.get('http://localhost:3000/ofertas?destaque=true'));
  }
  
}

/*
public getOfertas(): Promise<Oferta[]> {
  return this.httpClient.get('http://localhost:3000/ofertas')
    .toPromise();
}


public getOfertas2(): Promise<Oferta[]> { 
  return new Promise((resolve, reject) => {

    resolve(this.ofertas);
    reject({ codigoErro: 404, mensagem: 'Not found' })
  });
}
*/