import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'app-cine-component',
  standalone: false,
  styleUrl: './cine-component.css',
  templateUrl: './cine-component.html',
})
export class CineComponent implements OnInit {
  arrayPeliculas: Pelicula[] = [];

  constructor(
    private _cdr: ChangeDetectorRef
  )
  {}

  async ngOnInit(): Promise<void> {
    //Ruta con la que se encuentra el archivo JSON de cine.json
    let path = "documents/cine.json";
    //Realizamos la petición al archivo JSON
    let response = await fetch(path);
    //Convertimos los datos a JSON
    let data = await response.json();
    //Recorremos los datos JSON
    for (let peli of data) {
      //Creamos una pelicula por cada elemento de los json
      let pelicula = new Pelicula(peli.Titulo, peli.Argumento, peli.Fecha_Estreno,
                            peli.Director, peli.Duracion, peli.Youtube, peli.Genero, peli.Pais);
      //Guardamos cada película en el array
      this.arrayPeliculas.push(pelicula);
    }
    this._cdr.detectChanges();
  }
}
