import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Oferta } from '../shared/models/oferta.model';
import { OfertasService } from '../shared/services/ofertas.service';
import { AlertaService } from './../shared/services/alerta.service';
import { CarrinhoService } from './../shared/services/carrinho.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit {
  
  public oferta!: Oferta;

  constructor(
    private route: ActivatedRoute, 
    private ofertasService: OfertasService, 
    private carrinhoService: CarrinhoService, 
    private alertaService: AlertaService
  ) { }

  ngOnInit() {
    this.route.params.subscribe({
      next: (params: Params) => {

        this.ofertasService.getOfertaPorId(params['id'])
          .then((oferta: Oferta) => {
            this.oferta = oferta;
            this.alertaService.fecharAlerta();
          })
          .catch(error => console.log(error));
      }
    });
  }

  public adicionarItemCarrinho(): void {
    this.carrinhoService.incluirItem(this.oferta);
    this.alertaService.exibirAlerta('Oferta adicionada com sucesso!', 'success', 'check-circle-fill');
  }

}


/*------------------------------------------------
  // Observables - Prática 1
  this.route.params.subscribe({
    next: (value: any) => console.log(value),
    error: (error: any) => console.log(error),
    complete: () => console.log('Complete!')
  });

  ------------------------------------------------
  // Observables - Prática 2
  let tempo = interval(2000);

  tempo.subscribe({
    next: (intervalo: number) => console.log(intervalo)
  });

  ------------------------------------------------
  // Observables - Prática 3
  private tempoObservableSubscription!: Subscription;
  private meuObservableTesteSubscription!: Subscription;

  let tempo = interval(2000);
  
  this.tempoObservableSubscription = tempo.subscribe({
    next: (intervalo: number) => console.log(intervalo)
  });

  // Observable (observável)
  let meuObservableTeste = new Observable((observer: Observer<string>) => {
    observer.next('Primeiro evento da stream');
    observer.next('Segundo evento da stream');
    observer.error('Erro!');
    observer.complete();
  });

  // Observable (observador)
  this.meuObservableTesteSubscription = meuObservableTeste.subscribe({
    next: (resultado: string) => console.log(resultado), 
    error: (erro: any) => console.log(erro),
    complete: () => console.log('Terminou!')
  });

  ngOnDestroy(): void {
    this.tempoObservableSubscription.unsubscribe();
    this.meuObservableTesteSubscription.unsubscribe();
  }
*/