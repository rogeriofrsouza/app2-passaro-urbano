import { Oferta } from './oferta.model';

export interface ItemCarrinho {
  id?: number;
  oferta: Oferta;
  quantidade: number;
}