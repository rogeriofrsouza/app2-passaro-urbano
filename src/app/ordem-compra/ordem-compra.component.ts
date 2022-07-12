import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ItemCarrinho } from './../shared/models/item-carrinho.model';
import { Pedido } from './../shared/models/pedido.model';
import { CarrinhoService } from './../shared/services/carrinho.service';
import { OrdemCompraService } from './../shared/services/ordem-compra.service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
})
export class OrdemCompraComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [ Validators.required, Validators.minLength(3), Validators.maxLength(40) ]),
    'numero': new FormControl(null, [ Validators.required, Validators.minLength(1), Validators.maxLength(5) ]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [ Validators.required ])
  });

  public idPedidoCompra?: number;
  public itensCarrinho: ItemCarrinho[] = [];

  constructor(private ordemCompraService: OrdemCompraService, public carrinhoService: CarrinhoService) { }

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.exibirItens();
  }

  public confirmarCompra(): void {
    if (this.formulario.status === 'INVALID') {
      this.formulario.get('endereco')?.markAsTouched();
      this.formulario.get('numero')?.markAsTouched();
      this.formulario.get('complemento')?.markAsTouched();
      this.formulario.get('formaPagamento')?.markAsTouched();

    } else {
      if (this.itensCarrinho.length) {
        let pedido: Pedido = {
          endereco: this.formulario.value.endereco,
          numero: this.formulario.value.numero,
          complemento: this.formulario.value.complemento,
          formaPagamento: this.formulario.value.formaPagamento,
          itens: this.itensCarrinho
        }
        
        this.ordemCompraService.efetivarCompra(pedido).subscribe({
          next: (pedido: Pedido) => {
            this.idPedidoCompra = pedido.id;
            this.carrinhoService.limparCarrinho();
          }
        });
      } else {
        alert('Você não selecionou nenhum item!');
      }
    }
  }

  public alterarQuantidade(item: ItemCarrinho, operacao: string): void {
    this.carrinhoService.alterarQuantidadeItem(item, operacao);
  }

}
