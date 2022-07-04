import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pedido } from '../models/pedido.model';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdemCompraService {

  private pedidosUrl = environment.baseUrl + '/pedidos';

  constructor(private httpClient: HttpClient) { }

  public efetivarCompra(pedido: Pedido): Observable<any> {
    const headers = { 'Content-Type': 'application/json' };
    const body = JSON.stringify(pedido);

    return this.httpClient.post<any>(`${this.pedidosUrl}`, body, { headers });
  }
}
