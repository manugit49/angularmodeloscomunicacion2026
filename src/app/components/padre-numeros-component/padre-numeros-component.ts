import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-padre-numeros-component',
  standalone: false,
  styleUrl: './padre-numeros-component.css',
  templateUrl: './padre-numeros-component.html',
})
export class PadreNumerosComponent {
  arraynumeros!: number[];
  //Capturar una caja donde va a venir un numero cajanumero
  @ViewChild('cajanumero') cajanumero!: ElementRef;
  suma: number = 0;

  constructor() {
    this.arraynumeros = [7, 11, 15, 65, 3];
  }

  crearNumero(): void {
    //Recuperamos el número de la caja
    let numero = parseInt(this.cajanumero.nativeElement.value);
    //Lo añadimos al array
    this.arraynumeros.push(numero);
  }

  sumarNumero(numero: number): void {
    this.suma += numero;
  }
}
