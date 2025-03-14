import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './paginas/acerca-de/acerca-de.component';
import { BusquedaComponent } from './paginas/busqueda/busqueda.component';
import { DocumentacionComponent } from './paginas/documentacion/documentacion.component';
import { HomeComponent } from './paginas/home/home.component';
import { MonstruosListaComponent } from './paginas/monstruos-lista/monstruos-lista.component';
import { PaginaNoEncontradaComponent } from './paginas/pagina-no-encontrada/pagina-no-encontrada.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'documentacion', component:DocumentacionComponent},
  {path: 'busqueda', component:BusquedaComponent},
  {path: 'acerca-de', component:AcercaDeComponent},
  {path: 'monstruos', component: MonstruosListaComponent },
  {path: '**', component: PaginaNoEncontradaComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
