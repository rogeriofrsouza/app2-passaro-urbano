import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ItemCarrinho } from './../shared/models/item-carrinho.model';
import { Pedido } from './../shared/models/pedido.model';
import { AlertaService } from './../shared/services/alerta.service';
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
    'formaPagamento': new FormControl('Selecione uma opção', [ Validators.required, Validators.maxLength(8) ])
  });

  public idPedidoCompra?: number;
  public itensCarrinho: ItemCarrinho[] = [];

  constructor(
    private ordemCompraService: OrdemCompraService, 
    public carrinhoService: CarrinhoService,
    public alertaService: AlertaService) { }

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.exibirItens();
    this.alertaService.fecharAlerta();
  }

  public confirmarCompra(): void {
    if (this.formulario.status === 'INVALID') {
      this.formulario.get('endereco')?.markAsTouched();
      this.formulario.get('numero')?.markAsTouched();
      this.formulario.get('complemento')?.markAsTouched();
      this.formulario.get('formaPagamento')?.markAsTouched();
      this.alertaService.exibirAlerta('Formulário inválido, preencha os campos obrigatórios!', 'danger', 'exclamation-triangle-fill');

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
        this.alertaService.exibirAlerta('Seu carrinho está vazio!', 'warning', 'exclamation-triangle-fill');
      }
    }
  }

  public alterarQuantidade(item: ItemCarrinho, operacao: string): void {
    this.carrinhoService.alterarQuantidadeItem(item, operacao);
  }

}
