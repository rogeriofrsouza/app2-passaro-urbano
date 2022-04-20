import { Component, OnInit } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap } from 'rxjs';

import { OfertasService } from './../services/ofertas.service';
import { Oferta } from './../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  public ofertas!: Observable<Oferta[]>;
  public listaOfertas: Oferta[] = [];
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    // retorno Oferta[]
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000), 
      distinctUntilChanged(),
      switchMap((termo: string) => {

        if (termo.trim() === '') {
          // retorna um Observable de Oferta[] vazio
          return of<Oferta[]>([]);
        }
        return this.ofertasService.pesquisaOfertas(termo);
      }), 
      catchError((error: any) => {
        console.log(error);
        return of<Oferta[]>([]);
      })
    );

    this.ofertas.subscribe({
      next: (listaOfertas: Oferta[]) => {
        console.log(listaOfertas);
        this.listaOfertas = listaOfertas;
      }
    });
  }

  public pesquisa(termoDaPesquisa: string): void {
    this.subjectPesquisa.next(termoDaPesquisa);
  }

}
