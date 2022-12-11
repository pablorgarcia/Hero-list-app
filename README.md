# Heroes list app

Desarrollar, utilizando Angular y Typescript, una aplicación SPA que permita
hacer un mantenimiento de súper héroes:

- Se deberá crear un Servicio que guarde la información y que permita:
  • Consultar todos los súper héroes.
  • Consultar un único súper héroe por id.
  • Consultar todos los súper héroes que contienen, en su nombre, el valor de un parámetro enviado en la petición. Por ejemplo, si enviamos “man” devolverá “Spiderman”, “Superman”, “Manolito el fuerte”, etc.
  • Modificar un súper héroe.
  • Eliminar un súper héroe.
  • Test unitario de este servicio (opcional).

- Se deberá crear un Componente que, a partir del servicio anterior:
  • Mostrará una lista paginada de héroes donde aparecerán botones de añadir, editar y borrar.
  • Encima de esta lista paginada, se mostrará un input para filtrar por el héroe seleccionado.
  • Al pulsar el botón de añadir se generará un formulario vacío con las validaciones que se estimen oportunas. Después de dar de alta el nuevo héroe se volverá a la lista paginada.
  • Al pulsar el botón de edición se generará un formulario con los datos del héroe seleccionado y se permitirá modificar su información. Una vez editado se deberá volver a la lista paginada.
  • Al pulsar el botón de borrar, se preguntará si se está seguro que se desea borrar el héroe y, al confirmarlo, lo borrará.
  • Test unitario de este componente (opcional).

Puntos a tener en cuenta:

  • La información de súper héroes se guardará dentro del servicio. (No hace falta un backend).
  • Se valorarán las soluciones propuestas para cada punto, el modelo de datos y formato del código.
  • La prueba se debe presentar en un repositorio de Git. No hace falta que esté publicado. Se puede pasar comprimido en un único archivo.

Puntos opcionales de mejora:

  • Utilizar Angular Material como apoyo visual.
  • Rutas y navegación de la página.
  • Presentar la aplicación “Dockerizada”.
  • Interceptor para mostrar un elemento “loading” mientras se realiza alguna operación como “borrado” o “edición”.
  • Directiva para que al crear o editar en la caja de texto del nombre del héroe, siempre se muestre en mayúscula.
  • ¿Uso de mockserver para poder implementar las llamadas HTTP sin un backend?.
  • Comunicación entre componentes orientada a eventos.

Se valorará positivamente:
  • Cómo se construye el modelo de datos.
  • Uso de programación reactiva.
  • Código legible usando lambdas.

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
