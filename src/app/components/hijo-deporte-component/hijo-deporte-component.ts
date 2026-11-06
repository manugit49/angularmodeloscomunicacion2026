import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo-deporte-component',
  standalone: false,
  styleUrl: './hijo-deporte-component.css',
  templateUrl: './hijo-deporte-component.html',
})
export class HijoDeporteComponent {
  @Input() sport!: string;
  @Output() seleccionarFavorito: EventEmitter<any> = new EventEmitter();
  mensaje!: string;

  mostrarFavorito(): void {
    //Llamamos al padre
    this.seleccionarFavorito.emit(this.sport);
  }
}
