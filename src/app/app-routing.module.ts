import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DiversaoComponent } from './components/diversao/diversao.component';
import { ComoUsarComponent } from './components/oferta/como-usar/como-usar.component';
import { OfertaComponent } from './components/oferta/oferta.component';
import { OndeFicaComponent } from './components/oferta/onde-fica/onde-fica.component';
import { OrdemCompraComponent } from './components/ordem-compra/ordem-compra.component';
import { RestaurantesComponent } from './components/restaurantes/restaurantes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'restaurantes', component: RestaurantesComponent },
  { path: 'diversao', component: DiversaoComponent },
  { path: 'oferta', component: HomeComponent },
  { path: 'oferta/:id', component: OfertaComponent,
      children: [
        { path: '', component: ComoUsarComponent },
        { path: 'como-usar', component: ComoUsarComponent },
        { path: 'onde-fica', component: OndeFicaComponent }
      ]
  },
  { path: 'ordem-compra', component: OrdemCompraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
