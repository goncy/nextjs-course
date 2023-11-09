# Curso introductorio a Next.js con App Directory.
Bienvenida/o al curso introductorio a Next.js con App Directory. En este curso aprenderás las bases de Next.js con usando App Directory mientras creas una aplicación web de un catálogo de restaurantes llamada Restaurancy.

Este curso está pensado para ser incremental, es decir, cada lección se basa en la anterior. Por lo tanto, te recomendamos seguir el orden de las lecciones.

Algunos conceptos pueden ser difíciles de entender o puede no tener sentido el por qué hacemos las cosas de cierta manera. No te preocupes, es normal. Al final del curso, o a medida que vayas haciendo más ejercicios y aplicaciones los conceptos van a ir cobrando más sentido. También tomá en cuenta que hay muchas maneras de llegar a los mismos resultado así que si algo no te parece bien, no dudes en aplicar tu enfoque.

Si el contenido del curso no te basta para resolver los ejercicios o entender un tema, no dudes en apoyarte en la documentación oficial, tanto de [Next.js](https://docs.nextjs.org/) como de [React](https://react.dev/reference/react).

## Requisitos
- Conocimientos básicos de HTML, CSS y JavaScript.
  - Si no tienes conocimientos de HTML, CSS y JavaScript, te recomendamos hacer la certificación de [Responsive Web Design](https://www.freecodecamp.org/learn/responsive-web-design) de freeCodeCamp.
- Conocimientos básicos de React.
  - Si no tienes conocimientos de React, te recomendamos hacer [el curso oficial de React](https://react.dev/learn) o el de [React Foundations de Next.js](https://nextjs.org/learn/react-foundations).
- Node.js instalado en tu computadora.
- Editor de código de tu preferencia.
  - También puedes optar por un entorno online como [CodeSandbox](https://codesandbox.io) si no quieres / puedes instalar nada en tu computadora.

## Terminología
A lo largo del curso nos vamos a referir a ciertos conceptos que es importante que conozcas (no es necesario que te lo aprendas de memoria) para poder seguir el curso.

* Routing: Enrutamiento, se encarga de decidir, basado en la URL, que contenido mostrarle al usuario.
* Caching: Caché, es un espacio de almacenamiento temporal que se usa para guardar datos que se van a usar en el futuro.
* Rendering: Renderizado, es el proceso de convertir un componente en una representación visual.
* Layout: Envoltorio de una página, generalmente solo define la estructura o diseño exterior de una página o sub-página.
* Nested layout / pages / etc: Layouts, páginas, etc. anidados. Por ejemplo, un layout anidado es un layout que se encuentra dentro de otro layout.
* Tree: Arbol, es una convención para visualizar una estructura jerárquica. Por ejemplo en una aplicación React tradicional tenemos nuestro componente `App` que tiene un componente `Header`, `Main` y `Footer` que a su vez tienen otros componentes.
* Subtree: Pararnos sobre cualquiera de esos componentes mencionados más arriba y mirar hacia adentro es como mirar un árbol en sí, un subtree es solamente un árbol dentro de otro árbol.
* Leaf / Leaves: Hoja / Hojas, es un nodo que no tiene hijos. Por ejemplo, en el caso de React, un componente que no tiene otros componentes dentro.
* URL segment: Segmento de una URL, por ejemplo, en la URL `restaurancy.com/restaurante/goncy`, `restaurante` y `goncy` son URL segments.
* URL path: Todo lo que viene después del dominio, por ejemplo, en la URL `restaurancy.com/restaurante/goncy`, `/restaurante/goncy` es el URL path.
* Build: Es el proceso de convertir (compilar, minificar y más) nuestro código en un bundle preparado para producción.
* Bundle: Es un archivo que contiene todo (o parte) del código de nuestra aplicación. En aplicaciones híbridas tenemos el server bundle que es quien contiene las dependencias de la aplicación que se ejecutan en el servidor y el client bundle que es quien contiene las dependencias de la aplicación que se ejecutan en el cliente.

## Índice
- [Que es Next.js?](#que-es-nextjs)
- [Creando una aplicación con Next.js](#creando-una-aplicación-con-nextjs)
  - [Tecnologías en el proyecto](#tecnologías-en-el-proyecto)
  - [Estructura del proyecto](#estructura-del-proyecto)
- [Ambientes de renderizado (Servidor y Cliente)](#ambientes-de-renderizado-servidor-y-cliente)
  - [Server Components](#server-components)
  - [Client Components](#client-components)
  - [Cuando usar Server Components y Client Components](#cuando-usar-server-components-y-client-components)
- [Mostrando los restaurantes](#mostrando-los-restaurantes)
- [Mostrando un restaurante](#mostrando-un-restaurante)
  - [Router](#router)
  - [Rutas dinámicas](#rutas-dinámicas)
  - [Colocación](#colocación)

## Que es Next.js?
[Next.js](https://nextjs.org/) es un framework híbrido (se ejecuta en el servidor y en el cliente) de React que nos provee de una serie de herramientas y funcionalidades para crear aplicaciones web de una manera más sencilla y eficiente. Next.js se encarga de toda la configuración necesaria de React y sus herramientas para que nosotros podamos enfocarnos en desarrollar nuestra aplicación.

## Creando una aplicación con Next.js
La manera más fácil de crear una aplicación Next.js en nuestra computadora es usando el paquete `create-next-app` de npm. Este paquete nos permite crear una aplicación Next.js con todas las configuraciones necesarias para que podamos empezar a desarrollar nuestra aplicación.

```bash
npx create-next-app@latest --example "https://github.com/goncy/nextjs-course" --example-path "code/starter" restaurancy
```
> Los parametros `--example` y `--example-path` se encargan de crear la aplicación con el código necesario para este curso, si querés crear un proyecto propio podés omitirlos.

Luego de que el comando termine de ejecutarse nos va a crear una carpeta con el nombre `restaurancy` y todos los archivos necesarios para correr nuestra aplicación.

Ahora vamos a ejecutar los siguientes comandos:
```bash
cd restaurancy
npm run dev
```
Y luego de unos segundos deberiamos ver un mensaje como este:
```bash
  ▲ Next.js <versión de Next.js>
  - Local:        http://localhost:3000
```
Si abrimos el navegador en la dirección `http://localhost:3000` deberíamos ver una página como la siguiente:

![Página de bienvenida de Next.js](./images/starter.jpg)

### Tecnologías en el proyecto
Además de Next.js y React, este proyecto usa [TypeScript](https://www.typescriptlang.org/) para agregar tipado y [Tailwindcss](https://tailwindcss.com/) para manejar estilos. Si no conoces TypeScript o Tailwindcss y no querés usarlos no te preocupes, no escribas tipos en TypeScript y no uses las clases de Tailwindcss y usá lo que quieras para manejar los estilos.

### Estructura del proyecto
En la raíz de nuestros proyecto nos vamos a encontrar varios archivos de configuración y otras cosas que vamos a ignorar por el momento. Lo que nos interesa por ahora es la carpeta `src` y su contenido.

```bash
├── src
│   └── app
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
└── api.ts
```

- `globals.css`: Archivo de estilos globales de la aplicación. Incluye los estilos de Tailwindcss.
- `layout.tsx`: El archivo `layout.tsx` es un archivo especial de Next.js que nos permite definir un envoltorio para nuestra aplicación (o página). En este caso, el layout es el encargado de definir la estructura de la página (html y body), importar los estilos globales y agregar un header, footer y contenedor para nuestra página. El archivo de `layout.tsx` recibe una prop `children` que es el contenido de la página que nuestro usuario visite.
- `page.tsx`: El archivo `page.tsx` también es un archivo especial de Next.js que nos permite definir una página. En este caso, al estar definido en la raíz de nuestro directorio `app`, es la página que se va a mostrar al usuario cuando ingrese al inicio (a la ruta `/`)
- `api.ts`: El archivo `api.ts` define algunos métodos que vamos a usar a lo largo del curso para obtener información sobre restaurantes. Por el momento solo devuelve datos de prueba pero más adelante vamos a usarlo para obtener datos reales.

Date un tiempo para modificar el contenido de los archivos y ver como afecta a la aplicación. Mientras el servidor de desarrollo esté corriendo basta con guardar un archivo para ver los cambios reflejados en pantalla.

## Ambientes de renderizado (Servidor y Cliente)
Hay dos ambientes donde las aplicaciones web se pueden renderizar: el cliente y el servidor.

![](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fclient-and-server-environments.png&w=3840&q=75&dpl=dpl_DzaGxTbCZzXMDg4XPPbArRct6JPH)

El `cliente` se refiere al navegador en el dispositivo del usuario, que envía una petición al `servidor` para recibir el código de tu aplicación y la convierte en una interfaz visual para el usuario.

El `servidor` se refiere a una computadora en un data center que almacena el código de tu aplicación y recibe peticiones de los clientes, devolviendo una respuesta.

Podemos pensar al `servidor` como el lugar donde comienzan las cosas, está oculto del usuario y tenemos acceso a nuestros secretos y credenciales. El `cliente` es donde terminan las cosas y tenemos acceso a información del usuario, como su navegador, datos y más.

Ayuda pensar esta transición como un flujo unidireccional del servidor al cliente. Una vez que una petición se termina de ejecutar en el servidor y pasa al cliente, no puede volver al servidor (si necesitás volver al servidor, haces una nueva petición, por ejemplo accediendo a una nueva ruta), a esta línea imaginaria que separa el servidor del cliente se la conoce como `network boundary`.

Este concepto podría no resultar del todo claro en este momento, pero cobrará mayor sentido a medida que adquiramos más práctica.

### Server Components
Por defecto, todos los componentes creados en la carpeta `app` son [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components). Los Server Components son componentes que se ejecutan solamente en el servidor y tienen como objetivo describir como debería verse una porción de nuestra interfaz. Los Server Components solo se ejecutan cuando el usuario accede a una ruta o segmento y no se vuelven a renderizar (recordemos que una vez que se termina de ejecutar la petición en el servidor, no puede volver). Esto quiere decir que no pueden manejar eventos del usuario, estados locales ni hooks, pero pueden acceder directamente a datos de servidor, base de datos, variables de entorno privadas y todo lo que se pueda hacer en el servidor.

Sin embargo, una aplicación tradicional se compone también de componentes dinámicos e interactivos que requieren interacciones del usuario, eventos y más. Para eso podemos usar `Client Components`. Los Server Components pueden importar y usar Client Components pero los Client Components no pueden importar Server Components. No te preocupes si esto todavía no hace sentido, vamos a verlo en acción más adelante.

Podemos usar Server Components dentro de Server Components de manera indefinida, pero, en el momento en el que usamos un Client Component, delimitamos nuestro `network boundary`.

Si intentamos usar un hook o suscribirnos a un evento en un Server Component vamos a obtener un error.

```jsx
import { useState } from 'react' // 🚨 ReactServerComponentsError 🚨: You're importing a component that needs useState. It only works in a Client Component but none of its parents are marked with "use client", so they're Server Components by default.

export default function Page() {
  return (...)
}
```

Ahora la pregunta del millón, ¿por qué renderizariamos algo en el servidor? Bueno, acá un listado de beneficios sobre ejecutar cosas en el servidor:
- Obtención de datos: Podemos obtener nuestros datos desde un servidor más cercano a nuestro orígen de datos, haciendo la obtención más rápida y eficiente.
- Seguridad: Al ejecutar desde el servidor podemos mantener toda la data sensible como tokens, credenciales y más, ocultas del usuario.
- Caching: Cuando cacheamos datos en el cliente ese caché es único para cada usuario, en cambio, cuando cacheamos datos en el servidor, ese caché es compartido entre todos los usuarios, lo que nos permite ahorrar recursos y mejorar la performance de nuestra aplicación.
- Bundle size: Mucho del trabajo que antes debíamos hacer en el cliente ahora lo podemos hacer en el servidor, minimizando la cantidad de código que debemos enviar al cliente.
- Pintado inicial y FCP (First Contentful Paint): En el servidor podemos generar HTML y CSS que se envía al cliente de manera inmediata sin necesidad de esperar que el JavaScript se descargue y ejecute en el cliente.
- SEO: El HTML renderizado por el servidor puede ser usado por los motores de búsqueda para indexar nuestra aplicación.
- Streaming: Podemos enviar contenido al cliente a medida que se va generando, en vez de esperar a que se genere todo el contenido para enviarlo al cliente. Esto permite al usuario ver el contenido más rápido.

### Client Components
Los `Client Components` nos permiten escribir interfaces interactivas y dinámicas que se ejecutan en el cliente. Los Client Components pueden usar hooks, estados locales, eventos, APIs del navegador y más. Podemos pensar a los Client Components como "los componentes de siempre", los componentes de React que solemos usar en nuestras aplicaciones con Vite o Create React App (pero con algunas diferencias, como que se renderizan una vez en el servidor antes de renderizarse en el cliente, podés leer más [acá](https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered)).

Para marcar un componente como Client Component, debemos agregar la directive `"use client"` al inicio del archivo. 

```jsx
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
```

### Cuando usar Server Components y Client Components
Si bien hay excepciones para cada uno, esta lista resumen cuando deberías usar cada uno la mayoría de las veces.

| ¿Qué debes hacer?                                                                                     | Componente del Servidor  | Componente del Cliente |
| ----------------------------------------------------------------------------------------------------- | ------------------------ | ---------------------- |
| Obtener datos                                                                                         | ✅                       | ⛔                     |
| Acceder a recursos del backend (directamente)                                                         | ✅                       | ⛔                     |
| Mantener información sensible en el servidor (tokens de acceso, claves API, etc.)                     | ✅                       | ⛔                     |
| Mantener dependencias grandes en el servidor / Reducir JavaScript del lado del cliente                | ✅                       | ⛔                     |
| Agregar interactividad y escuchadores de eventos (`onClick()`, `onChange()`, etc.)                    | ⛔                       | ✅                     |
| Utilizar Estado y Efectos del Ciclo de Vida (`useState()`, `useReducer()`, `useEffect()`, etc.)       | ⛔                       | ✅                     |
| Utilizar APIs exclusivas del navegador                                                                | ⛔                       | ✅                     |
| Utilizar hooks personalizados que dependen del estado, efectos o APIs exclusivas del navegador        | ⛔                       | ✅                     |
| Utilizar [Componentes de Clase de React](https://react.dev/reference/react/Component)                 | ⛔                       | ✅                     |

## Mostrando los restaurantes
Ahora que ya tenemos un poco de teoría, vamos a ver realmente como usar Server Components en nuestra aplicación. ¿Recordás el archivo `api.ts` que dijimos que ibamos a usar para obtener datos? Bueno, ahora vamos a usarlo. Si abrimos el archivo vamos a ver que define una interfaz para `Restaurant` con algunos campos.

```ts
interface Restaurant {
  id: number;
  name: string;
  image: string;
  description: string;
  address: string;
  score: number;
  ratings: number;
}
```

También hay un objeto `api` con un método `list` que nos devuelve una `Promise` con un array de `Restaurant`. Vamos a ver como podemos usar ese método en nuestro Server Component `page.tsx`.

```jsx
import api from "@/api";

export default async function Home() {
  const restaurants = await api.list();

  console.log(restaurants);

  return (...);
}
```

Si ahora miramos la consola (no la del navegador, sino la terminal, donde corrimos `npm run dev`) vamos a ver un listado de `Restaurant`. Pero, ¡¿cómo es posible este suceso?! 🤯

Como dijimos antes, los Server Components no se vuelven a renderizar. Por ende podemos convertir nuestro componente en una función asíncrona y esperar a que la `Promise` se resuelva con los datos de los restaurantes y en la línea de abajo podemos usar esos datos para renderizarlos en nuestra página. Vamos a iterar sobre `restaurants` y devolver una grilla de restaurantes mostrando su imágen, título, descripción y rating.

```jsx
import api from "@/api";

export default async function Home() {
  const restaurants = await api.list();

  return (
    <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {restaurants.map((restaurant) => {
        return (
          <article key={restaurant.id}>
            <img
              alt={restaurant.name}
              className="mb-3 h-[300px] w-full object-cover"
              src={restaurant.image}
            />
            <h2 className="inline-flex gap-2 text-lg font-bold">
              <span>{restaurant.name}</span>
              <small className="inline-flex gap-1">
                <span>⭐</span>
                <span>{restaurant.score}</span>
                <span className="font-normal opacity-75">({restaurant.ratings})</span>
              </small>
            </h2>
            <p className="opacity-90">{restaurant.description}</p>
          </article>
        );
      })}
    </section>
  );
}
```

Y el resultado es el siguiente:
![Listado de restaurantes](./images/restaurants-grid.jpg)

Entonces, aprendimos que además de ejecutarse en el servidor y todos los beneficios que contamos antes, los Server Components pueden usar `async await` y nos ayudan a reducir el boilerplate y complejidad de nuestra aplicación al obtener datos.

> Bonus: Dale tu propio toque mágico de estilos a la grilla de restaurantes.

## Mostrando un restaurante
Ahora vamos a crear una ruta para poder visualizar cada restaurant de manera individual. Para eso primero tenemos que entender un poco más como funciona el router de Next.js y conocer algunas de sus convenciones de archivos.

### Router
Next.js con App Directory posee un router construido sobre React Server Components, el cual soporta layouts compartidos, enrutamiento anidado, estados de carga, manejo de errores y mucho más. El enrutamiento de App Router es basado en archivos, lo que significa que podemos crear rutas y segmentos simplemente creando archivos y carpetas. Ahora lo importante, que archivos y carpetas tenemos que crear? Bueno, ya sabemos de la existencia de `layout.tsx` y `page.tsx`, pero como podemos usarlos para crear otras rutas? Que otras convenciones existen? Veamos algunas de las que vamos a usar en este curso:

- `layout.tsx`: Envuelve a un `page.tsx`, nos permite compartir un layout entre varias páginas.
- `page.tsx`: Define una página, recibe por props parámetros y parámetros de búsqueda.
- `loading.tsx`: Página de carga, se muestra mientras se está cargando una página, cuando la página termina de cargar los datos se reemplaza por el contenido de `page.tsx`.
- `error.tsx`: Página de error, se muestra al haber una excepción o error en la ejecución de una página o layout.
- `route.tsx`: Define una ruta de API, se ejecuta en el servidor y devuelve datos usando un objeto `Response`.

Eso debería ser suficiente por ahora en tanto a archivos (si querés ver todos, podés hacerlo [acá](https://nextjs.org/docs/app/building-your-application/routing#file-conventions))

### Rutas dinámicas
Si bien vimos varios archivos, más arriba hablamos también de carpetas y de anidarlas. Como hacemos para crear una ruta para mostrar un restaurant basado en su `id`? De la siguiente manera:

```bash
├── src
│ └── app
│    ├── globals.css
│    ├── layout.tsx
│    ├── page.tsx
│    └── [id]
│      └── page.tsx
└── api.ts
```

Creemos la carpeta y archivo `src/app/[id]/page.tsx` y agreguemos el siguiente contenido:

```jsx
import api from "@/api";

export default async function RestaurantPage({params: {id}}: {params: {id: string}}) {
  const restaurant = await api.fetch(id);

  return (
    <article key={restaurant.id}>
      <img
        alt={restaurant.name}
        className="mb-3 h-[300px] w-full object-cover"
        src={restaurant.image}
      />
      <h2 className="inline-flex gap-2 text-lg font-bold">
        <span>{restaurant.name}</span>
        <small className="inline-flex gap-1">
          <span>⭐</span>
          <span>{restaurant.score}</span>
          <span className="font-normal opacity-75">({restaurant.ratings})</span>
        </small>
      </h2>
      <p className="opacity-90">{restaurant.description}</p>
    </article>
  );
}
```

Si ahora entramos a la ruta `/1` deberíamos ver algo así:
![Página de un restaurante](./images/restaurant-details.jpg)

Veamos como fue que pasó esto. Ya sabemos que los componentes por defecto son Server Components, así que hicimos que sea `async`, usamos nuestro método `api.fetch` para obtener los datos del restaurante. Ahora aprendimos algo nuevo, el archivo `page.tsx` recibe como props una propiedad `params` que contiene los parámetros de la ruta. En este caso, como nuestra ruta es `/[id]`, el parámetro se llama `id`. Por lo tanto, podemos desestructurar `params` y obtener el `id`. Luego usamos ese `id` para obtener los datos del restaurante y renderizarlos en la página.

Ahora tenemos un pequeño problema: acabamos de repetir todo el código de la tarjeta del restaurant, podríamos crear un componente y reutilizarlo (te voy a dejar esa tarea a vos). Pero... ¿Dónde irían los componentes que no son páginas / layouts o archivos especiales?

### Colocación
Si bien el router de Next.js es basado en archivos, solamente los archivos con nombres especiales se convierten en rutas de nuestra aplicación, por ende podríamos crear una carpeta `components` dentro de `app` (o anidada donde la necesitemos) y no debería traernos ningún problema. Sin embargo queda en vos como lo quieras hacer, si querés crear una carpeta `components` (o lo que quieras) fuera de `app` (pero dentro de `src`) podés hacerlo.

![](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fproject-organization-colocation.png&w=3840&q=75&dpl=dpl_DzaGxTbCZzXMDg4XPPbArRct6JPH)

Ahora si, andá a crear ese componente y reutilizalo en `page.tsx` y `[id]/page.tsx`.

## Navegación
En Next.js tenemos el componente `Link`, que extiende la etiqueta `<a>` para agregarle funcionalidades de pre-carga y pre-renderizado. El componente `Link` nos permite navegar entre páginas de nuestra aplicación sin tener que recargar la página. Se usa de manera muy similar a la etiqueta `<a>` y lo podemos importar desde `next/link`. Agreguemos a nuestra grilla de restaurantes un link para poder navegar a la página de cada restaurante.

```jsx
import Link from "next/link";

import api from "@/api";

export default async function Home() {
  const restaurants = await api.list();

  return (
    <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {restaurants.map((restaurant) => {
        return (
            ...
              <Link href={`/${restaurant.id}`}>
                {restaurant.name}
              </Link>
            ...
        );
      })}
    </section>
  );
}
```

Bien, ahora te toca a vos. Agregá a la página de detalle del restaurante, un link para volver a la página de inicio y un link al header en el layout para que al clickearlo nos lleve al inicio.

## Estados de carga
Nuestras páginas cargan bastante rápido (estamos simulando un retardo de 750ms), vayamos a `api.ts` y cambiemos ese `750` por `7500`. Si recargamos, vemos efectivamente que la página tarda 7.5 segundos en cargar. El problema es que mientras la página carga, el usuario no ve nada y no sabe si la página no anda, si su internet anda mal o que está pasando. En Next.js podemos definir un archivo `loading.tsx`, el cual está construido sobre [React Suspense](https://react.dev/reference/react/Suspense). Mientras nuestra página esté suspendida (mientras haya operaciones bloqueantes como un `await` de un Server Component asíncrono) se va a mostrar el contenido de `loading.tsx`. Una vez que esas operaciones terminen, se va a reemplazar el contenido de `loading.tsx` por el contenido de `page.tsx`. Esto nos permite no solamente mostrarle al usuario que "algo está cargando" sino que también nos permite enviar todas las partes de nuestra aplicación que no dependan de esas operaciones bloqueantes, como los componentes que ya terminaron sus operaciones, los layouts y más.

Vamos a crear el archivo `src/app/loading.tsx` y agreguemos el siguiente contenido:

```jsx
export default function Loading() {
  return (
    <div>Loading...</div>
  );
}
```

Ahora si recargamos la página, vamos a ver que mientras se está cargando, se muestra el texto "Loading..." y una vez que termina de cargar, se reemplaza por el contenido de `page.tsx`. Pero, también vemos que si vamos a la ruta `/1`, también se muestra el texto "Loading...", por qué si el `loading.tsx` está definido en la raíz de nuestro proyecto? Esto sucede por que `loading.tsx` es una abstracción sobre React Suspense, cuando una parte de nuestra aplicación se suspenda, va a buscar hacia arriba el Suspense Boundary más cercano y va a usarlo. Si quisieramos, podríamos definir un `loading.tsx` dentro de `[id]` y se usaría en vez del de la raíz. Por ahora estamos bien con este.

## Manejo de errores
De momento nuestra aplicación usa datos de prueba por lo que es poco probable que ocurran errores, pero puede ser que alguien intente acceder a una página que no existe o que simplemente queramos estar preparados para el día de mañana. Vamos a crear el archivo `src/app/error.tsx` y agreguemos el siguiente contenido:

```jsx
'use client'

export default function ErrorPage({error}: {error: Error}) {
  console.error(error);

  return (
    <div>Something went wrong, try again!</div>
  )
}
```

Si intentamos de entrar a una ruta inexistente, como `/123` vamos a ver una ventana de error (en desarrollo) y el contenido de nuestra página de error correctamente. Un detalles es que el archivo `error.tsx` siempre debe ser un Client Component, ya que recibe por props, opcionalmente, una función `reset` a la que podemos llamar para intentar re-renderizar nuestra página con el mismo input que tenía.

También, el archivo `error.tsx` funciona con un React Error Boundary que funciona de manera similar al Suspense Boundary, buscando hacia arriba el Error Boundary más cercano. Por ende si algo falla en `/1` o en `/` se va a usar el mismo `error.tsx`.

## Usando una base de datos
Vamos a mover nuestros datos de prueba a una base de datos para poder modificarlos cuando queramos, en este caso vamos a usar Google Sheets, ya que es fácil, gratis y sin configuración, vos podés usar la base de datos que quieras! Para eso vamos a [https://sheets.new](https://sheets.new) y creamos una nueva hoja con los mismos datos que nuestra data de prueba.

Podes usar ChatGPT para convertir la data de prueba, igual soy bueno y te lo dejo acá abajo (copialo, pegalo en la primer celda de google sheets y seleccioná "dividir texto en columnas")

```csv
id,name,description,address,score,ratings,image
1,The Golden Spoon,"A fine dining experience with a menu that changes daily based on the freshest ingredients available.",123 Main St. Anytown USA,4.5,100,https://source.unsplash.com/480x300/?restaurant&random=1
2,La Piazza,"Authentic Italian cuisine in a cozy atmosphere with outdoor seating available.",456 Oak Ave. Anytown USA,4.2,80,https://source.unsplash.com/480x300/?restaurant&random=2
3,The Sizzling Skillet,"A family-friendly restaurant with a wide variety of dishes. including vegetarian and gluten-free options.",789 Elm St. Anytown USA,4.8,120,https://source.unsplash.com/480x300/?restaurant&random=3
4,The Hungry Bear,"A rustic cabin-style restaurant serving hearty portions of comfort food.",101 Forest Rd. Anytown USA,4.0,60,https://source.unsplash.com/480x300/?restaurant&random=4
5,The Spice Route,"A fusion restaurant that combines the flavors of India. Thailand. and China.",246 Main St. Anytown USA,4.6,90,https://source.unsplash.com/480x300/?restaurant&random=5
6,The Catch of the Day,"A seafood restaurant with a focus on locally-sourced. sustainable ingredients.",369 Beach Blvd. Anytown USA,4.3,70,https://source.unsplash.com/480x300/?restaurant&random=6
7,The Garden Cafe,"A vegetarian restaurant with a beautiful outdoor garden seating area.",753 Maple St. Anytown USA,4.9,150,https://source.unsplash.com/480x300/?restaurant&random=7
8,The Burger Joint,"A classic American diner with a wide variety of burgers. fries. and milkshakes.",852 Oak Ave. Anytown USA,3.9,50,https://source.unsplash.com/480x300/?restaurant&random=8
9,The Cozy Corner,"A small cafe with a warm and inviting atmosphere. serving breakfast and lunch dishes.",963 Main St. Anytown USA,4.7,110,https://source.unsplash.com/480x300/?restaurant&random=9
10,The Steakhouse,"A high-end restaurant specializing in premium cuts of beef and fine wines.",1479 Elm St. Anytown USA,4.1,75,https://source.unsplash.com/480x300/?restaurant&random=10
11,The Taco Truck,"A casual Mexican restaurant serving authentic street tacos.",753 Main St. Anytown USA,4.4,65,https://source.unsplash.com/480x300/?restaurant&random=11
12,The Ice Cream Parlor,"A family-friendly restaurant with a wide variety of ice cream flavors.",852 Oak Ave. Anytown USA,4.9,150,https://source.unsplash.com/480x300/?restaurant&random=12
```

Luego, para poder acceder a esta data desde nuestra app, debemos ir a `Archivo > Compartir > Publicar en la web`, publicar y copiar el link que nos da para acceder a la data en formato `.csv`.

![](./images/share-web-0.jpg)
![](./images/share-web-1.jpg)

Una vez que tengamos el link, vamos a nuestro `api.ts` y vamos a cambiar nuestro método `list` para que use la data de Google Sheets.

```ts
const api = {
  list: async (): Promise<Restaurant[]> => {
    // Obtenemos la información de Google Sheets en formato texto y la dividimos por líneas, nos saltamos la primer línea porque es el encabezado
    const [, ...data] = await fetch('...').then(res => res.text()).then(text => text.split('\n'))

    // Convertimos cada línea en un objeto Restaurant, asegurate de que los campos no posean `,`
    const restaurants: Restaurant[] = data.map((row) => {
      const [id, name, description, address, score, ratings, image] = row.split(',')
      return {
        id,
        name,
        description,
        address,
        score: Number(score),
        ratings: Number(ratings),
        image
      }
    })

    // Lo retornamos
    return restaurants;
  },
  ...
}
```

¡Listo! Ahora si recargamos la página deberíamos ver los datos de Google Sheets. Ten en cuenta que Next.js maneja su propio caché, así que si no ves los cambios probá con <kbd>ctrl</kbd> + <kbd>f5</kbd> (<kbd>cmd</kbd> + <kbd>f5</kbd> si usas Mac). Ahora te dejo a vos modificar el método `fetch` para traer los datos de un restaurante en particular.

## Buildeando nuestra aplicación
Ahora que tenemos una aplicación más o menos completa, vamos a compilarla y correrla en local para ver más acertadamente que tan bien funcionaría en un entorno productivo. Para eso vamos terminar el comando de nuestro servidor de desarrollo y ejecutamos los siguientes comandos:

```bash
npm run build
npm start
```

Luego de unos segundos vamos a ver algo como esto:

![](./images/build-output.jpg)

Si vamos a `http://localhost:3000` deberíamos ver nuestra aplicación funcionando. ¡Y funciona! Pero... Si vamos a la ruta `/` no se muestra el componente de carga, todo funciona, como por arte de mágia, pero ¿por qué? Antes intentemos algo, vayamos a nuestra hoja de Google Sheets, actualicemos un título, volvamos a nuestra app y recarguemos, con <kbd>ctrl</kbd> + <kbd>f5</kbd>.

Mmm... No funciona.

Vayamos a la ruta del elemento que modificamos. Mmm... acá si funciona, hasta se muestra el componente de carga. Si volvemos al index la data no concuerda. ¿Qué está pasando?

Veamos devuelta la imágen de más arriba:

![](./images/build-output.jpg)

Podemos ver que la ruta de `/` tiene un ícono de `○` (abajo nos dice que significa estático)
Mientras que nuestra ruta de `/[id]` tiene un ícono de `λ` (abajo nos dice que significa server)

## Estrategias de renderizado
En Next.js tenemos dos principales estrategias de renderizado, estática y dinámica.

### Renderizado estático (por defecto)
Con renderizado estático nuestras rutas se renderizan en tiempo de compilación, esto permite que los datos estén disponibles desde la primer visita de un usuario. Estos datos se persisten a lo largo del tiempo y las siguientes visitas de un usuario no impactaran en nuestro origen de datos. Esto nos permite tener una aplicación con un tiempo de carga muy rápido y un bajo consumo de recursos.

El renderizado estático es muy útil para páginas que no cambian frecuentemente o no incluyen información personalizada sobre el usuario. También podemos combinar el renderizado estático con obtener data del lado del cliente para crear aplicaciones dinámicas y rápidas.

Nuestra ruta `/` tuvo un renderizado estático por defecto, pero ¿por qué nuestra ruta de `/[id]` no? Bueno, porque Next.js no sabe cuales son los `id` de nuestros restaurantes, por ende no puede renderizarlos en tiempo de compilación. Pero, si en nuestrá página `/[id]/page.tsx` definimos una función `generateStaticParams` que devuelva los ids, los va a generar en tiempo de compilación de manera estática:

```jsx
export async function generateStaticParams() {
  const restaurants = await api.list()
 
  return restaurants.map((restaurant) => ({
    id: restaurant.id,
  }))
}
```

> También podemos exportar una variable `dynamicParams` como `false` en nuestra página, si queremos que devuelva un 404 para cualquier ruta no definida en `generateStaticParams`

### Renderizado dinámico
Con renderizado dinámico nuestras rutas se renderizan cada vez que un usuario ingresa a una ruta. El renderizado dinámico es útil cuando una ruta contiene información personalizada de un usuario, cuando la información de la página no puede calcularse antes de tiempo o cuando la información cambia de manera muy frecuente.

Para optar una ruta a renderizado dinámico podemos hacer varias cosas:

#### `cache: no-store`
Definir la propiedad `cache` en un fetch de nuestra página en `no-store`, por ejemplo ir a nuestro `api.ts` y actualizar nuestro fetch de `list` de la siguiente manera:

```ts
const [, ...data] = await fetch('...', { cache: 'no-store' }).then(res => res.text()).then(text => text.split('\n'))
```

Esto le va a indicar a Next.js que cada vez que una ruta deba obtener los datos de `list`, no debe usar la caché. Para probar si funcionó, terminá el servidor (<kbd>ctrl</kbd> + <kbd>c</kbd> / <kbd>cmd</kbd> + <kbd>c</kbd>), y volvé a ejecutar:

```bash
npm run build
npm start
```

![](./images/build-output.jpg)

Ahora no solo debería funcionar, sino que podemos ver en el build output que la ruta `/` está marcada como `server`.

#### `revalidate: number`
Si no queremos que cada petición traiga información nueva cada vez, sino que queremos que "revalide" esa información cada cierto tiempo, podemos definir la propiedad `revalidate` en nuestros `fetch` de la siguiente manera:

```ts
const [, ...data] = await fetch('...', { revalidate: 100 }).then(res => res.text()).then(text => text.split('\n'))
```

Eso va a hacer que cada luego de 100 segundos de haber obtenido los datos, la próxima vez que un usuario ingrese a la ruta, se le van a servir datos de caché y en segundo plano se van a obtener datos nuevos, van a sobre-escribir la caché y la próxima vez que un usuario ingrese a la ruta, se le van a servir los datos nuevos. A esto se lo conoce como `time-based revalidation`.

#### Configuración de segmento de ruta
Las rutas pueden exportar constantes de configuración para definir ciertos comportamientos, incluyendo la revalidación y estrategia de renderizado. Podríamos hacer lo siguiente en nuestro `page.tsx`:

```tsx
export const dynamic = 'force-dynamic' // default: auto
export const revalidate = 100 // default: false
```

Existen muchas otras configuraciones las cuales podés ver [acá](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config).

Ahora, si definimos `force-dynamic`, `revalidate` en 100 y en el fetch le ponemos `revalidate` en 50. ¿Qué configuración se sobrepone al resto? La respuesta es fácil, la de menor revalidación, en este caso como definimos `force-dynamic` los datos se van a obtener de origen en cada petición.

#### Funciones dinámicas
También hay funciones a las que se las denomina funciones dinámicas. Las funciones dinámicas dependen de información de la petición, como `cookies`, `headers`, `useSearchParams` y `searchParams`. Al usar alguna de estas funciones en nuestros segmentos (o funciones llamadas dentro de nuestros segmentos) la ruta optará por un renderizado dinámico.

## Caching
Cuando trabajamos con aplicaciones React en Vite o Create React App, solemos lidiar con un caché, el caché del navegador. En Next.js tenemos diferentes tipos de caché:

Aquí tienes la traducción al español de la tabla MDX:

| Mecanismo                    | Qué                             | Dónde    | Propósito                                                  | Duración                                    |
| ---------------------------- | ------------------------------- | -------- | ---------------------------------------------------------- | ------------------------------------------- |
| Memorización de Solicitudes  | Valores de retorno de funciones | Servidor | Reutilizar datos en un árbol de componentes React          | Duración de la solicitud                    |
| Caché de Datos               | Datos                           | Servidor | Almacenar datos entre solicitudes de usuario y despliegues | Persistente (puede ser validado nuevamente) |
| Caché de Ruta Completa       | HTML y carga RSC                | Servidor | Reducir el costo de renderización y mejorar el rendimiento | Persistente (puede ser validado nuevamente) |
| Caché de Enrutamiento        | Carga RSC                       | Cliente  | Reducir las solicitudes al servidor durante la navegación  | Sesión de usuario o basado en el tiempo     |

Next.js por defecto intentará de cachear tanto como sea posible para mejorar el rendimiento y reducir los costos. Cuando tenemos un segmento dinámico pero una petición de datos todavía tiene cache relevante, en vez de ir al origen, Next.js intentará obtenerlo desde el caché de datos, abajo podemos ver un diagrama de como funcionan los diferentes tipos de caché.

![](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fcaching-overview.png&w=3840&q=75&dpl=dpl_Ejtt9BCyCFNeRJdBoVsM9Es9x8xe)

El comportamiento del caché va a depender de si tu ruta tiene renderizado estático o dinámico, los datos están cacheados o no o si un request es parte de una visita inicial o una navegación subsecuente. Esto puede marear un poco pero con el tiempo y práctica vamos a ver que los beneficios son muchos.

---

- Manual revalidation
- generateStaticParams
