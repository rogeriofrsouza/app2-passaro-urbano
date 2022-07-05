import { Pedido } from './../shared/models/pedido.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { OrdemCompraService } from './../shared/services/ordem-compra.service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
})
export class OrdemCompraComponent implements OnInit {

  @ViewChild('formulario') public formulario!: NgForm;

  public pedido: Pedido = {} as Pedido;
  public idPedidoCompra: number | undefined;

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    
  }

  public confirmarCompra(): void {
    console.log(this.formulario);
    this.pedido = this.formulario.value;
    this.ordemCompraService.efetivarCompra(this.pedido).subscribe({
      next: (pedido: Pedido) => {
        console.log(pedido);
        this.idPedidoCompra = pedido.id;
      }
    });
  }

}
