import { Component, OnInit } from '@angular/core';

import { OrdemCompraService } from './../shared/services/ordem-compra.service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
})
export class OrdemCompraComponent implements OnInit {

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    
  }
}
