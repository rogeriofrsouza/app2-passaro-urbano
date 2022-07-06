import { Imagem } from './imagem.model';
import { Oferta } from './oferta.model';

export interface ItemCarrinho {
  id: number;
  img: Imagem;
  oferta: Oferta;
  quantidade: number;
}