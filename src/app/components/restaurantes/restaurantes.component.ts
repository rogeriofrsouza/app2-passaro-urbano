import { Component, OnInit } from '@angular/core';

import { Oferta } from '../../shared/models/oferta.model';
import { OfertasService } from '../../shared/services/ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Oferta[] = [];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertasService.getOfertasPorCategoria('restaurante')
      .then((ofertas: Oferta[]) => this.ofertas = ofertas)
      .catch(error => console.log(error));
  }

}
