import { Component, OnInit } from '@angular/core';

import { OfertasService } from '../services/ofertas.service';
import { Oferta } from './../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[] = [];

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    //this.ofertas = this.ofertasService.getOfertas();
    console.log(this.ofertas);

    this.ofertasService.getOfertas2()
      .then((ofertas: Oferta[]) => this.ofertas = ofertas)
      .catch((erro: any) => console.log(erro));
  }

}
