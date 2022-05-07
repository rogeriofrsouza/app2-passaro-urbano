import { Component, OnInit } from '@angular/core';

import { Oferta } from '../shared/models/oferta.model';
import { OfertasService } from '../shared/services/ofertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[] = [];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertasService.getOfertas()
      .then((ofertas: Oferta[]) => { 

        this.ofertas = ofertas;
        console.log(this.ofertas);
      })
      .catch((erro: any) => console.log(erro));
  }

}
