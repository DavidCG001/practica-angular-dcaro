import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeaderComponent } from './componentes/header/header.component';

import { FormsModule } from '@angular/forms';
import { AcercaDeComponent } from './paginas/acerca-de/acerca-de.component';
import { BusquedaComponent } from './paginas/busqueda/busqueda.component';
import { DocumentacionComponent } from './paginas/documentacion/documentacion.component';
import { HomeComponent } from './paginas/home/home.component';
import { MonstruosListaComponent } from './paginas/monstruos-lista/monstruos-lista.component';
import { PaginaNoEncontradaComponent } from './paginas/pagina-no-encontrada/pagina-no-encontrada.component';
import { ColorRarezaPipe } from './pipes/color-rareza.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaginaNoEncontradaComponent,
    BusquedaComponent,
    DocumentacionComponent,
    AcercaDeComponent,
    HeaderComponent,
    FooterComponent,
    ColorRarezaPipe,
    MonstruosListaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
