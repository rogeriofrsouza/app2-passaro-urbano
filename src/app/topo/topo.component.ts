import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, Observable, of, Subject, switchMap } from 'rxjs';

import { Oferta } from '../shared/models/oferta.model';
import { OfertasService } from '../shared/services/ofertas.service';
import { CarrinhoService } from './../shared/services/carrinho.service';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  @ViewChild('inputPesquisa') public inputPesquisa!: ElementRef;
  @ViewChild('lista') public lista!: ElementRef;

  public ofertas!: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService, public carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000), 
      distinctUntilChanged(),
      switchMap(termoDaPesquisa => {

        if (termoDaPesquisa.trim() === '')
          return of<Oferta[]>([]);
        
        this.lista.nativeElement.classList = 'd-block';

        return this.ofertasService.pesquisaOfertas(termoDaPesquisa);
      }), 
      catchError((error: any) => {
        console.log(error);

        return of<Oferta[]>([]);
      })
    );
  }

  public pesquisar(termoDaPesquisa: string): void {
    this.subjectPesquisa.next(termoDaPesquisa);
  }

  public limpaPesquisa(): void {
    this.inputPesquisa.nativeElement.value = '';
    this.lista.nativeElement.classList = 'd-none';
  }

}
