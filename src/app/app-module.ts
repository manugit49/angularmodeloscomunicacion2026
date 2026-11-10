import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { ComicsSimpleComponent } from './components/comics-simple-component/comics-simple-component';
import { ComicsJsonComponent } from './components/comics-json-component/comics-json-component';
import { JugadoresComponent } from './components/jugadores-component/jugadores-component';
import { FormsModule } from '@angular/forms';
import { BuscarClienteComponent } from './components/buscar-cliente-component/buscar-cliente-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { HijoDeporteComponent } from './components/hijo-deporte-component/hijo-deporte-component';
import { LibreriaComponent } from './components/libreria-component/libreria-component';
import { ComicComponent } from './components/comic-component/comic-component';
import { PadreNumerosComponent } from './components/padre-numeros-component/padre-numeros-component';
import { HijoNumeroComponent } from './components/hijo-numero-component/hijo-numero-component';
import { CineComponent } from './components/cine-component/cine-component';
import { PeliculaComponent } from './components/pelicula-component/pelicula-component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MenuComponent,
    ComicsSimpleComponent,
    ComicsJsonComponent,
    JugadoresComponent,
    BuscarClienteComponent,
    PadreDeportesComponent,
    HijoDeporteComponent,
    LibreriaComponent,
    ComicComponent,
    PadreNumerosComponent,
    HijoNumeroComponent,
    CineComponent,
    PeliculaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
