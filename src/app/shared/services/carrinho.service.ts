import { Oferta } from './../models/oferta.model';
import { Injectable } from '@angular/core';

import { ItemCarrinho } from '../models/item-carrinho.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  public itens: ItemCarrinho[] = [];

  constructor() { }

  public exibirItens(): ItemCarrinho[] {
    return this.itens;
  }

  public incluirItem(oferta: Oferta): void {
    let itemCarrinho: ItemCarrinho = {
      oferta: oferta, 
      quantidade: 1
    };

    console.log(itemCarrinho);
  }

}
