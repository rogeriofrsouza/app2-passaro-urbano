import { Component, OnInit } from '@angular/core';
import { Pedido } from '../shared/models/pedido.model';

import { OrdemCompraService } from '../shared/services/ordem-compra.service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public pedido: Pedido = {} as Pedido;

  public endereco: string = '';
  public numero!: number;
  public complemento: string = '';
  public formaPagamento: string = '';

  //Controles de validação dos campos
  public enderecoValido!: boolean;
  public numeroValido!: boolean;
  public complementoValido!: boolean;
  public formaPagamentoValido!: boolean;

  //Estados primitivos dos campos (pristine)
  public enderecoPristine: boolean = true;
  public numeroPristine: boolean = true;
  public complementoPristine: boolean = true;
  public formaPagamentoPristine: boolean = true;

  //Controlar botão confirmar compra
  public formEstado: string = 'disabled';

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit(): void {
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
    this.enderecoPristine = false;

    if (this.endereco.length > 3 && this.endereco.trim() != '') {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }

    this.habilitaForm();
  }

  public atualizaNumero(numero: string): void {
    this.numero = Number(numero);
    this.numeroPristine = false;

    if (this.numero > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }

    this.habilitaForm();
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento;
    this.complementoPristine = false;

    if (this.complemento.length > 0) {
      this.complementoValido = true;
    } else {
      this.complementoPristine = true;
    }

    this.habilitaForm();
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;
    this.formaPagamentoPristine = false;

    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }

    this.habilitaForm();
  }

  public habilitaForm(): void {
    if (this.enderecoValido && this.numeroValido && this.formaPagamentoValido) {
      this.formEstado = '';
    } else {
      this.formEstado = 'disabled';
    }
  }

  public confirmarCompra(): void {
    this.pedido.endereco = this.endereco;
    this.pedido.numero = this.numero;
    this.pedido.complemento = this.complemento;
    this.pedido.formaPagamento = this.formaPagamento;

    this.ordemCompraService.efetivarCompra(this.pedido).subscribe({
      next: response => console.log(response)
    });
  }

}
