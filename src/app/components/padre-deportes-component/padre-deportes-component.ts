import { Component } from '@angular/core';

@Component({
  selector: 'app-padre-deportes-component',
  standalone: false,
  styleUrl: './padre-deportes-component.css',
  templateUrl: './padre-deportes-component.html',
})
export class PadreDeportesComponent {
  arraydeportes!: string[];
  mensaje!: string;

  seleccionarFavorito(data: string): void {
    this.mensaje = "Su deporte favorito es " + data;
  }

  constructor() {
    this.arraydeportes = ["Fútbol", "Baloncesto", "Tenis", "Natación", "Golf"];
  }
}
