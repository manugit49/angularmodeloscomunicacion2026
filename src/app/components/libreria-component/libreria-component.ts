import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-libreria-component',
  standalone: false,
  styleUrl: './libreria-component.css',
  templateUrl: './libreria-component.html',
})
export class LibreriaComponent implements OnInit {
  arraycomics: Comic[] = [];

  constructor(
    private _cdr: ChangeDetectorRef
  ) {}
  
  async ngOnInit(): Promise<void> {
    let path = "documents/comics.json";
    //realizamos la petición
    let response = await fetch(path);
    //Convertimos los datos a JSON
    let data = await response.json();
    //recorremos los datos json
    for (let elem of data) {
      //creamos un comic por cada elemento de los json
      let comic = new Comic(elem.titulo, elem.imagen, elem.descripcion);
      //Guardamos cada comic en el array
      this.arraycomics.push(comic);
    }
    //Que el objeto _cdr detecte los cambios para poder redibujar
    this._cdr.detectChanges();
  }
}
