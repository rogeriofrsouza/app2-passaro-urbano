import { Component, OnInit } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap } from 'rxjs';

import { Oferta } from '../shared/models/oferta.model';
import { OfertasService } from '../shared/services/ofertas.service';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  public ofertas!: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000), 
      distinctUntilChanged(),
      switchMap((termoDaPesquisa: string) => {

        if (termoDaPesquisa.trim() === '') {
          return of<Oferta[]>([]);
        }
        return this.ofertasService.pesquisaOfertas(termoDaPesquisa);
      }), 
      catchError((error: any) => {
        console.log(error);
        return of<Oferta[]>([]);
      })
    );
  }

  public pesquisa(termoDaPesquisa: string): void {
    this.subjectPesquisa.next(termoDaPesquisa);
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('');
  }

}
