import { Imagem } from './imagem.model';

export interface Oferta {
  id: number;
  categoria: string;
  titulo: string;
  descricaoOferta: string;
  anunciante: string;
  valor: number;
  destaque: boolean;
  imagens: Imagem[];
}
