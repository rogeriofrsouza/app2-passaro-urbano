import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = '';
  public numero: number | null = null;
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

  constructor() { }

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
  }

  public atualizaNumero(numero: string): void {
    this.numero = Number(numero);

    this.numeroPristine = false;

    if (this.numero.toString().length > 0 && this.numero > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento;

    this.complementoPristine = false;

    if (this.complemento.length > 0) {
      this.complementoValido = true;
    } else {
      this.complementoPristine = true;
    }
  }

  public atualizaFormaPagamento(formaPagamento: string): void {
    this.formaPagamento = formaPagamento;

    this.formaPagamentoPristine = false;

    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }
  }

}
