import { Injectable } from '@angular/core';

import { ItemCarrinho } from '../models/item-carrinho.model';
import { Oferta } from './../models/oferta.model';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  public itens: ItemCarrinho[] = [];
  public itemCarrinhoEncontrado?: ItemCarrinho;

  constructor() { }

  public exibirItens(): ItemCarrinho[] {
    return this.itens;
  }

  public incluirItem(oferta: Oferta): void {
    this.itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.oferta.id === oferta.id);

    if (this.itemCarrinhoEncontrado) {
      this.itemCarrinhoEncontrado.quantidade += 1;
    } else {
      let itemCarrinho: ItemCarrinho = {
        oferta: oferta, 
        quantidade: 1
      };
      
      this.itens.push(itemCarrinho);
    }
  }

  public totalCarrinhoCompras(): number {
    let total: number = 0;
    this.itens.map((item: ItemCarrinho) => total += (item.oferta.valor * item.quantidade));

    return total;
  }

  public alterarQuantidadeItem(itemCarrinho: ItemCarrinho, operacao: string): void {
    this.itemCarrinhoEncontrado = this.itens.find((item: ItemCarrinho) => item.oferta.id === itemCarrinho.oferta.id);

    if (this.itemCarrinhoEncontrado) {
      if (operacao === '+') {
        this.itemCarrinhoEncontrado.quantidade += 1
      } else if (operacao === '-') {
        this.itemCarrinhoEncontrado.quantidade -= 1;

        this.itemCarrinhoEncontrado.quantidade === 0 ? this.itens.splice(this.itens.indexOf(this.itemCarrinhoEncontrado), 1) : null;
      }
    }
  }

  public limparCarrinho(): void {
    this.itens = [];
  }

}
