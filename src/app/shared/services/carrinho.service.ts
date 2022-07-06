import { Injectable } from '@angular/core';

import { ItemCarrinho } from '../models/item-carrinho.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  public itens: ItemCarrinho[] = [];

  constructor() { }

}
