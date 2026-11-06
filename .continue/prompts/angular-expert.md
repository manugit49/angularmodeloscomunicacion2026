# Guía de Arquitectura Avanzada y Buenas Prácticas Angular

Este documento establece los estándares de desarrollo, patrones de diseño y optimizaciones de rendimiento para aplicaciones empresariales utilizando la arquitectura tradicional de componentes modulares y el ecosistema moderno de Angular.

---

## 1. Estructura Estándar de Componentes

Todos los componentes del proyecto deben seguir una estructura limpia, predecible y fuertemente tipada. Se promueve el uso de referencias nativas del DOM mediante `@ViewChild` y la gestión explícita del ciclo de vida.

### Ejemplo de Referencia Técnica

```typescript
import { ChangeDetectorRef, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { ServiceEmpleados } from '../../services/service.empleados';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login-component',
  standalone: false,
  styleUrl: './login-component.css',
  templateUrl: './login-component.html',
})
export class LoginComponent implements OnInit {
  // 1. Propiedades de Vista (@ViewChild / @ViewChildren)
  @ViewChild("cajauser") cajaUser!: ElementRef;
  @ViewChild("cajapassword") cajaPassword!: ElementRef;

  // 2. Propiedades Públicas y de Estado
  public mensaje!: string;

  // 3. Inyección de dependencias clásica / estructural
  constructor(
    private _cdr: ChangeDetectorRef
  ){}

  // 4. Ciclo de Vida
  ngOnInit(): void {
    // Inicialización de datos o suscripciones iniciales
  }
}
```

---

## 2. Estrategia de Inyección de Dependencias Híbrida

En proyectos modulares robustos, es común y válido combinar la inyección en constructor para servicios core del framework junto con la función `inject()` para utilidades o desacoplamiento de servicios de negocio.

* **Por Constructor:** Recomendado para elementos de infraestructura local del componente como `ChangeDetectorRef`, `ActivatedRoute` o `Router`.
* **Por función `inject()`:** Ideal para inyectar servicios globales de API o negocio, permitiendo desacoplar la firma del constructor y facilitando la modularidad.

```typescript
export class EmpleadosComponent implements OnInit {
  // Inyección moderna de servicios de negocio
  private _serviceEmpleados = inject(ServiceEmpleados);

  constructor(
    private _cdr: ChangeDetectorRef // Inyección clásica para control de renderizado
  ) {}
}
```

---

## 3. Manipulación del DOM Segura y Tipada

Al utilizar `@ViewChild` combinada con `ElementRef`, se debe garantizar que el acceso a los elementos nativos sea seguro y se realice en los ganchos de ciclo de vida adecuados.

### Reglas de Oro para `ElementRef`
1. **Asignación no nula (`!`):** Se utiliza `!` para asegurar al compilador de TypeScript que la vista resolverá el elemento (asegúrate de que el identificador `#cajauser` y `name="cajauser"` exista en el HTML).

---

## 4. Gestión de Módulos (`standalone: false`)

Para mantener la cohesión en arquitecturas basadas en `NgModule`, cada componente debe declararse estrictamente en su módulo correspondiente, controlando su visibilidad mediante exportaciones.

### Organización de un Feature Module
* **Declarations:** Todos los componentes locales de la característica (ej. `LoginComponent`).
* **Imports:** Módulos comunes (`CommonModule`), formularios (`FormsModule`, `ReactiveFormsModule`) y routing local.
* **Exports:** Únicamente los componentes que deban ser expuestos y consumidos por otros módulos de la aplicación.

```typescript
@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    LoginComponent // Permite su uso fuera de este módulo si es necesario
  ]
})
export class AuthModule { }
```

---

## 5. Control de Rendimiento con `ChangeDetectorRef`

Cuando trabajas con operaciones asíncronas externas (como temporizadores nativos, eventos de librerías de terceros o zonas de ejecución complejas), la detección automática de cambios puede quedarse atrás.

* Use **`this._cdr.detectChanges()`** de manera quirúrgica cuando necesites forzar la actualización inmediata en métodos marcados como `async` o que utilicen parámetros que vienen en `ActivatedRoute`.

```typescript
async actualizarMensaje(): Promise<void> {
  this.mensaje = await metodoAwait();
  // Forzamos al framework a enterarse del cambio de estado de la propiedad pública
  this._cdr.detectChanges();
}

ngOnInit(): void {
    //EN ESTE METODO ES DONDE RECUPERAMOS LOS PARAMETROS
    this._active.params.subscribe((parametros: Params) => {
      let numero = parametros["numero"];
      this._cdr.detectChanges();
    })
}
```