# Introductory Course to Next.js 15 with App Router

**Languages:** [🇪🇸 Español](README.md) | 🇺🇸 English | [🇧🇷 Português](README-pt.md)

> [!NOTE]
> This English version was AI translated from the original Spanish version. While we strive for accuracy, there may be minor translation differences. For the most accurate content, please refer to the [Spanish version](README.md).

Welcome to the introductory course to Next.js 15 with App Router! Throughout this course, you will learn the fundamentals (and beyond) of Next.js with App Router to build a web application: [Restaurancy](https://restaurancy.goncy.dev), a restaurant catalog.

![](./images/completed.jpg)

The design of this course is incremental, where each lesson builds upon the previous one. We recommend following the order of the lessons to get the maximum benefit.

It is natural that some concepts may seem complicated at first or that the reasoning behind certain decisions isn't always obvious. Don't worry, as you progress through the course and tackle more exercises, as well as application creation, these concepts will gain greater clarity and meaning. Keep in mind that there are various ways to achieve the same results, so if you have different ideas, go for it!

If at any point you feel that the course content is not sufficient to address the exercises or understand a particular topic, do not hesitate to turn to the official documentation, whether for [Next.js](https://docs.nextjs.org/) or for [React](https://react.dev/reference/react).

## Video

If you prefer to follow this course in a guided video format, you can watch it here:

[![Curso Introductorio a Next.js con App Router](https://img.youtube.com/vi/s5jPwPZrJhw/maxresdefault.jpg)](https://youtu.be/s5jPwPZrJhw)

> [!WARNING]
> The video is not updated with the code in this repository. But it is still valid for most topics.

## Requirements

Make sure you meet the following requirements before starting the course:

- Basic knowledge of HTML, CSS, and JavaScript.
  - If you are not familiar with HTML, CSS, and JavaScript, we recommend completing the [Responsive Web Design](https://www.freecodecamp.org/learn/responsive-web-design) certification from freeCodeCamp.
- Basic knowledge of React.
  - If you do not have experience in React, we suggest completing [the official React course](https://react.dev/learn) or the [React Foundations course from Next.js](https://nextjs.org/learn/react-foundations).
- Have Node.js installed on your computer.
- Have a code editor of your choice.

> [!NOTE]
> You can opt for an online environment, such as [CodeSandbox](https://codesandbox.io), if you do not want to or cannot install anything on your computer.

## Terminology

Throughout the course, we will use some terms that are important for you to know, although you do not necessarily need to memorize them:

- **Routing (Enrutamiento):** Decides, based on the URL, what content to show the user.
- **Caching (Caché):** Temporary storage space for saving data that will be used in the future.
- **Rendering (Renderizado):** Process of converting a component into a visual representation.
- **Layout (Envoltorio):** Component that wraps one (or more) pages.
- **Nested layout/pages/etc (Envoltorios/páginas/etc. anidados):** For example, a layout that is inside another layout.
- **Tree (Árbol):** Representation of a hierarchical structure, components that contain others.
- **Subtree (Subárbol):** A tree nested within another tree.
- **Leaf/Leaves (Hoja/Hojas):** A component without children.
- **URL segment (Segmento de URL):** For example, in the URL `restaurancy.com/restaurante/goncy`, `restaurante` and `goncy` are URL segments.
- **URL path (Ruta de URL):** What follows the domain, such as `/restaurante/goncy` in `restaurancy.com/restaurante/goncy`.
- **Build (Compilación):** Process of compiling the code and getting it ready to be deployed.
- **Bundle (Paquete):** File that contains part or all of the application's code.
- **Boilerplate (Código base):** Repetitive portion of code with little variation.

## Tasks

Our client Goncy is a renowned chef from the city of Quil-Mez, France. With one of the finest palates, he visits all the restaurants in his vicinity to score their food and service. For this, he hired us to develop Restaurancy, a catalog of the finest restaurants in his surroundings. He gave us full freedom regarding design and libraries to use, but he asked us to use Next.js and the App Router because his Argentine twin brother (also named Goncy) told him it wasn't bad. Some of the tasks Goncy left on our board are:

- Create a main route that displays a list of restaurants, including their photo, name, description, score, and number of ratings.
- Create a personalized route for each restaurant that shows the same information as the main route.
- Be able to navigate between routes freely by clicking links.
- Configure our application to be correctly indexed by search engines.
- When sharing a restaurant link on social media, the link preview must contain the restaurant's information.
- Use Google Sheets as a database.
- Revalidate restaurant data every 24 hours.
- Create a utility endpoint that allows on-demand route revalidation.
- Create a search box on our main route to be able to search for restaurants by name.
- Be able to share the search link so other users can access our search directly.
- Be able to add and remove restaurants from a favorites list that is persisted on the user's device.

Optionally also:
- All possible pages should be statically generated.
- In case of accessing a route not statically generated, we should try to render it.
- Show loading states while we fetch information for routes that are not statically generated.
- Show an error page if we access a wrong route or there is an error in our application.

Goncy told us that he is not in a hurry to develop this application, so you can take as much time as you deem necessary.

He also told us to feel free to add any functionalities you consider useful for the application and to be as creative as you want with the design.

## Index

1. [What is Next.js?](#what-is-nextjs)
2. [Creating an Application with Next.js](#creating-an-application-with-nextjs)
    1. [Technologies in the Project](#technologies-in-the-project)
    2. [Project Structure](#project-structure)
3. [Rendering Environments (Server and Client)](#rendering-environments-server-and-client)
    1. [Server Components](#server-components)
    2. [Client Components](#client-components)
    3. [When to Use Server Components and Client Components](#when-to-use-server-components-and-client-components)
4. [Displaying the Restaurants](#displaying-the-restaurants)
5. [Displaying a Restaurant](#displaying-a-restaurant)
    1. [Router](#router)
    2. [Dynamic Routes](#dynamic-routes)
    3. [Colocation](#colocation)
6. [Navigation](#navigation)
7. [Metadata](#metadata)
    1. [`metadata` Object](#metadata-object)
    2. [`generateMetadata`](#generatemetadata)
    3. [Metadata Files](#metadata-files)
8. [Loading States](#loading-states)
9. [Error Handling](#error-handling)
10. [Using a Database](#using-a-database)
11. [Compiling Our Application](#compiling-our-application)
12. [Rendering Strategies](#rendering-strategies)
    1. [Static Rendering (Default)](#static-rendering-default)
    2. [Dynamic Rendering](#dynamic-rendering)
    3. [Streaming](#streaming)
13. [Route Handlers](#route-handlers)
14. [Caching](#caching)
    1. [Cache Revalidation Configurations](#cache-revalidation-configurations)
        1. [cache: "force-cache" (Default)](#cache-force-cache-default)
        2. [cache: "no-store"](#cache-no-store)
        3. [revalidate: number](#revalidate-number)
        4. [Route Segment Configuration](#route-segment-configuration)
        5. [Dynamic Functions](#dynamic-functions)
    2. [Manual Revalidation](#manual-revalidation)
        1. [revalidatePath](#revalidatepath)
        2. [revalidateTag](#revalidatetag)
15. [URL Parameters](#url-parameters)
16. [Route Grouping](#route-grouping)
17. [Server Actions](#server-actions)
18. [Saving to Favorites (localStorage)](#saving-to-favorites-localstorage)
    1. [Pre-rendering](#pre-rendering)
    2. [Lazy Loading](#lazy-loading)
19. [The Future of Next.js](#the-future-of-nextjs)
    1. [Partial Prerendering (PPR)](#partial-prerendering-ppr)
        1. [Using PPR](#using-ppr)
        2. [Benefits of PPR](#benefits-of-ppr)
    2. [Cache Components](#cache-components)
        1. [`cacheLife`](#cachelife)
        2. [`cacheTag`](#cachetag)

## What is Next.js?

[Next.js](https://nextjs.org/) is a hybrid framework that operates on both the server and the client, built on top of React. It provides tools and functionalities that simplify web application development. Next.js handles all the necessary configuration of React and its tools so that we can focus on developing our application.

## Creating an Application with Next.js

For this project, we are going to use a codebase located in the `code` folder of this repository. To clone it to your computer, go to the terminal and execute the following command:

```bash
npx degit goncy/nextjs-course/code restaurancy
```

Once the command execution is complete, a folder named `restaurancy` will be generated with all the necessary files to run the application.

Next, let's execute the following commands:

```bash
cd restaurancy
npm install
npm run dev
```

After a few seconds, you should see a message like this:

```bash
  ▲ Next.js <Next.js version>
  - Local:  http://localhost:3000
```

If you open your browser at the address `http://localhost:3000`, you should see a welcome page similar to the following:

![Next.js Welcome Page](./images/starter.jpg)

> [!TIP]
> If you wanted to create a Next.js project from scratch for other projects, you can use the [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) package.

### Technologies in the Project

In addition to Next.js and React, this project uses [TypeScript](https://www.typescriptlang.org/) for adding typing and [Tailwind CSS](https://tailwindcss.com/) for managing styles. Don't worry if you are not familiar with TypeScript or Tailwind CSS; you can choose not to write types in TypeScript and avoid using Tailwind CSS classes, substituting them with the method you prefer for handling styles.

### Project Structure

At the root of the project, you will find several configuration files and other elements that we can ignore for now. For now, we will focus on the `src` folder and its content.

```bash
└── src/
    ├── app/
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── api.ts
    └── types.ts
```

- `globals.css`: This file contains global styles for the application, including Tailwind CSS styles.
- `favicon.ico`: Default application icon, visible in the browser tab.
- `layout.tsx`: This Next.js-specific file allows us to define a wrapper for our application or page. In this case, it is responsible for establishing the basic page structure (html and body), importing global styles, and adding a header, a footer, and a container for the page content. It receives a `children` prop, which represents the content of the page that the user will see.
- `page.tsx`: Another special Next.js file that allows us to define a page. Since it is in the root of our `app` directory, it will be the page shown to the user when accessing the homepage (route `/`).
- `api.ts`: This file defines some methods that we will use throughout the course to fetch information about restaurants. For now, it only returns test data, but later we will use it to fetch real data.
- `types.ts`: This file defines an interface for the restaurants, which we will use to type the data we get from the API.

Take some time to modify the content of these files and observe how it affects the application. As long as the development server is running, saving a file will be enough to see the changes reflected on the screen.

## Rendering Environments (Server and Client)

There are [two environments](https://nextjs.org/docs/app/getting-started/server-and-client-components) in which web applications with Next.js can be rendered: the client and the server.

![](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fclient-and-server-environments.png&w=3840&q=75&dpl=dpl_DzaGxTbCZzXMDg4XPPbArRct6JPH)

The term `client` refers to the browser on the user's device, which sends a request to the `server` to receive the code of your application and convert it into a visual interface for the user.

On the other hand, the term `server` refers to a computer in a data center that stores the code of your application and receives requests from clients, providing responses to these requests. Everything that happens on the server is neither exposed nor visible to the client, only what is returned.

> [!NOTE]
> While we are in development mode, running `npm run dev`, the server is your computer.

We can visualize this transition as a unidirectional flow from the server to the client. Once a request is completed on the server and transferred to the client, it cannot return to the server. If it needs to return to the server, a new request is made, for example, by navigating to a new route. The imaginary line separating the server from the client is known as the `network boundary`.

This concept may not be entirely clear right now, but it will make more sense as we gain more practice.

### Server Components

By default, all components we use in the `app` folder (in App Router) are [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components). Server Components are React components that run exclusively on the server. These components only run when the user accesses a route or segment and do not run again on the client. This means they cannot handle user events, local state, or hooks, but they can directly access server data, databases, private environment variables, and everything that can be done on the server.

However, a typical application is also composed of dynamic and interactive components that require user interactions, events, and more. For these cases, we can use `Client Components`. Server Components can import and use Client Components, but Client Components cannot import Server Components. Don't worry if this doesn't make much sense yet; we will see how it works later.

We can use Server Components inside other Server Components indefinitely, but the moment we use a Client Component, we mark our `network boundary`.

If we try to use a hook or subscribe to an event in a Server Component, we will get an error.

```jsx
import { useState } from 'react' // 🚨 ReactServerComponentsError 🚨: You are importing a component that needs useState. It only works in a Client Component, but none of its parents is marked with "use client", so they are Server Components by default.

export default function Page() {
  return (...)
}
```

Now, the key question is: why would we render something on the server? Well, here is a list of benefits of running tasks on the server:
- Data Fetching: We can fetch our data from a server closer to our data source, which makes fetching faster and more efficient.
- Security: By running from the server, we can keep all sensitive information, such as tokens, credentials, and more, hidden from the user.
- Bundle Size: Many tasks that we previously had to perform on the client can now be done on the server, minimizing the amount of code we have to send to the client.
- Initial Paint: On the server, we can generate HTML and CSS that are sent to the client immediately, without having to wait for JavaScript to download and execute on the client.
- SEO: The HTML rendered by the server can be used by search engines to index our application.
- Streaming: We can send content to the client as it is generated, instead of waiting for all content to be generated before sending it to the client. This allows the user to see the content faster.

### Client Components

`Client Components` allow us to write interactive and dynamic interfaces that run on the client. Client Components can use hooks, local state, events, browser APIs, and more. We can think of Client Components as "the usual components we use in React in our applications with Vite or Create React App." Although with some differences, such as being rendered once on the server before being rendered on the client.

> [!NOTE]
> You can read more about client components and how they are rendered [here](https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered)

To mark a component as a Client Component, we must add the `"use client"` directive at the beginning of the file.

```jsx
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
```

### When to Use Server Components and Client Components

Although there are exceptions for each, this list summarizes when you should use each one most of the time.

| What should you do?                                                                                           | Server Component | Client Component |
|---------------------------------------------------------------------------------------------------------------|------------------|------------------|
| Access backend resources (directly)                                                                           | ✅                | ⛔                |
| Handle sensitive information (access tokens, API keys, etc.)                                                  | ✅                | ⛔                |
| Handle large dependencies / Reduce client-side JavaScript                                                     | ✅                | ⛔                |
| Fetch data                                                                                                    | ✅                | ⌚                |
| Add interactivity and event listeners (`onClick`, `onChange`, etc.)                                           | ⛔                | ✅                |
| Use State and Lifecycle Effects (`useState`, `useReducer`, `useEffect`, etc.)                                 | ⛔                | ✅                |
| Use browser-exclusive APIs                                                                                    | ⛔                | ✅                |
| Use custom hooks that depend on state, effects, or browser-exclusive APIs                                     | ⛔                | ✅                |
| Use [React Class Components](https://react.dev/reference/react/Component)                                     | ⛔                | ✅                |

> [!NOTE]
> It's not wrong to fetch data from a Client Component, but if we can do it from the server and optimize it, better. We opt for client-side data fetching when: there are user interactions that need to update a portion of the data, doing polling, or when our entire page is static except for one piece of data, so we keep it static and fetch that data from the client.

## Displaying the Restaurants

Now that we have a bit of theory, let's see how to actually use Server Components in our application. In `api.ts`, we will find an `api` object with a `list` method that returns a `Promise` with an array of `Restaurant`. Let's see how we can use this method in our `page.tsx` Server Component:

```jsx
import api from "@/api";

export default async function HomePage() {
  const restaurants = await api.list();

  console.log(restaurants);

  return (...);
}
```

When looking at the console (not the browser console, but the terminal where we run `npm run dev`), we will see a list of `Restaurant`. How is this possible? 🤯 As we mentioned earlier, Server Components do not re-render. Therefore, we can turn our component into an asynchronous function and wait for the `Promise` to resolve with the restaurant data. Then, we use that data to render it on our page.

Let's iterate over `restaurants` to create a grid that shows the image, title, description, and rating of each restaurant.

```jsx
import api from "@/api";

export default async function HomePage() {
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

The result is as follows:
![Restaurant List](./images/restaurants-grid.jpg)

In summary, we have learned that, in addition to running on the server and taking advantage of all the benefits mentioned above, Server Components can use `async/await`. This helps us reduce the boilerplate and complexity of our application by fetching data efficiently.

**Bonus:** Personalize the restaurant grid with your own magical styling touch. Have fun exploring and improving the visual presentation!

## Displaying a Restaurant

Let's create a route to view each restaurant individually. Before diving into the code, let's take a look at how the Next.js router works and understand some of its file conventions.

### Router

Next.js, with App Router, uses a router built on React Server Components that supports shared layouts, nested routing, handling loading states, error handling, and more. App Router routing is file-based, meaning we can create routes and segments simply by creating files and folders. So, what files and folders should we create? We already know `layout.tsx` and `page.tsx`, but how can we use them to create other things? Let's look at some conventions we will use in this course:

- `layout.tsx`: Wraps `page.tsx`, allowing a layout to be shared between multiple pages.
- `page.tsx`: Defines a page, receives parameters and search parameters as props.
- `loading.tsx`: Loading page displayed while the route is loading; when loading finishes, the loading screen is replaced by the response of `page.tsx`.
- `error.tsx`: Error page displayed when there is an exception or error in the execution of a page or layout.
- `route.tsx`: Defines an API route, runs on the server, and returns data using a `Response` object.

That should be enough for now regarding files (you can see more [here](https://nextjs.org/docs/app/building-your-application/routing#file-conventions)).

### Dynamic Routes
We talked about files, but we also mentioned folders and their nesting. How do we create a route to show a restaurant based on its `id`? The folder and file structure would look like this:

```bash
└── src/
    ├── app/
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── [id]/
    │       └── page.tsx
    ├── api.ts
    └── types.ts
```

Now, let's create the folder and file `src/app/[id]/page.tsx` and add the following content:

```jsx
import api from "@/api";

export default async function RestaurantPage({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
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

Upon entering the route `/1`, we should see something like this:
![A restaurant's page](./images/restaurant-details.jpg)

Let's see how this happened. We remember that components, by default, are Server Components, so we made it `async` and used our `api.fetch` method to get the restaurant data. Additionally, we learned something new: the `page.tsx` file receives a `params` property as props, which contains the route parameters. In this case, since our route is `/[id]`, the parameter is named `id`. We [destructure](https://es.javascript.info/destructuring-assignment#desestructuracion-de-objetos) `params` to get the `id` and use it to fetch the restaurant data and render it on the page.

Now we have a small problem: we just repeated all the restaurant card code.

> [!IMPORTANT]
> Create a `RestaurantCard` component for the restaurant card and reuse it in `page.tsx` and `[id]/page.tsx`.

But... Where should components that are not pages, layouts, or special files go?

### Colocation

Although Next.js routing is file-based, only files with special names become routes in our application. Therefore, we could create a `components` folder inside `app` (or nested where we need it) without any problem.

Now, go ahead and create that component. Then, reuse it in `page.tsx` and `[id]/page.tsx`.

## Navigation

In Next.js, we have the `Link` component that allows us to navigate between pages of our application. It is used very similarly to the `<a>` tag and we can import it from `next/link`. Let's add a link to our restaurant grid to navigate to each restaurant's page.

```jsx
import Link from "next/link";

import api from "@/api";

export default async function HomePage() {
  const restaurants = await api.list();

  return (
    <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
      {restaurants.map((restaurant) => {
        return (
            ...
              <Link href={`/${restaurant.id}`} key={restaurant.id}>
                <RestaurantCard restaurant={restaurant} />
              </Link>
            ...
        );
      })}
    </section>
  );
}
```

> [!IMPORTANT]
> Add a link to the restaurant detail page to go back to the home page, and another link to the header in the layout so that clicking the logo takes us to the home page.

## Metadata

Metadata is additional information to tell the browser and search engines about the content of our page. It plays a crucial role in SEO (Search Engine Optimization) and accessibility. In Next.js, we can define metadata through configuration or through files.

### `metadata` Object

We can define and export a `metadata` constant in `layout.tsx` or in `page.tsx` to define static metadata. In `layout.tsx`, let's modify the `title` property of the `metadata` object to look like this:

```jsx
export const metadata: Metadata = {
  title: 'Restaurancy - Hello World',
  description: 'The best restaurants in the world',
  keywords: ['restaurant', 'food', 'eat', 'dinner', 'lunch'],
}
```

![](./images/title.jpg)

Now we should see our page title updated.

![](./images/metadata-1.jpg)

If we open the development tools, we will see that within the `head` tag we can see the metadata we defined.

> [!NOTE]
> You can find more information about the available properties in the `metadata object` [here](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-object).

### `generateMetadata`

 If we need information from the request to generate metadata (for example, the name of a restaurant), we can use the `generateMetadata` function and return an object with all the metadata for our page. In `src/app/[id]/page.tsx`, let's create a `generateMetadata` function as follows:

```ts
export async function generateMetadata({params}: {params: Promise<{id: string}>}) {
  const {id} = await params;
  const restaurant = await api.fetch(id);

  return {
    title: `${restaurant.name} - Restaurancy`,
    description: restaurant.description,
  };
}
```

![](./images/metadata.jpg)

Upon entering any of our restaurants, we will see the page title updated.

### Metadata Files

We can create [special metadata files](https://nextjs.org/docs/app/api-reference/file-conventions/metadata) inside `src/app` or inside our routes. Metadata files can be static files (like `.jpg`, `.png`, `.txt`) or they can be dynamic files (like `.tsx`). The latter allows us to generate metadata, such as [custom Open Graph images based on request information](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image).

> [!IMPORTANT]
> Define some application-level metadata, such as title, description, keywords, etc. And display a custom Open Graph image on the detail page of each restaurant.

## Loading States

Our pages load quite fast (we are simulating a 750 ms delay). Let's go to `api.ts` and change that `750` to `7500`. If we reload, we will see that the page takes 7.5 seconds to load. The problem is that while the page is loading, the user sees nothing and doesn't know if the page is working or not, if their internet is slow, or what is happening.

In Next.js, we can define a `loading.tsx` file, which is built on [React Suspense](https://react.dev/reference/react/Suspense). While our page is suspended (while there are blocking operations like an ongoing request in a Server Component), the content of `loading.tsx` will be displayed. Once those operations finish, the content of `loading.tsx` will be replaced by the content of `page.tsx`. This allows us not only to show the user that "something is loading," but also allows us to send all parts of our application that do not depend on those blocking operations, such as the header, footer, or components whose operations have already finished.

Let's create the file `src/app/loading.tsx` and add the following content:

```jsx
export default function Loading() {
  return (
    <div>Loading...</div>
  );
}
```

Now, upon reloading the page, we will see that while it is loading, the text "Loading..." is displayed, and once it finishes loading, it is replaced by the content of `page.tsx`.

But we also notice that if we go to the route `/1`, the text "Loading..." is also displayed. Why? If `loading.tsx` is defined at the root of our project.

When a part of our application is suspended, it looks upwards for the nearest Suspense Boundary and uses it. In this case, since there is none in `/[id]`, it goes up and finds the one defined at the root of our application.

> [!NOTE]
> If we wanted to, we could define a new `loading.tsx` inside `[id]`, and that one would be used instead of the one at the root, but for now, we are fine with this one.

## Error Handling

Currently, our application uses test data, so errors are unlikely to occur. However, someone might try to access a page that does not exist, or we simply want to be prepared for the future.

Let's create the file `src/app/error.tsx` and add the following content:

```jsx
'use client'

export default function ErrorPage({ error }: { error: Error }) {
  console.error(error);

  return (
    <div>Something went wrong, try again!</div>
  );
}
```

If we try to enter a non-existent route, like `/123`, we will see an error window (in development) and the content of our error page correctly. One detail is that the `error.tsx` file must always be a Client Component, as it receives a `reset` function as a prop, which we can call to re-render our page.

The `error.tsx` file works with a React Error Boundary whose behavior is similar to the Suspense Boundary, looking upwards for the nearest Error Boundary. Therefore, if something fails in `/1` or in `/`, the same `error.tsx` will be used.

> [!NOTE]
> If we do not define an `error.tsx` file, the default one from Next.js will be used.

## Using a Database

We are going to move our test data to a database so we can modify it whenever we want. In this case, we will use Google Sheets, as it is easy, free, and requires no configuration. If you don't like it, you can use the database you prefer. To do this, let's go to [https://sheets.new](https://sheets.new) and create a new sheet with the same data as our test data.

You can use ChatGPT to convert the test data. Anyway, here is the data (copy it, paste it into the first cell of Google Sheets, and select from the Menu: `Data > Split text to columns`):

```csv
id,name,description,address,score,ratings,image
1,The Golden Spoon,"A fine dining experience with a menu that changes daily based on the freshest ingredients available.",123 Main St. Anytown USA,4.5,100,https://picsum.photos/id/30/480/300
2,La Piazza,"Authentic Italian cuisine in a cozy atmosphere with outdoor seating available.",456 Oak Ave. Anytown USA,4.2,80,https://picsum.photos/id/42/480/300
3,The Sizzling Skillet,"A family-friendly restaurant with a wide variety of dishes. including vegetarian and gluten-free options.",789 Elm St. Anytown USA,4.8,120,https://picsum.photos/id/163/480/300
4,The Hungry Bear,"A rustic cabin-style restaurant serving hearty portions of comfort food.",101 Forest Rd. Anytown USA,4.0,60,https://picsum.photos/id/192/480/300
5,The Spice Route,"A fusion restaurant that combines the flavors of India. Thailand. and China.",246 Main St. Anytown USA,4.6,90,https://picsum.photos/id/195/480/300
6,The Catch of the Day,"A seafood restaurant with a focus on locally-sourced. sustainable ingredients.",369 Beach Blvd. Anytown USA,4.3,70,https://picsum.photos/id/225/480/300
7,The Garden Cafe,"A vegetarian restaurant with a beautiful outdoor garden seating area.",753 Maple St. Anytown USA,4.9,150,https://picsum.photos/id/292/480/300
8,The Burger Joint,"A classic American diner with a wide variety of burgers. fries. and milkshakes.",852 Oak Ave. Anytown USA,3.9,50,https://picsum.photos/id/326/480/300
9,The Cozy Corner,"A small cafe with a warm and inviting atmosphere. serving breakfast and lunch dishes.",963 Main St. Anytown USA,4.7,110,https://picsum.photos/id/365/480/300
10,The Steakhouse,"A high-end restaurant specializing in premium cuts of beef and fine wines.",1479 Elm St. Anytown USA,4.1,75,https://picsum.photos/id/395/480/300
11,The Taco Truck,"A casual Mexican restaurant serving authentic street tacos.",753 Main St. Anytown USA,4.4,65,https://picsum.photos/id/429/480/300
12,The Ice Cream Parlor,"A family-friendly restaurant with a wide variety of ice cream flavors.",852 Oak Ave. Anytown USA,4.9,150,https://picsum.photos/id/431/480/300
```

Then, to access this data from our app, go to `File > Share > Publish to the web`, publish, and copy the link it gives us to access the data in `.csv` format.

> [!TIP]
> If you know that the fields contain `,` in their columns, you could use the `.tsv` format instead of `.csv`, as it uses `\t` instead of `,` as a separator, which is less common.

![Share to the web](./images/share-web-0.jpg)
![Share to the web](./images/share-web-1.jpg)

Once we have the link, let's go to our `api.ts` and change our `list` method to use the Google Sheets data.

```ts
const api = {
  list: async (): Promise<Restaurant[]> => {
    // Get the information from Google Sheets in text format and split it by lines, skipping the first line because it is the header
    const [, ...data] = await fetch('...').then(res => res.text()).then(text => text.split('\n'))

    // Convert each line into a Restaurant object, make sure the fields do not contain `,`
    const restaurants: Restaurant[] = data.map((row) => {
      const [id, name, description, address, score, ratings, image] = row.trim().split(',')
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

    // Return it
    return restaurants;
  },
  ...
}
```

Done! Now, upon reloading the page, we should see the data from Google Sheets. Keep in mind that Google Sheets might take a few seconds to reflect the changes, so if you don't see the updated data, try <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>R</kbd> (<kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>R</kbd> if you use Mac).

> [!IMPORTANT]
> Make sure the `fetch` method works correctly on the `/[id]` route.

## Compiling Our Application

Now that we have a more or less complete application, let's compile it and run it locally to see more accurately how well it would work in a production environment. To do this, terminate our server command (<kbd>ctrl</kbd> + <kbd>c</kbd> or <kbd>cmd</kbd> + <kbd>c</kbd> on Mac) and execute the following commands:

```bash
npm run build
npm start
```

After a few seconds, we will see something like this:

![Build output](./images/build-output.jpg)

If we go to `http://localhost:3000`, we should see our application running. And it works! But... If we go to the `/` route, the loading component is not displayed. Everything works, as if by magic, but why? Before, let's try something. Let's go to our Google Sheets, update a title, return to our app, and reload with <kbd>ctrl</kbd> + <kbd>f5</kbd>.

Hmm... It doesn't work.

Let's look at the image above again:

![Build output](./images/build-output.jpg)

We can see that the `/` route has a `○` icon (which the bottom tells us means static), while our `/[id]` route has a `ƒ` icon (which the bottom tells us means `Dynamic`).

> [!TIP]
> In some cases, after making modifications, changes may not be reflected immediately after running a build. To avoid this behavior, it is recommended to delete the `.next` folder before generating a new build, thus ensuring that the process runs from scratch.

## Rendering Strategies

In Next.js, there are three main rendering strategies: static, dynamic, and streaming.

### Static Rendering (Default)

With static rendering, our routes are rendered at build time. This allows the data to be available from a user's first visit. This data is persisted over time, and a user's subsequent visits will not impact our data source. This allows us to have an application with a very fast loading time and low resource consumption.

Static rendering is very useful for pages that do not change frequently or do not include information coming from the request.

Our `/` route had static rendering by default, but why didn't our `/[id]` route? Well, because Next.js doesn't know what the `id`s of our restaurants are, therefore, it cannot render them at build time. However, if in our `/[id]/page.tsx` page we define a [`generateStaticParams`](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) function that returns the ids we want to generate, it will generate those ids statically at build time:

```jsx
export async function generateStaticParams() {
  const restaurants = await api.list();
 
  return restaurants.map((restaurant) => ({
    id: restaurant.id,
  }));
}
```

> [!TIP]
> We can also export a `dynamicParams` variable as `false` on our page if we want it to return a 404 for any route not defined in `generateStaticParams`.

### Dynamic Rendering

With dynamic rendering, our routes are rendered every time a user accesses them. Dynamic rendering is useful when a route must use information coming from the request (such as cookies, headers, search params, etc.) or when the information changes very frequently.

To opt for a dynamic rendered route, we can set cache configurations at the `fetch`, route/segment level, or by using dynamic functions. We will talk about this in the next section.

### Streaming

Streaming is a data transfer technique that allows us to divide the content into smaller chunks and send them to the client as they become available. This prevents blocking processes (like data fetching) from stopping the user from seeing anything until everything is available.

To enable streaming, it is enough to have a Suspense Boundary, by defining a `loading.tsx` file or manually mounting a Suspense component in a Server Component. Now our route is divided into parts, every time an upper Suspense Boundary finishes processing, it will send its content to the user, allowing the user to see the content as it becomes available.

> [!NOTE]
> We already used the 3 rendering methods. Static: Our home page, dynamic: Our detail page before adding `loading.tsx`, streaming: Our detail page after adding `loading.tsx` and before adding `generateStaticParams`.

**Question**: What type of rendering are we using on our home page and detail page now?

## Route Handlers

We will have heard of the MERN stack (MongoDB, Express, React, Node.js) or other similar ones. If we think of Next.js: We have a Node.js server that can consume data from a DB and return a UI using React components. But what can we do if we need an endpoint, a `/api/restaurants` for example, to consume data from a mobile application?

We have [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) available through the use of the special file `route.ts`. We can export functions with the names of the usual HTTP methods, and they will run when the route receives a request with the same method. For example, if we create a file `src/app/api/restaurants/route.ts` with the following content:

```ts
import type {NextRequest} from "next/server";

import api from "@/api";

export async function GET(request: NextRequest) {
  const restaurants = await api.list();

  return Response.json(restaurants);
}
```

In this way, when we make a `GET` request to `/api/restaurants`, the `GET` function will execute and return the list of restaurants.

> [!TIP]
> We can export multiple functions in the same file and they will execute according to the request method.

## Caching

When working with React applications in Vite, Create React App, or similar, we generally deal with a single cache, the browser cache. In Next.js, we have many different types of cache:


| Mechanism                    | What                             | Where    | Purpose                                                        | Duration                                      |
| ---------------------------- | -------------------------------- | -------- | -------------------------------------------------------------- | --------------------------------------------- |
| Request Memoization          | Function return values           | Server   | Reuse data in a React component tree                           | Request duration                              |
| Data Cache                   | Data                             | Server   | Store data between user requests and deployments               | Persistent (can be revalidated)               |
| Full Route Cache             | HTML and RSC payload             | Server   | Reduce rendering cost and improve performance                  | Persistent (can be revalidated)               |
| Router Cache                 | RSC payload                      | Client   | Reduce requests to the server during navigation                | User session or time-based                    |

Next.js, by default, will try to cache as much as possible to improve performance and reduce costs. When we have a dynamic segment but a data request still has relevant cache, instead of going to the source, Next.js will try to get it from the data cache.

The cache behavior will depend on whether your route has static or dynamic rendering, whether the data is cached or not, or if a request is part of an initial visit or a subsequent navigation. This may seem a bit overwhelming, but with time and practice, we will see that the benefits are many.

> [!NOTE]
> Knowing this about caching helps to understand how Next.js works, but it is not essential content to be productive in Next.js.

### Cache Revalidation Configurations

We don't always want 100% static or 100% dynamic content, which is why we have several ways to stipulate how we want the cache to be handled.

#### `cache: "force-cache"` (Default)

If we look at the `list` method in our `api.ts`, we see that it has the `cache` property defined as `force-cache`. This tells Next.js that every time a route needs to fetch data from `list`, it should use the data cache.

```ts
const [, ...data] = await fetch('...', { cache: 'force-cache' }).then(res => res.text()).then(text => text.split('\n'))
```

#### `cache: "no-store"`

Replace the property `cache: 'force-cache'` with `cache: 'no-store'` in our `api.ts` so that the `list` method does not use the data cache.

```ts
const [, ...data] = await fetch('...', { cache: 'no-store' }).then(res => res.text()).then(text => text.split('\n'))
```

This will tell Next.js that every time a route needs to fetch data from `list`, it should not use the data cache. To test if it worked, stop the server and run again:

```bash
npm run build
npm start
```

> [!NOTE]
> `no-store` is the default value for `cache` in the `canary` version of Next.js and will be the default value in the future.

![Build output](./images/build-output.jpg)

Now it should not only work, but we can also see in the build detail that the `/` route is marked as `Dynamic`. In this case, we know that our restaurants are not going to change frequently, so it is not necessary for them to be dynamic, let's change the `cache` back from `no-store` to `force-cache`.

> [!IMPORTANT]
> End the process and run the development server again with `npm run dev`.

#### `revalidate: number`

If we do not want every request to bring new information every time, but rather want it to "revalidate" that information every so often, we can define the `revalidate` property in our fetches as follows:

```ts
const [, ...data] = await fetch('...', { next: { revalidate: 100 } }).then(res => res.text()).then(text => text.split('\n'))```

This will make that after 100 seconds of fetching the data, the next time a user enters the route, cached data will be served to them and, in the background, new data will be fetched. This data will overwrite the cache, and the next time a user enters the route, the new data will be served to them. This strategy is known as `stale-while-revalidate`, and defining it for a certain time is known as `time-based revalidation`.

#### Route Segment Configuration

Routes can export configuration constants to define certain behaviors, including revalidation and rendering strategy. We could do the following in our `src/app/page.tsx`:

```tsx
export const dynamic = 'force-static' // default: auto
export const revalidate = 100 // default: false
```

- `dynamic`: Changes the rendering strategy of a route to be static or dynamic.
- `revalidate`: Defines the default revalidation time for a route.

In this way, we ensure that our `/` route is static and that it fetches new data every 100 seconds.

> [!NOTE]
> There are many other configurations you can see [here](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config).

#### Dynamic Functions

There are also functions that are called [dynamic functions](https://nextjs.org/docs/app/guides/caching#dynamic-apis). These functions depend on request information, such as [`cookies`](https://nextjs.org/docs/app/api-reference/functions/cookies), [`headers`](https://nextjs.org/docs/app/api-reference/functions/headers), [`useSearchParams`](https://nextjs.org/docs/app/api-reference/functions/use-search-params) and [`searchParams`](https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional). By using any of these functions in our segments (or functions called within our segments), the route will opt for dynamic rendering.

> [!TIP]
> The default rendering of a page is `auto`. If we know that our page must be static or dynamic, I prefer to define it explicitly. If it is static and we want to use `headers` or `cookies`, the results will come back empty. If we want it to be dynamic, we define `dynamic: "force-dynamic"` and we know it will always be dynamic.

### Manual Revalidation

Time-based revalidation is useful, but it is not suitable for all cases. In some situations, we have data that doesn't change frequently, but when it does change, we want it to update immediately. For example, a product in a virtual store that changed its price after 15 days and we want users to see the new price immediately. To achieve this, we can use two server-side methods: [`revalidatePath`](https://nextjs.org/docs/app/api-reference/functions/revalidatePath) and [`revalidateTag`](https://nextjs.org/docs/app/api-reference/functions/revalidateTag).

#### `revalidatePath`

This method allows us to revalidate the content of a particular route, such as our `/` route, if we know we have added new restaurants to the database. Since our application does not have a form to add new restaurants or modify existing ones, we are going to create a utility API route so that, when called, the `/` route is revalidated.

We create a file `src/app/api/revalidate/route.ts` with the following content:

```typescript
import type {NextRequest} from "next/server";

import {revalidatePath} from "next/cache";

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path") ?? "/";

  revalidatePath(path);

  return Response.json({success: true});
}
```
> [!TIP]
> We can send a `path` through `searchParams` so our utility endpoint is more flexible.

Now we can remove all `revalidate`, `dynamic`, and anything that makes our `/` route dynamic. Then, we recompile and run our application again. If we go to `http://localhost:3000`, we should see our restaurants. Then, we modify one in the database, make a `GET` request manually to `http://localhost:3000/api/revalidate`, and return to `http://localhost:3000`. We should see the updated data.

It is a good practice to protect our API routes with a secret key to prevent malicious users from executing these methods.

> [!IMPORTANT]
> Define an environment variable `REVALIDATE_SECRET` and use it in our API route to execute it only when a `secret` parameter with the correct value is sent to us. You can use the official Next.js documentation to see how to use [environment variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables).

#### `revalidateTag`

It may happen that we modify data that affects several routes at the same time, and as applications grow, it is very difficult to know which routes are affected by a change. To address this, we can use `revalidateTag`, which allows us to revalidate all routes that have a particular tag.

We add a `restaurants` tag to our two calls in `api.ts`, so that when we revalidate the `restaurants` tag, the content will be revalidated for both `/` and each `/[id]`.

```typescript
const [, ...data] = await fetch('...', { next: { tags: ['restaurants'] } }).then(res => res.text()).then(text => text.split('\n'));
```

Now, we update our utility API route to use `revalidateTag`:

```typescript
import type {NextRequest} from "next/server";

import {revalidateTag} from "next/cache";

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag") ?? "restaurants";

  revalidateTag(tag);

  return Response.json({success: true});
}
```
> [!TIP]
> We can send a `tag` through `searchParams` so our utility endpoint is more flexible.

## URL Parameters

Managing the state of our application in the URL is a good practice; it allows us to share links, return to a particular page, and more. It also allows us to delegate route handling to the router and continue using Server Components despite having interactivity in our application, as changing the route makes another request.

We create a `src/app/components/SearchBox.tsx` component that contains an input field inside a form. When submitting the form, we update the URL with the field value and let Next.js do the rest. We add the following content:

```tsx
"use client";

import Form from "next/form";
import {useRouter, useSearchParams} from "next/navigation";

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // Prevent the page from refreshing when submitting the form
    event.preventDefault();

    // Get the form data
    const formData = new FormData(event.currentTarget);

    // Get the input value
    const query = formData.get("query") as string;

    // Redirect to the index with a query
    router.push(`/?q=${query}`);
  }

  return (
    <Form className="mb-4 inline-flex gap-2" onSubmit={handleSubmit}>
      {/* Initialize the input to contain the current query value */}
      <input className="px-2" defaultValue={searchParams.get("q") || ""} name="query" />
      <button className="bg-white/20 p-2" type="submit">
        Search
      </button>
    </Form>
  );
}
```

> [!NOTE]
> The [`Form` component from Next.js](https://nextjs.org/docs/app/api-reference/components/form) extends the HTML `<form>` element, providing advantages such as prefetching of loading UIs, client-side navigations, and progressive enhancement.

Now, we add the search box in our `src/app/page.tsx` and test that it works.

```tsx
...

import SearchBox from "./components/SearchBox";

export default async function HomePage() {
  const restaurants = await api.list();

  return (
    <section>
      <SearchBox />
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        ...
  )
```

Good! When submitting the form, it redirects correctly. Now we have to make the search work. For that, we modify our `api.ts` to have a `search` method that receives a `query` and filters the restaurants by name or description:

```typescript
const api = {
  ...,
  search: async (query: string = ""): Promise<Restaurant[]> => {
    // Get the restaurants
    const results = await api.list();

    // Filter them by name
    return results.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(query.toLowerCase()),
    );
  },
}
```

Since we are fetching the content in `.csv` from Google Sheets, we cannot do the filtering in the API, and we must fetch all the results and filter them on the server. This is not optimal for a real application, but since the `fetch` will always be the same, we will benefit from the Next.js Data Cache instead of downloading a new `.csv` on every search.

Then, we pass `searchParams.q` (all `page`s receive the `searchParams` prop) to `api.search` instead of `api.list` in our `src/app/page.tsx`:

```tsx
export default async function Home({searchParams}: {searchParams: Promise<{q: string}>}) {
  const {q} = await searchParams;
  const restaurants = await api.search(q);

  ...
}
```

Using `searchParams` in a `page` makes the segment dynamic, as it needs to run on every request to get the correct values.

Good! Our search works correctly.

> [!IMPORTANT]
> If a user searches for something that doesn't exist, nothing is displayed. Make sure to show a message when there are no results as a task.

## Route Grouping

This is a personal preference, but now we have a `components` folder inside the `app` directory, which has only one file that is relevant to a single page (`/app/page.tsx`). I don't like it being at the `app` level because it's not something shared among all pages. We could move the `components` folder outside of `app`, but the same thing would happen. Fortunately, in App Router, we can [group routes](https://nextjs.org/docs/app/building-your-application/routing/route-groups) and files as follows:

```bash
└── app/
    ├── globals.css
    ├── layout.tsx
    ├── loading.tsx
    ├── error.tsx
    ├── api/
    │   └── route.ts
    ├── [id]/
    │   └── page.tsx
    └── (index)
        ├── components/
        │   └── SearchBox.tsx
        └── page.tsx
```

> [!NOTE]
> `(index)` is just a name; it can be named whatever you want.

By creating a folder wrapped in `(parentheses)`, we can not only organize our files better but also define different `layout` / `loading` / `error` for groups of routes that are at the same level (or even have nested layouts). Now, our `components` folder is placed as close to where it is relevant as possible. Don't forget to update the imports so our application continues to work.

## Server Actions

Now that I think about it, we might not need a Client Component or a search component. We could use a Server Action directly in `src/app/page.tsx`.

[Server Actions](https://nextjs.org/docs/app/api-reference/functions/server-actions) allow us to execute server-side code when the user submits a form. They give us access to the data included in that form, so we could use them to perform the search. Let's go to `src/app/page.tsx` and replace our search component with the following:

```tsx
import { redirect } from "next/navigation";

export default async function Home({searchParams}: {searchParams: Promise<{q?: string}>}) {
  const {q} = await searchParams;
  const restaurants = await api.search(q);

  async function searchAction(formData: FormData) {
    'use server'
    const query = formData.get('query') as string
    redirect(`/?q=${query}`);
  }

  return (
    <section>
      <form action={searchAction} className="inline-flex gap-2 mb-4">
        <input defaultValue={q || ''} className="px-2" name="query" />
        <button type="submit" className="p-2 bg-white/20">Search</button>
      </form>
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        ...
```

Server Actions require us to specify the `'use server'` directive in the function of our action (or at the top of the file if we are going to have a file with many actions). Then, we pass this function to the `action` property of our form. When the form is submitted, the `searchAction` function will be executed, and it will redirect to the `/` route with the value of the `q` field as a query string.

> [!TIP]
> We can use server actions as asynchronous functions, not just in form submissions. We can think of them as "route handlers" but using functions instead of `fetch`.

## Saving to Favorites (localStorage)

We are going to implement the functionality to save to favorites. For that, we are going to go to our `RestaurantCard.tsx` component (or whatever you named it in previous exercises). We will add a heart button that, when clicked, will save the restaurant's ID to `localStorage`.

```tsx
'use client'

import Link from "next/link";

export default function RestaurantCard({restaurant}: {restaurant: {
  id: string;
  name: string;
  image: string;
  description: string;
  score: number;
  ratings: number;
}}) {
  const isFavourite = window.localStorage.getItem('favorites')?.includes(restaurant.id)

  return (
    <article>
      <img
        alt={restaurant.name}
        className="mb-3 h-[300px] w-full object-cover"
        src={restaurant.image}
      />
      <h2 className="inline-flex gap-2 text-lg font-bold items-center">
        <Link href={`/${restaurant.id}`}>
          <span>{restaurant.name}</span>
        </Link>
        <small className="inline-flex gap-1">
          <span>⭐</span>
          <span>{restaurant.score}</span>
          <span className="font-normal opacity-75">({restaurant.ratings})</span>
        </small>
        <button type="button" className={`text-red-500 text-xl ${isFavourite ? 'opacity-100' : 'opacity-20'}`}>♥</button>
      </h2>
      <p className="opacity-90">{restaurant.description}</p>
    </article>
  );
}
```

Our component will be a Client Component since we need to be on the client to access `localStorage`, which is a browser API. However, when we render the component, we see the following error:

![](./images/window-undefined.jpg)

### Pre-rendering

In Next.js, all components are pre-rendered on the server by default. This means that a component (even a Client Component) will run on the server and then on the client. This allows us to generate a (non-interactive) preview while the JavaScript is downloading on the client side. Once this happens, our application hydrates and becomes interactive.

However, when running on the server, we do not have access to `window`. Therefore, we must ensure that our component only renders on the client.

### Lazy Loading

In Next.js, we can use the `dynamic` function imported from [`next/dynamic`](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#nextdynamic) to perform lazy loading of our components. This allows us to import a component dynamically, only when necessary. It also allows us to define whether a component should or should not be rendered on the server through the `ssr` property.

We have updated the code of our `RestaurantCard` component to contain two components: one for the information and another for the favorite button. The information component will be pre-rendered on the server, and the favorite button component will be rendered only on the client using `dynamic`.

```tsx
'use client'

import dynamic from "next/dynamic";
import Link from "next/link";

function FavoriteButton({restaurant}: {
  restaurant: {
    id: string;
    name: string;
    image: string;
    description: string;
    score: number;
    ratings: number;
  }
}) {
  const isFavourite = window.localStorage.getItem('favorites')?.includes(restaurant.id)

  return (
    <button type="button" className={`text-red-500 text-xl ${isFavourite ? 'opacity-100' : 'opacity-20'}`}>♥</button>
  )
}

// Create a dynamic component so it is not rendered on the server
const DynamicFavoriteButton = dynamic(async () => FavoriteButton, { ssr: false });

export default function RestaurantCard({ restaurant }: { restaurant: {
  id: string;
  name: string;
  image: string;
  description: string;
  score: number;
  ratings: number;
}}) {
  return (
    <article>
      <img
        alt={restaurant.name}
        className="mb-3 h-[300px] w-full object-cover"
        src={restaurant.image}
      />
      <h2 className="inline-flex gap-2 text-lg font-bold items-center">
        <Link href={`/${restaurant.id}`}>
          <span>{restaurant.name}</span>
        </Link>
        <small className="inline-flex gap-1">
          <span>⭐</span>
          <span>{restaurant.score}</span>
          <span className="font-normal opacity-75">({restaurant.ratings})</span>
        </small>
        <DynamicFavoriteButton restaurant={restaurant} />
      </h2>
      <p className="opacity-90">{restaurant.description}</p>
    </article>
  );
}
```

If we manually update the `favorites` key in `localStorage` to include the ID of one of our restaurants, we should see it correctly.

![](./images/favorites.jpg)

I leave you with some tasks:

- Our `RestaurantCard` component contains two components. The component that contains the information does not need any activity, therefore, it could still be a Server Component. Move the favorite button component to another file and import it.
    - You can turn `RestaurantCard` into a folder and add an `index.tsx` and a `FavoriteButton.tsx` inside it. That way, the components would still be placed as close to where they are relevant as possible. But manage this to your liking.
- Implement the functionality to add and remove favorites in the favorite button. When loading the page, it should show the current state, and clicking the button should show the updated state and persist that state upon reloading the page.
- We are repeating the types for `Restaurant` many times, move the interface to a `src/types.ts` file, export it, and use it where necessary.

## The Future of Next.js

What we saw throughout this course is everything in the stable version of Next.js up to version 15.0.1, but the future of Next.js is full of interesting changes. Although what we are going to see now is not stable, it is good to know it to be prepared for what is coming.

### Partial Prerendering (PPR)

Partial Prerendering is a rendering strategy that combines static and dynamic content in the same route.

- Next.js generates at build time a static "shell" with all non-dynamic content, leaving holes for dynamic content.
- The holes for dynamic content are marked using `Suspense`
- When visiting the page, the user instantly receives the static shell
- Dynamic content is streamed in parallel as it becomes available

For example, on a restaurant detail page:
- **Static shell:** navigation, basic restaurant information, layout
- **Dynamic content:** real-time availability, personalized recommendations, updated prices, etc.

#### Using PPR

To enable PPR you need to enable the `ppr` flag in your `next.config.ts` configuration:

```ts
import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  experimental: {
    ppr: true
  },
}
 
export default nextConfig
```

Now let's create a `GreetUser` component where we will greet the user if the `session` cookie is defined.

```tsx
import {cookies} from "next/headers";

export default async function GreetUser() {
  const store = await cookies();

  return <div>Hello {store.get("session")?.value ?? "guest"}</div>;
}
```

Now on our home page, let's use the `GreetUser` component and wrap it in a `Suspense`:

```tsx
export default async function HomePage({searchParams}: {searchParams: Promise<{q?: string}>}) {
  ...

  return (
    <section>
      <Suspense fallback="...">
        <GreetUser />
      </Suspense>
      ...
```

> [!TIP]
> You can go to the browser devtools and add in the (usually) `application` tab the `session` cookie with the value `test` to test the functionality.

All content outside of `Suspense`, which includes the restaurant information, will be generated statically at build time, while content inside `Suspense` will be generated dynamically at runtime.

> [!NOTE]
> Update the `Suspense` fallback to be more appropriate to the context.

#### Benefits of PPR

- **Better initial performance**: The static shell loads instantly from the CDN
- **Personalized content**: Maintains the ability to show user-specific data
- **Parallel streaming**: Dynamic components load simultaneously, not sequentially
- **Single HTTP request**: Everything is sent in one response, reducing latency

### Cache Components

As you may have realized, caching and its configurations, when things are static, when they are not, how doing certain things makes something that was static now dynamic, is confusing. Cache Components is an experimental flag that allows data fetching operations in the App Router to be excluded from pre-renders unless they are explicitly cached.

To enable it, we will modify our `next.config.ts` to add the `cacheComponents` flag inside `experimental`:

```ts
import type { NextConfig } from "next"
 
const nextConfig: NextConfig = {
  experimental: {
    cacheComponents: true,
  },
}
 
export default nextConfig
```
> [!NOTE]
> When using `cacheComponents`, we will not be able to use segment configurations like `dynamic`, `revalidate` and more, we will have other alternatives to achieve those functionalities.

When Cache Components is enabled, we will see that every time we try to access a page that could be dynamic (that accesses `params`, `searchParams`, `headers`, has a `fetch`, etc.) we will see an error like this:

![](./images/dynamic-error.jpg)

This is because we must be explicit about how we want our route, component, or function to be rendered.

If we want a part of our route to be dynamic, we will wrap what we need to be dynamic with a `Suspense`, as we did for the favorite button:

```tsx
<Suspense fallback="...">
  <GreetUser />
</Suspense>
```

If we wanted our route or parts of it to be static, we will have to define it using the [`use cache`](https://nextjs.org/docs/app/api-reference/directives/use-cache) directive. Let's go to our `src/app/[id]/page.tsx` file and add the `use cache` directive:

```ts
"use cache";

export default async function RestaurantPage({params}: {params: Promise<{id: string}>}) {
  ...
}
```

`use cache` is a directive that defines whether a component, function, or file should be cached. Its use is similar to `use server`, we can use it inside a function or component to mark it as cacheable, or we can define it at the top of a file to indicate that all functions in that file should be cached.

For example, we could define our `api.list` method as cacheable so that all methods that use it will always fetch the updated data:

```ts
const api = {
  ...
  list: async (): Promise<Restaurant[]> => {
    // Define the function as cacheable
    "use cache";

    ...
  },
}
```
> [!NOTE]
> This directive is a Next.js functionality, unlike `use client` or `use server`, which are React directives.

Some important points about `use cache`:

- **Return Values**: Must be serializable so the cache can store and retrieve them correctly.
- **Non-serializable Arguments**: Become references inside the cached function and can only be passed, not inspected or modified. For example, a cached function can receive JSX as a `children` prop and return `<div>{children}</div>`, but it cannot inspect the `children` object.
- **Build-time Caching**: When used at the beginning of a layout or page, the route segment will be pre-rendered, allowing for its subsequent revalidation.
- **Cache Storage**: On the server, cache entries are stored in memory. On the client, the content returned from the server cache is stored in the browser's memory during the session or until revalidated.

#### `cacheLife`

One of the most interesting functionalities of static content is the possibility of revalidating it. By default, `use cache` has a server revalidation period of **15 minutes**. Although this period can be useful for content that does not require frequent updates, we can use the `cacheLife` function to configure the cache's time to live more specifically.

Imagine that we want the cache for our restaurant list to expire once a day:

```ts
import {
  unstable_cacheLife as cacheLife,
} from 'next/cache'

const api = {
  ...
  list: async (): Promise<Restaurant[]> => {
    // Define the function as cacheable
    "use cache";

    // Define that the cache expires once a day
    cacheLife("days");
    ...
  },
}
```

The configuration object has 3 key properties:

- `stale`: Duration (in seconds) during which the client should cache a value without checking with the server.
- `revalidate`: Frequency (in seconds) with which the cache should be updated on the server; stale values can be served while revalidating.
- `expire`: Maximum duration (in seconds) during which a value can remain stale before switching to dynamic rendering. It must be greater than `revalidate`.

Above, we used the `days` profile to define that the cache expires once a day. In Next.js, we have several default profiles we can use:

| **Profile** | **Stale** | **Revalidate** | **Expire**     | **Description**                                                                |
| ----------- | --------- | -------------- | -------------- | ------------------------------------------------------------------------------ |
| `default`   | undefined | 15 minutes     | INFINITE_CACHE | Default profile, suitable for content that doesn't need frequent updates         |
| `seconds`   | undefined | 1 second       | 1 minute       | For fast-changing content requiring real-time updates                            |
| `minutes`   | 5 minutes | 1 minute       | 1 hour         | For content that updates frequently within an hour                               |
| `hours`     | 5 minutes | 1 hour         | 1 day          | For content that updates daily but can be slightly outdated                      |
| `days`      | 5 minutes | 1 day          | 1 week         | For content that updates daily but can be slightly outdated                      |
| `weeks`     | 5 minutes | 1 week         | 1 month        | For content that updates monthly but can be a week old                           |
| `max`       | 5 minutes | 1 month        | INFINITE_CACHE | For very stable content that rarely needs updates                                |

So, for our case above, while the user is on the page navigating, every 5 minutes it will check if the restaurant list is still valid. If it is not, it will be revalidated in the background, and on the next navigation, the user will see the updated data. If no one has visited the web for 1 week, the first user to access it will see the loading screen instead of the outdated data and will be served the updated data.

We can also define custom profiles for our data. We can do it in our `next.config.ts`:

```ts
import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  experimental: {
    cacheComponents: true,
    cacheLife: {
      biweekly: {
        stale: 60 * 60 * 24 * 14, // 14 days
        revalidate: 60 * 60 * 24, // 1 day 
        expire: 60 * 60 * 24 * 14, // 14 days 
      },
    },
  },
  ...
}
 
export default nextConfig
```

And then use this custom profile `biweekly` in your component or function with `cacheLife("biweekly")`. We can also define the configuration inline:

```ts
import {
  unstable_cacheLife as cacheLife,
} from 'next/cache'

const api = {
  ...
  list: async (): Promise<Restaurant[]> => {
    // Define the function as cacheable
    "use cache";

    // Define that the cache expires once a day
    cacheLife({
      stale: 3600, // 1 hour
      revalidate: 900, // 15 minutes
      expire: 86400, // 1 day
    })
    ...
  },
}
```

The `use cache` directive with `cacheLife` can be nested, and if not specified, the nearest parents will inherit its configuration.

#### `cacheTag`

In the previous paradigm, we had `tags` that we could define at the `fetch` level; now we have `cacheTag`, which allows us to tag cached data for on-demand invalidation. By associating tags with cache entries, you can selectively purge or revalidate specific entries without affecting other cached data:

```ts
import {
  unstable_cacheTag as cacheTag,
  unstable_cacheLife as cacheLife,
} from 'next/cache'

const api = {
  ...
  list: async (): Promise<Restaurant[]> => {
    // Define the function as cacheable
    "use cache";

    // Define that the cache expires once a day
    cacheLife("days");
    cacheTag("restaurants")
    ...
  },
}
```

Some important points about `cacheTag`:

- **Idempotent Tags**: Applying the same tag multiple times has no additional effect.
- **Multiple Tags**: You can assign multiple tags to a single cache entry by passing multiple string values: `cacheTag('tag-one', 'tag-two')`
- **Dynamic Tags**: You can create tags based on external data or function responses.

One of the biggest advantages is that we can define tags based on dynamic data. For example, if our home page shows 10 restaurants, we could do:

```ts
export async function Restaurants() {
  'use cache'

  const data = await getRestaurants()

  // Tag with specific restaurant IDs
  cacheTag('restaurants', ...data.map(restaurant => `restaurant-${restaurant.id}`))

  return data
}
```

And if the restaurant with ID `3` changes, we do `revalidateTag('restaurant-3')`, and only the cache will be revalidated if that specific restaurant was present.

> [!NOTE]  
> Update the entire application to use `cacheComponents` and `use cache`.

---

## Congratulations
Well done for making it this far! 🎉 I plan to keep this course updated, so if you liked it, feel free to come back sometime.

Throughout this course, we created a small application together and explored points that I consider essential for developing applications in Next.js. But this does not mark the end of the journey; true improvement and learning come from getting hands-on.

On Tuesdays, I usually stream on Twitch, where I develop real technical challenges from companies live. We also talk about technology, answer questions, and more. If the schedule doesn't work for you, most streams are saved on my YouTube channel.

If you are looking to practice actively, I recommend trying some of the challenges I have created [here](https://github.com/goncy/interview-challenges). And if you have questions you would like to solve in a community, join our [Discord](https://discord.goncy.dev)!

I hope you enjoyed the course. If you find something you think could be improved or notice an error, Pull Requests are welcome! Below you will find my social media and the places where you can make donations if you liked my content.

See you soon! 🚀

---

If you like my content, follow me on [Twitter](https://twitter.gonzalopozzo.com), on [Twitch](https://twitch.gonzalopozzo.com), on [YouTube](https://youtube.gonzalopozzo.com), donate a [Cafecito](https://cafecito.gonzalopozzo.com) or become a [sponsor on github](https://github.com/sponsors/goncy) ✨