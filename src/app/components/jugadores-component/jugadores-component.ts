import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Jugador } from '../../models/jugador';

@Component({
  selector: 'app-jugadores-component',
  standalone: false,
  styleUrl: './jugadores-component.css',
  templateUrl: './jugadores-component.html',
})
export class JugadoresComponent implements OnInit {
  arrayJugadores: Jugador[] = [];

  constructor(
    private _cdr : ChangeDetectorRef
  ) {}

  async cargarJugadores(): Promise<void> {
    let path = "documents/jugadores.json";
    //realizamos la petición
    let response = await fetch(path);
    //Convertimos los datos a JSON
    let data = await response.json();
    //recorremos los datos json
    for (let futbolista of data) {
      //creamos un jugador por cada elemento de los json
      let jugador = new Jugador(futbolista.jugador, futbolista.imagen);
      //Guardamos cada jugador en el array
      this.arrayJugadores.push(jugador);
    }
    this._cdr.detectChanges();
  }

  async ngOnInit(): Promise<void> {
    await this.cargarJugadores();
  }
}
