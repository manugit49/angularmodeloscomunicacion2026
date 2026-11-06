import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Cliente } from '../../models/cliente';

@Component({
  selector: 'app-buscar-cliente-component',
  standalone: false,
  styleUrl: './buscar-cliente-component.css',
  templateUrl: './buscar-cliente-component.html',
})
export class BuscarClienteComponent implements OnInit {
  @ViewChild('nombrecliente') nombrecliente!: ElementRef;
  
  cliente!: Cliente;

  arrayclientes: Cliente[] = []
  
  constructor(
    private _cdr : ChangeDetectorRef
  ) {
    
  }

  async ngOnInit(): Promise<void> {
    //ruta para la petición
    let path = "documents/clientesdatos.json";
    //realizamos la petición
    let response = await fetch(path);
    //Convertimos los datos a json
    let data = await response.json();
    //recorremos los datos json

    for (let elem of data) {
      let cli = new Cliente(elem.idcliente, elem.nombre,
        elem.paginaweb, elem.imagencliente);
      //añadimos al array cada cliente
      this.arrayclientes.push(cli);
    }
    //Que el objeto _cdr detecte los cambios para poder redibujar
    this._cdr.detectChanges();
  }

  async cargarCliente(): Promise<void> {
    //en la caja de texto se escribe el valor del idcliente
    let idcliente = parseInt(this.nombrecliente.nativeElement.value);
    //ruta para la petición
    let path = "documents/clientesdatos.json";
    //realizamos la petición
    let response = await fetch(path);
    //Convertimos los datos a json
    let data = await response.json();
    //recorremos los datos json
    for (let customer of data) {
      //si el id del cliente coincide con el que hemos introducido
      if (customer.idcliente == idcliente) {
        //Creamos el cliente
        this.cliente = new Cliente(customer.idcliente, customer.nombre
          , customer.paginaweb, customer.imagencliente);     
      }
    }
    //Que el objeto _cdr detecte los cambios para poder redibujar
    this._cdr.detectChanges();
  }
}