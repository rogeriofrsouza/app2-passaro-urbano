import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { OfertasService } from './../services/ofertas.service';
import { Oferta } from './../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  public ofertas!: Observable<Oferta[]>

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
  }

  public pesquisa(termoDaPesquisa: string): void {
    this.ofertas = this.ofertasService.pesquisaOfertas(termoDaPesquisa);

    console.log(this.ofertas)
  }

}
