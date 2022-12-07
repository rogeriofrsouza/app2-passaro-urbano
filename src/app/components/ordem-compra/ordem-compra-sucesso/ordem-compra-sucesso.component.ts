import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordem-compra-sucesso',
  templateUrl: './ordem-compra-sucesso.component.html',
  styleUrls: ['./ordem-compra-sucesso.component.css']
})
export class OrdemCompraSucessoComponent implements OnInit {

  @Input() public idPedidoCompra!: number;

  constructor(public router: Router) { }

  ngOnInit(): void {
    setTimeout(() => this.router.navigateByUrl(''), 4000);
  }

}
