/* Modules */
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

/* Components */
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { DiversaoComponent } from './components/diversao/diversao.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { OfertaComponent } from './components/oferta/oferta.component';
import { ComoUsarComponent } from './components/oferta/como-usar/como-usar.component';
import { OndeFicaComponent } from './components/oferta/onde-fica/onde-fica.component';
import { OrdemCompraComponent } from './components/ordem-compra/ordem-compra.component';
import { OrdemCompraSucessoComponent } from './components/ordem-compra/ordem-compra-sucesso/ordem-compra-sucesso.component';
import { AlertaComponent } from './shared/components/alerta/alerta.component';

/* Pipes */
import { DescricaoReduzidaPipe } from './shared/pipes/descricao-reduzida.pipe';

/* Services */
import { AlertaService } from './shared/services/alerta.service';
import { CarrinhoService } from './shared/services/carrinho.service';
import { OfertasService } from './shared/services/ofertas.service';
import { OrdemCompraService } from './shared/services/ordem-compra.service';

/* Other */
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(ptBr);

import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzidaPipe,
    OrdemCompraComponent,
    OrdemCompraSucessoComponent,
    AlertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    OfertasService,
    OrdemCompraService,
    CarrinhoService,
    AlertaService,
    { provide: LOCALE_ID, useValue: 'pt-Br' },
    { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
