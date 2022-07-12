import { ItemCarrinho } from './item-carrinho.model';

export interface Pedido {
  endereco: string;
  numero: number;
  complemento: string;
  formaPagamento: string;
  id?: number;
  itens: ItemCarrinho[];
}
