# Planeta - Star Wars

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Get started 

### Clone the repo

```shell
git clone https://github.com/garciajavier/dutti-angular-8.git
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Shut it down manually with `Ctrl-C`.

#### npm scripts

These are the most useful commands defined in `package.json`:

* `npm start` - runs the TypeScript compiler, asset copier, and a server at the same time, all three in "watch mode".
* `npm run build` - runs the TypeScript compiler and asset copier once.
* `npm run build --prod` - runs the TypeScript compiler and asset copier once.

These are the test-related scripts:

* `npm run test-coverage` - runs Karma + Instanbul on the project files. (Test + Coverage)
* `npm run lint` - runs `tslint` on the project files..
* `tslint --config tslint-imports.json --fix --project` clean unused imports on ts files.

In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends
of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to
eat: it was a [hobbit-hole](https://en.wikipedia.org/wiki/Hobbit#Lifestyle "Hobbit lifestyles"), and that means comfort.

# Introducción a la prueba
MD Developers recibió el encargo de preparar un prototipo para mostrar un listado de naves starwars solo para usuarios registrados. El prototipo gustó mucho y fue aprobado por el comité de la empresa como proyecto para 2019.

Tu equipo acaba de recibir el encargo de adaptar este prototipo y convertirlo en un producto real.
Tienes potestad para cambiar lo que quieras pero se deben cumplir unos mínimos.

### Requisitos mínimos

* El listado de naves solo puede ser visible para usuarios registrados.
* El listado de naves debe ser consumido desde el api proporcionada por nuestro proveedor: https://swapi.dev
* Se deben poder registrar nuevos usuarios. No es necesario implementar la parte de servidor.

### Tareas

1. Migrar el prototipo actual a un proyecto nuevo con angular.  ***DONE***
  > He usado la versión ^8.0.0 porque es la actual LTS con soporte hasta 28 de Noviembre 2020.
2. Listado naves: 
  -  Implementar correctamente la paginación del listado de naves. ***DONE***
  > Para la paginación se ha utilizado el modulo de [paginación](https://material.angular.io/components/paginator/overview) que nos brinda Angular Material
  -  Hay imágenes que no existen, en ese caso se debe mostrar un texto o imagen informando que no está disponible. ***DONE***
  > Se ha cargado una [imagen](/assets/images/not_found.png) en los assets del proyecto que carga cuando la respuesta a la petición de la imagen es errónea, ya sea por no estar definida o url incorrecta.
3. Creación de una ficha de detalle de la nave:
  - Se quiere crear una ficha que se abra al hacer click sobre una de las naves que aparecen.  ***DONE***
  > Estructura de componentes padres (con lógica) y componentes hijos (representacionales)
  - Se debe implementar un botón de volver al listado ***DONE***
  > He utilizado una [Directiva](https://angular.io/guide/attribute-directives) para el botón Volver, así se podría aprovechar la acción en otros componentes.
4. Modernización del site. Cambia los estilos que creas pertinentes. El único criterio es que a dirección le gustaría que se pareciera lo máximo posible a la web de Planeta. ***DONE***
 > Para esto, he utilizado [Angular Material](https://material.angular.io/ "Angular Material"). He personalizado un tema y aplicado a la aplicación. Esto reduce el uso de css en los elementos html. 
  
5. Cuando entras por primera vez te debe redirigir a la página de naves. ***DONE***
> Para la navegación entre las vistas se ha utilizado el [enrutamiento](https://angular.io/guide/router) que brinda Angular. Cabe destacar que se ha utilizado [Lazy Loading](https://angular.io/guide/lazy-loading-ngmodules) que es una técnica usada en Angular que nos permite cargar sólo, el o los componentes que necesitemos al inicio de nuestra aplicación, estos componentes no cargan cada vez que entres, sino que solo cargan una sola vez. También he usado [Resolver](https://angular.io/api/router/Resolve) que es una intefaz para que las clases  puedan usar proveedor de datos con el enrutador para resolver datos durante la navegación.
6. Cache  
  - Implementar una caché del lado de cliente para proteger la api:
      - Implementa un sistema de caché que evite realizar la misma petición contra el servidor durante 5 minutos. ***DONE***
      - Para resolver este punto intenta aprovechar las ventajas que ofrece Angular ***DONE***
 > He creado un servicio de caché y he utilizado [rxjs](https://angular.io/guide/rx-library). A modo de resumen, el servicio tiene la lista de observables de las peticiones http y se van completado cada una de ellas a los 5 minutos de ser almacenada. Se injecta el servicio donde se desee y se resuelve el observable almacenado en caso de existir, si no se hace la petición.
7. Implementar un menú para los usuarios registrados:
   - Este menú debe permitir cambiar de página. Crea una página de prueba para comprobar que la navegación funciona. ***DONE***
 > La dispone de un ***Formulario de acceso*** para que los usuarios registrados puedan acceder. Los usuarios deberán registrase en con el ***Formulario de registro***. En ese momento se puede añidir permisos de usuario y administrador. He implementado unos servicios [guard](https://angular.io/api/router/CanActivate) para controlar en la gestión de rutas los permisos de navegación. La App dispone de una pantalla de Administración de usuarios que muestra los usuarios registros y se pueden eliminar. Para todo esto hace falta tener el ***rol*** de ***Administrador***. Ademas, he implementado un Servidor de fake backend, simulando el uso de [JWT](https://es.wikipedia.org/wiki/JSON_Web_Token)  para las peticiones.
8. Tests unitarios: Selecciona algún componente o servicio y aplicarle testing. La idea es que nos demuestres tus conocimientos de testing mas allá de los que ofrece angular al ejecutar un comando de ng-cli. ***DONE***
> Se ha hecho testing sobre varios de los componentes, servicios, ... consiguiendo una cobertura superior al 80%, que es mínimo para dar un buen servicio de test.

- Funcionalidades extra
1. Loader spinner  autogestiona el uso de un loader con las peticiones http. Se usa la libreria [ngx-spinner](https://www.npmjs.com/package/ngx-spinner).
2. Error Handler: autogestiona los errores de la app y los muestra al usuario usando [snackBar](https://material.angular.io/components/snack-bar/overview) de material.


