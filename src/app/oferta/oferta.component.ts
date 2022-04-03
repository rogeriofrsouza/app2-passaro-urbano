import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { interval, Observable, Observer, Subscription } from 'rxjs';

import { OfertasService } from './../services/ofertas.service';
import { Oferta } from './../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css']
})
export class OfertaComponent implements OnInit, OnDestroy {
  
  public oferta!: Oferta;

  private tempoObservableSubscription!: Subscription;
  private meuObservableTesteSubscription!: Subscription;

  constructor(
    private route: ActivatedRoute, 
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta;
        console.log(oferta);
      })
      .catch(error => console.log(error));
    
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
      next: (resultado: any) => console.log(resultado), 
      error: (erro: string) => console.log(erro),
      complete: () => console.log('Terminou!')
    });
  }

  ngOnDestroy(): void {
    this.tempoObservableSubscription.unsubscribe();
    this.meuObservableTesteSubscription.unsubscribe();
  }

}


/*------------------------------------------------
  // Observables - Prática 1
  this.route.params.subscribe({
    next: (value: any) => console.log(value),
    error: (error: any) => console.log(error),
    complete: () => console.log('Complete!')
  });


  // Observables - Prática 2
  let tempo = interval(2000);

  tempo.subscribe({
    next: (intervalo: number) => console.log(intervalo)
  });
*/