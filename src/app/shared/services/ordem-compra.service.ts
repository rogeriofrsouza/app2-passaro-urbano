import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pedido } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class OrdemCompraService {

  private pedidosUrl = environment.baseUrl + '/pedidos'

  constructor(private httpClient: HttpClient) { }

  public efetivarCompra(pedido: Pedido): Observable<any> {
    return this.httpClient.post(`${this.pedidosUrl}`, pedido);
  }
}
