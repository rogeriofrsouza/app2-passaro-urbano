import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descricaoReduzida'
})
export class DescricaoReduzidaPipe implements PipeTransform {

  transform(texto: string, posicao: number): string {
    if (texto.length > posicao) {
      return texto.substring(0, posicao) + '...';
    }
    return texto;
  }

}