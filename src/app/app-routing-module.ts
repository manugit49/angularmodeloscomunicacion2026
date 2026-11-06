import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { ComicsSimpleComponent } from './components/comics-simple-component/comics-simple-component';
import { ComicsJsonComponent } from './components/comics-json-component/comics-json-component';
import { JugadoresComponent } from './components/jugadores-component/jugadores-component';
import { BuscarClienteComponent } from './components/buscar-cliente-component/buscar-cliente-component';
import { PadreDeportesComponent } from './components/padre-deportes-component/padre-deportes-component';
import { LibreriaComponent } from './components/libreria-component/libreria-component';
import { PadreNumerosComponent } from './components/padre-numeros-component/padre-numeros-component';
import { CineComponent } from './components/cine-component/cine-component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "comicssimple", component: ComicsSimpleComponent },
  { path: "comicsjson", component: ComicsJsonComponent },
  { path: "jugadores", component: JugadoresComponent },
  { path: "clientes", component: BuscarClienteComponent },
  { path: "padredeportes", component: PadreDeportesComponent },
  { path: "libreria", component: LibreriaComponent },
  { path: "padrenumeros", component: PadreNumerosComponent },
  { path: "cine", component: CineComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
