import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Pedido } from './../shared/models/pedido.model';
import { OrdemCompraService } from './../shared/services/ordem-compra.service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
})
export class OrdemCompraComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [ Validators.required, Validators.minLength(3), Validators.maxLength(40) ]),
    'numero': new FormControl(null, [ Validators.required, Validators.minLength(1), Validators.maxLength(8) ]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [ Validators.required ])
  });

  public idPedidoCompra?: number;

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    
  }

  public confirmarCompra(): void {
    console.log(this.formulario);

    if (this.formulario.status === 'INVALID') {
      this.formulario.get('endereco')?.markAsTouched();
      this.formulario.get('numero')?.markAsTouched();
      this.formulario.get('complemento')?.markAsTouched();
      this.formulario.get('formaPagamento')?.markAsTouched();
      
    } else {
      let pedido: Pedido = this.formulario.value;
      this.ordemCompraService.efetivarCompra(pedido).subscribe({
        next: (pedido: Pedido) => {
          console.log(pedido);
          this.idPedidoCompra = pedido.id;
        }
      });
    }
  }

}
