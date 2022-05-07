import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { OfertasService } from '../../shared/services/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = '';

  constructor(
    private route: ActivatedRoute, 
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    this.route.parent?.params.subscribe({
      next: (params: Params) => {
        
        this.ofertasService.getOndeFicaOfertaPorId(params['id'])
          .then((descricao: string) => this.ondeFica = descricao)
          .catch(error => console.log(error));
      }
    })
  }

}
