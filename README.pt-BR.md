# Curso Introdutório de Next.js 15 com App Router

Bem-vindo(a) ao curso introdutório de Next.js 15 com App Router! Durante este curso, você aprenderá os fundamentos (e não só) do Next.js com App Router para construir uma aplicação web: [Restaurancy](https://restaurancy.goncy.dev), um catálogo de restaurantes.

![](./images/completed.jpg)

O design deste curso é planejado de forma incremental, onde cada lição se baseia na anterior. Recomendamos seguir a ordem das lições para obter o máximo benefício.

É natural que alguns conceitos possam parecer complicados no início ou que nem sempre seja evidente o motivo por trás de certas decisões. Não se preocupe, à medida que você avançar no curso e enfrentar mais exercícios, assim como criar aplicações, estes conceitos se tornarão mais claros e farão mais sentido. Lembre-se que existem várias formas de alcançar os mesmos resultados, então se você tiver ideias diferentes, vá em frente!

Se em algum momento você sentir que o conteúdo do curso não é suficiente para abordar os exercícios ou compreender um tema em particular, não hesite em consultar a documentaço oficial, seja do [Next.js](https://docs.nextjs.org/) ou do [React](https://react.dev/reference/react).

## Vídeo

Se você preferir seguir este curso em formato de vídeo guiado, pode assistir aqui:

[![Curso Introdutório de Next.js com App Router](https://img.youtube.com/vi/s5jPwPZrJhw/maxresdefault.jpg)](https://youtu.be/s5jPwPZrJhw)

> [!WARNING]
> O vídeo não está atualizado com o código deste repositório. Mas ainda é válido para a maioria dos temas.

## Requisitos

Certifique-se de atender aos seguintes requisitos antes de começar o curso:

- Conhecimentos básicos de HTML, CSS e JavaScript.
  - Se você não está familiarizado com HTML, CSS e JavaScript, recomendamos fazer a certificação de [Responsive Web Design](https://www.freecodecamp.org/learn/responsive-web-design) do freeCodeCamp.
- Conhecimentos básicos de React.
  - Caso não tenha experiência em React, sugerimos completar [o curso oficial do React](https://pt-br.react.dev/learn) ou o [React Foundations do Next.js](https://nextjs.org/learn/react-foundations).
- Ter Node.js instalado em seu computador.
- Ter um editor de código de sua preferência.

> [!NOTE]
> Você pode optar por um ambiente online, como [CodeSandbox](https://codesandbox.io), se não desejar ou não puder instalar nada em seu computador.

## Terminologia

Ao longo do curso, utilizaremos alguns termos que é importante que você conheça, embora não seja necessário memorizar:

- **Routing (Roteamento):** Decide, baseado na URL, qual conteúdo mostrar ao usuário.
- **Caching (Cache):** Espaço de armazenamento temporário para guardar dados que serão utilizados no futuro.
- **Rendering (Renderização):** Processo de converter um componente em uma representação visual.
- **Layout (Layout):** Componente que envolve uma (ou várias) páginas.
- **Nested layout/pages/etc (Layouts/páginas/etc. aninhados):** Por exemplo, um layout que está dentro de outro layout.
- **Tree (Árvore):** Representação de uma estrutura hierárquica, componentes que contêm outros.
- **Subtree (Subárvore):** Uma árvore aninhada dentro de outra árvore.
- **Leaf/Leaves (Folha/Folhas):** Componente sem filhos.
- **URL segment (Segmento de URL):** Por exemplo, na URL `restaurancy.com/restaurante/goncy`, `restaurante` e `goncy` são segmentos de URL.
- **URL path (Caminho de URL):** O que segue após o domínio, como `/restaurante/goncy` em `restaurancy.com/restaurante/goncy`.
- **Build (Compilação):** Processo de compilar o código e deixá-lo pronto para ser implantado.
- **Bundle (Pacote):** Arquivo que contém parte ou todo o código da aplicação.
- **Boilerplate (Código base):** Porção de código repetitivo com pouca variação.

## Tarefas

Nosso cliente Goncy é um renomado chef da cidade de Quil-Mez, França. Com um dos paladares mais refinados, ele visita todos os restaurantes em suas proximidades para avaliar sua comida e atendimento. Para isso, nos contratou para desenvolver o Restaurancy, um catálogo dos mais refinados restaurantes em seus arredores. Ele nos deu total liberdade no design e bibliotecas a usar, mas pediu que usássemos Next.js e o App Router porque seu irmão gêmeo Argentino (também chamado Goncy) disse que não era ruim. Algumas das tarefas que Goncy deixou em nosso quadro são:

- Criar uma rota principal que mostre uma lista de restaurantes, incluindo sua foto, nome, descrição, pontuação e quantidade de avaliações.
- Criar uma rota personalizada para cada restaurante que mostre as mesmas informações que a rota principal.
- Poder navegar entre as rotas livremente clicando em links.
- Configurar nossa aplicação para que seja corretamente indexada por motores de busca.
- Ao compartilhar o link de um restaurante por redes sociais, a pré-visualização do link deve conter as informações do restaurante.
- Usar Google Sheets como banco de dados.
- Revalidar os dados dos restaurantes a cada 24 horas.
- Criar um endpoint utilitário que permita revalidar rotas sob demanda.
- Criar uma caixa de busca em nossa rota principal para poder buscar restaurantes por nome.
- Poder compartilhar o link da busca para que outros usuários possam acessar diretamente nossa busca.
- Poder adicionar e remover restaurantes de uma lista de favoritos que é persistida no dispositivo do usuário.

Opcionalmente também:
- Todas as páginas possíveis deveriam ser geradas de maneira estática.
- Caso acessemos uma rota não gerada estaticamente, deveríamos tentar renderizá-la.
- Mostrar estados de carregamento enquanto obtemos a informação de rotas não geradas estaticamente.
- Mostrar uma página de erro se acessarmos uma rota errada ou houver um erro em nossa aplicação.

Goncy nos disse que não tem pressa para desenvolver esta aplicação, então você pode levar o tempo que considerar necessário.

Ele também nos disse que você pode se sentir livre para adicionar as funcionalidades que considerar úteis para a aplicação e ser o mais criativo que quiser com o design.

## Índice

1. [O que é Next.js?](#o-que-é-nextjs)
2. [Criando uma Aplicação com Next.js](#criando-uma-aplicação-com-nextjs)
    1. [Tecnologias no Projeto](#tecnologias-no-projeto)
    2. [Estrutura do Projeto](#estrutura-do-projeto)
3. [Ambientes de Renderização (Servidor e Cliente)](#ambientes-de-renderização-servidor-e-cliente)
    1. [Server Components](#server-components)
    2. [Client Components](#client-components)
    3. [Quando Usar Server Components e Client Components](#quando-usar-server-components-e-client-components)
4. [Mostrando os Restaurantes](#mostrando-os-restaurantes)
5. [Mostrando um Restaurante](#mostrando-um-restaurante)
    1. [Router](#router)
    2. [Rotas Dinâmicas](#rotas-dinâmicas)
    3. [Colocação](#colocação)
6. [Navegação](#navegação)
7. [Metadados](#metadados)
    1. [Objeto `metadata`](#objeto-metadata)
    2. [`generateMetadata`](#generatemetadata)
    3. [Arquivos de Metadados](#arquivos-de-metadados)
8. [Estados de Carregamento](#estados-de-carregamento)
9. [Tratamento de Erros](#tratamento-de-erros)
10. [Usando um Banco de Dados](#usando-um-banco-de-dados)
11. [Compilando Nossa Aplicação](#compilando-nossa-aplicação)
12. [Estratégias de Renderização](#estratégias-de-renderização)
    1. [Renderização Estática](#renderização-estática-por-padrão)
    2. [Renderização Dinâmica](#renderização-dinâmica)
    3. [Streaming](#streaming)
13. [Route Handlers](#route-handlers)
14. [Caching](#caching)
    1. [Configurações de Revalidação de Cache](#configurações-de-revalidação-de-cache)
        1. [cache: "force-cache" (por padrão)](#cache-force-cache-por-padrão)
        2. [cache: "no-store"](#cache-no-store)
        3. [revalidate: `<number>`](#revalidate-number)
        4. [Configuração de Segmento de Rota](#configuração-de-segmento-de-rota)
        5. [Funções Dinâmicas](#funções-dinâmicas)
    2. [Revalidação Manual](#revalidação-manual)
        1. [revalidatePath](#revalidatepath)
        2. [revalidateTag](#revalidatetag)
15. [Parâmetros de URL](#parâmetros-de-url)
16. [Agrupamento de Rotas](#agrupamento-de-rotas)
17. [Server Actions](#server-actions)
18. [Salvando em Favoritos (localStorage)](#salvando-em-favoritos-localstorage)
    1. [Pré-renderização](#pré-renderização)
    2. [Lazy Loading](#lazy-loading)
19. [O futuro do Next.js](#o-futuro-do-nextjs)
    1. [Dynamic IO](#dynamic-io)
        1. [`use cache`](#use-cache)
        2. [`cacheLife`](#cachelife)
        3. [`cacheTag`](#cachetag)

## O que é Next.js?

[Next.js](https://nextjs.org/) é um framework híbrido que opera tanto no servidor quanto no cliente, construído sobre React. Fornece ferramentas e funcionalidades que simplificam o desenvolvimento de aplicações web. Next.js cuida de toda a configuração necessária do React e suas ferramentas para que possamos focar em desenvolver nossa aplicação.

## Criando uma Aplicação com Next.js

Para este projeto, vamos usar um código base que se encontra na pasta `code` deste repositório. Para cloná-lo em seu computador, vamos abrir o terminal e executar o seguinte comando:

```bash
npx degit goncy/nextjs-course/code restaurancy
```

Uma vez completada a execução do comando, será gerada uma pasta chamada `restaurancy` com todos os arquivos necessários para executar a aplicação.

Em seguida, execute os seguintes comandos:

```bash
cd restaurancy
npm install --force
npm run dev
```

> [!WARNING]
> Se você usa `npm`, o `--force` é necessário para que seja instalado corretamente, já que existem conflitos com as versões de algumas dependências de desenvolvimento.

Depois de alguns segundos, você deverá ver uma mensagem como esta:

```bash
  ▲ Next.js <versão do Next.js>
  - Local:  http://localhost:3000
```

Se você abrir o navegador no endereço `http://localhost:3000`, deverá visualizar uma página de boas-vindas similar à seguinte:

![Página de boas-vindas do Next.js](./images/starter.jpg)

> [!TIP]
> Se você quiser criar um projeto Next.js do zero para outros projetos, pode usar o pacote [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Tecnologias no Projeto

Além do Next.js e React, este projeto utiliza [TypeScript](https://www.typescriptlang.org/) para adicionar tipagem e [Tailwind CSS](https://tailwindcss.com/) para gerenciar estilos. Não se preocupe se você não está familiarizado com TypeScript ou Tailwind CSS; você pode optar por não escrever tipos em TypeScript e evitar o uso das classes do Tailwind CSS, substituindo-as pelo método que preferir para gerenciar estilos.

### Estrutura do Projeto

Na raiz do projeto, você encontrará vários arquivos de configuração e outros elementos que podemos ignorar por enquanto. Por ora, vamos nos concentrar na pasta `src` e seu conteúdo.

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

- `globals.css`: Este arquivo contém estilos globais para a aplicação, incluindo os estilos do Tailwind CSS.
- `favicon.ico`: Ícone padrão da aplicação, visível na aba do navegador.
- `layout.tsx`: Este arquivo, específico do Next.js, nos permite definir um wrapper para nossa aplicação ou página. Neste caso, é responsável por estabelecer a estrutura básica da página (html e body), importar estilos globais, e adicionar um cabeçalho, um rodapé e um container para o conteúdo da página. Recebe uma prop `children`, que representa o conteúdo da página que o usuário verá.
- `page.tsx`: Outro arquivo especial do Next.js que nos permite definir uma pgina. Como está na raiz do nosso diretório `app`, será a página que será mostrada ao usuário ao acessar o início (rota `/`).
- `api.ts`: Este arquivo define alguns métodos que utilizaremos ao longo do curso para obter informações sobre restaurantes. Por enquanto, apenas retorna dados de teste, mas mais adiante o utilizaremos para obter dados reais.
- `types.ts`: Este arquivo define uma interface para os restaurantes, que usaremos para tipar os dados que obtemos da API.

Tome um tempo para modificar o conteúdo destes arquivos e observe como isso afeta a aplicação. Enquanto o servidor de desenvolvimento estiver em execução, bastará salvar um arquivo para ver as alterações refletidas na tela. 

## Ambientes de Renderização (Servidor e Cliente)

Existem [dois ambientes](https://nextjs.org/docs/app/building-your-application/rendering#rendering-environments) nos quais as aplicações web com Next.js podem ser renderizadas: o cliente e o servidor.

![](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fclient-and-server-environments.png&w=3840&q=75&dpl=dpl_DzaGxTbCZzXMDg4XPPbArRct6JPH)

O termo `cliente` se refere ao navegador no dispositivo do usuário, que envia uma solicitação ao `servidor` para receber o código da sua aplicação e convertê-lo em uma interface visual para o usuário.

Por outro lado, o termo `servidor` se refere a um computador em um centro de dados que armazena o código da sua aplicação e recebe solicitações dos clientes, fornecendo respostas a essas solicitações. Tudo o que acontece no servidor não é exposto nem visível para o cliente, apenas o que é retornado.

> [!NOTE]
> Enquanto estamos em modo de desenvolvimento, executando `npm run dev`, o servidor é o seu computador.

Podemos visualizar essa transição como um fluxo unidirecional do servidor para o cliente. Uma vez que uma solicitação é completada no servidor e transferida para o cliente, ela não pode retornar ao servidor. Se for necessário voltar ao servidor, é realizada uma nova solicitação, por exemplo, acessando uma nova rota. A linha imaginária que separa o servidor do cliente é conhecida como `network boundary`.

Este conceito pode não ficar completamente claro neste momento, mas fará mais sentido à medida que adquirirmos mais prática.

### Server Components

Por padrão, todos os componentes que usamos na pasta `app` (no App Router) são [React Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components). Os Server Components são componentes do React que são executados exclusivamente no servidor. Estes componentes só são executados quando o usuário acessa uma rota ou segmento e não são executados novamente no cliente. Isso significa que não podem lidar com eventos do usuário, estados locais nem hooks, mas podem acessar diretamente dados do servidor, bancos de dados, variáveis de ambiente privadas e tudo o que pode ser feito no servidor.

No entanto, uma aplicação típica também é composta por componentes dinâmicos e interativos que requerem interações do usuário, eventos e mais. Para estes casos, podemos usar `Client Components`. Os Server Components podem importar e usar Client Components, mas os Client Components não podem importar Server Components. Não se preocupe se isso ainda não fizer muito sentido; veremos como funciona mais adiante.

Podemos utilizar Server Components dentro de outros Server Components de maneira indefinida, mas, no momento em que usamos um Client Component, marcamos nosso `network boundary`.

Se tentarmos usar um hook ou nos inscrevermos em um evento em um Server Component, obteremos um erro.

```jsx
import { useState } from 'react' // 🚨 ReactServerComponentsError 🚨: Você está importando um componente que precisa de useState. Só funciona em um Client Component, mas nenhum dos seus pais está marcado com "use client", então são Server Components por padrão.

export default function Page() {
  return (...)
}
```

Agora, a pergunta chave : por que renderizaríamos algo no servidor? Bem, aqui está uma lista de benefícios ao executar tarefas no servidor:
- Obtenção de dados: Podemos obter nossos dados de um servidor mais próximo da nossa fonte de dados, o que torna a obtenção mais rápida e eficiente.
- Segurança: Ao executar no servidor, podemos manter todas as informações sensíveis, como tokens, credenciais e mais, ocultas do usuário.
- Tamanho do bundle: Muitas tarefas que antes precisávamos realizar no cliente agora podemos fazer no servidor, minimizando a quantidade de código que precisamos enviar ao cliente.
- Renderização inicial: No servidor, podemos gerar HTML e CSS que são enviados ao cliente imediatamente, sem necessidade de esperar que JavaScript seja baixado e executado no cliente.
- SEO: O HTML renderizado pelo servidor pode ser utilizado pelos motores de busca para indexar nossa aplicação.
- Streaming: Podemos enviar conteúdo ao cliente à medida que vai sendo gerado, em vez de esperar que todo o conteúdo seja gerado para enviá-lo ao cliente. Isso permite que o usuário veja o conteúdo mais rapidamente.

### Client Components

Os `Client Components` nos permitem escrever interfaces interativas e dinâmicas que são executadas no cliente. Os Client Components podem usar hooks, estados locais, eventos, APIs do navegador e mais. Podemos pensar nos Client Components como "os componentes habituais que usamos no React em nossas aplicações com Vite ou Create React App". Embora com algumas diferenças, como o fato de serem renderizados uma vez no servidor antes de serem renderizados no cliente.

> [!NOTE]
> Você pode ler mais sobre os client components e como são renderizados [aqui](https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered)

Para marcar um componente como Client Component, devemos adicionar a diretiva `"use client"` no início do arquivo.

```jsx
'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Clique aqui</button>
    </div>
  )
}
```

### Quando Usar Server Components e Client Components

Embora existam exceções para cada um, esta lista resume quando você deveria usar cada um na maioria das vezes.

| O que você precisa fazer?                                                                              | Componente do Servidor | Componente do Cliente |
|-------------------------------------------------------------------------------------------------------|-------------------------|------------------------|
| Acessar recursos do backend (diretamente)                                                              | ✅                      | ⛔                     |
| Manipular informações sensíveis (tokens de acesso, chaves API, etc.)                                   | ✅                      | ⛔                     |
| Manipular dependências grandes / Reduzir JavaScript do lado do cliente                                 | ✅                      | ⛔                     |
| Obter dados                                                                                            | ✅                      | ⌚                     |
| Adicionar interatividade e listeners de eventos (`onClick`, `onChange`, etc.)                          | ⛔                      | ✅                     |
| Utilizar Estado e Efeitos do Ciclo de Vida (`useState`, `useReducer`, `useEffect`, etc.)              | ⛔                      | ✅                     |
| Utilizar APIs exclusivas do navegador                                                                  | ⛔                      | ✅                     |
| Utilizar hooks personalizados que dependem do estado, efeitos ou APIs exclusivas do navegador         | ⛔                      | ✅                     |
| Utilizar [Componentes de Classe do React](https://react.dev/reference/react/Component)                 | ⛔                      | ✅                     |

> [!NOTE]
> Não é errado obter dados de um Client Component, mas se pudermos fazê-lo do servidor e otimizá-lo, melhor. Optamos por obter dados do cliente quando: há interações do usuário que precisam atualizar uma parte dos dados, fazer polling ou quando toda nossa página é estática exceto por um dado, então a mantemos estática e obtemos esse dado do cliente.

## Mostrando os Restaurantes

Agora que já temos um pouco de teoria, vamos ver realmente como usar Server Components em nossa aplicação. Em `api.ts`, encontraremos um objeto `api` com um método `list` que retorna uma `Promise` com um array de `Restaurant`. Vamos ver como podemos utilizar este método em nosso Server Component `page.tsx`:

```jsx
import api from "@/api";

export default async function Home() {
  const restaurants = await api.list();

  console.log(restaurants);

  return (...);
}
```

Ao observar o console (não o do navegador, mas o terminal onde executamos `npm run dev`), veremos uma listagem de `Restaurant`. Como isso é possível? 🤯 Como mencionamos anteriormente, os Server Components não são renderizados novamente. Portanto, podemos converter nosso componente em uma função assíncrona e esperar que a `Promise` seja resolvida com os dados dos restaurantes. Em seguida, utilizamos esses dados para renderizá-los em nossa página.

Vamos iterar sobre `restaurants` para criar uma grade que mostre a imagem, o título, a descrição e a avaliação de cada restaurante.

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

O resultado é o seguinte:
![Listagem de Restaurantes](./images/restaurants-grid.jpg)

Em resumo, aprendemos que, além de serem executados no servidor e aproveitarem todos os benefícios mencionados anteriormente, os Server Components podem utilizar `async/await`. Isso nos ajuda a reduzir o boilerplate e a complexidade de nossa aplicação ao obter dados de maneira eficiente.

**Bônus:** Personalize a grade de restaurantes com seu próprio toque mágico de estilos. Divirta-se explorando e melhorando a apresentação visual!

## Mostrando um Restaurante

Vamos criar uma rota para visualizar cada restaurante individualmente. Antes de mergulharmos no código, vamos dar uma olhada no funcionamento do router do Next.js e entender algumas de suas convenções de arquivos.

### Router

Next.js, com App Router, utiliza um router construído sobre React Server Components que suporta layouts compartilhados, roteamento aninhado, tratamento de estados de carregamento, tratamento de erros e mais. O roteamento do App Router é baseado em arquivos, o que significa que podemos criar rotas e segmentos simplesmente criando arquivos e pastas. Então, quais arquivos e pastas devemos criar? Já conhecemos `layout.tsx` e `page.tsx`, mas como podemos usá-los para criar outras coisas? Vamos ver algumas convenções que vamos utilizar neste curso:

- `layout.tsx`: Envolve o `page.tsx`, permitindo compartilhar um layout entre várias páginas.
- `page.tsx`: Define uma página, recebe parâmetros e parâmetros de busca como props.
- `loading.tsx`: Página de carregamento que é mostrada enquanto a rota está carregando; quando o carregamento termina, a tela de carregamento  substituída pela resposta de `page.tsx`.
- `error.tsx`: Página de erro que é mostrada quando há uma exceção ou erro na execução de uma página ou layout.
- `route.tsx`: Define uma rota de API, é executada no servidor e retorna dados usando um objeto `Response`.

Isso deve ser suficiente por enquanto em termos de arquivos (você pode ver mais [aqui](https://nextjs.org/docs/app/building-your-application/routing#file-conventions)).

### Rotas Dinâmicas
Falamos de arquivos, mas também mencionamos pastas e seu aninhamento. Como criamos uma rota para mostrar um restaurante baseado em seu `id`? A estrutura de pastas e arquivos ficaria assim:

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

Agora, vamos criar a pasta e o arquivo `src/app/[id]/page.tsx` e adicionar o seguinte conteúdo:

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

Ao acessar a rota `/1`, deveríamos ver algo assim:
![Página de um restaurante](./images/restaurant-details.jpg)

Vamos ver como isso aconteceu. Lembramos que os componentes são Server Components por padrão, então fizemos que seja `async` e utilizamos nosso método `api.fetch` para obter os dados do restaurante. Além disso, aprendemos algo novo: o arquivo `page.tsx` recebe como props uma propriedade `params` que contém os parâmetros da rota. Neste caso, como nossa rota é `/[id]`, o parâmetro se chama `id`. [Desestruturamos](https://pt.javascript.info/destructuring-assignment#desestruturacao-de-objetos) `params` para obter o `id` e o usamos para obter os dados do restaurante e renderizá-los na página.

Agora temos um pequeno problema: acabamos de repetir todo o código do cartão do restaurante.

> [!IMPORTANT]
> Crie um componente `RestaurantCard` para o cartão do restaurante e reutilize-o em `page.tsx` e `[id]/page.tsx`.

Mas... Onde deveriam ir os componentes que não são páginas, layouts ou arquivos especiais?

### Colocação

Embora o router do Next.js seja baseado em arquivos, apenas os arquivos com nomes especiais se tornam rotas de nossa aplicação. Portanto, poderíamos criar uma pasta `components` dentro de `app` (ou aninhada onde precisarmos) sem nenhum problema.

![Estrutura de pastas](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fproject-organization-colocation.png&w=3840&q=75&dpl=dpl_DzaGxTbCZzXMDg4XPPbArRct6JPH)

Agora sim, vá e crie esse componente. Depois, reutilize-o em `page.tsx` e `[id]/page.tsx`.

## Navegação

No Next.js, temos o componente `Link` que nos permite navegar entre páginas de nossa aplicação. É usado de maneira muito similar à tag `<a>` e pode ser importado de `next/link`. Vamos adicionar à nossa grade de restaurantes um link para poder navegar até a página de cada restaurante.

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
> Adicione à página de detalhes do restaurante um link para voltar à página inicial e outro link ao cabeçalho no layout para que, ao clicar no logo, nos leve ao início.

## Metadados

Os metadados são informações adicionais para indicar ao navegador e motores de busca o conteúdo de nossa página. Desempenham um papel crucial no SEO (Search Engine Optimization) e na acessibilidade. No Next.js, podemos definir metadados através de configuração ou através de arquivos.

### Objeto `metadata`

Podemos definir e exportar uma constante `metadata` em `layout.tsx` ou em `page.tsx` para definir metadados estáticos. Em `layout.tsx`, vamos modificar a propriedade `title` do objeto `metadata` para que fique assim:

```jsx
export const metadata: Metadata = {
  title: 'Restaurancy - Hello World',
  description: 'Os melhores restaurantes do mundo',
  keywords: ['restaurante', 'comida', 'comer', 'jantar', 'almoço'],
}
```

![](./images/title.jpg)

Agora deveríamos ver o título de nossa página atualizado.

![](./images/metadata-1.jpg)

Se abrirmos as ferramentas de desenvolvimento, veremos que dentro da tag `head` podemos ver os metadados que definimos.

> [!NOTE]
> Você pode encontrar mais informações sobre as propriedades disponíveis no `metadata object` [aqui](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-object).

### `generateMetadata`

Se precisarmos de informações da requisição para gerar metadados (por exemplo, o nome de um restaurante), podemos usar a função `generateMetadata` e retornar um objeto com todos os metadados de nossa página. Em `src/app/[id]/page.tsx`, vamos criar uma função `generateMetadata` da seguinte maneira:

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

Ao entrar em algum de nossos restaurantes, veremos o título da página atualizado.

### Arquivos de metadados

Podemos criar [arquivos especiais de metadados](https://nextjs.org/docs/app/api-reference/file-conventions/metadata) dentro de `src/app` ou dentro de nossas rotas. Os arquivos de metadados podem ser arquivos estáticos (como `.jpg`, `.png`, `.txt`) ou podem ser arquivos dinâmicos (como `.tsx`). Esta última nos permite gerar metadados, como [imagens de Open Graph personalizadas baseadas em informações da requisição](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image).

> [!IMPORTANT]
> Defina alguns metadados a nível aplicação, como title, description, keywords, etc. E mostre uma imagem de Open Graph personalizada na página de detalhes de cada restaurante.

## Estados de Carregamento

Nossas páginas carregam bastante rápido (estamos simulando um atraso de 750 ms). Vamos em `api.ts` e mudemos esse `750` para `7500`. Se recarregarmos, veremos que a página leva 7.5 segundos para carregar. O problema é que enquanto a página carrega, o usuário não vê nada e não sabe se a página está funcionando ou não, se sua internet está ruim ou o que está acontecendo.

No Next.js, podemos definir um arquivo `loading.tsx`, o qual é construído sobre [React Suspense](https://react.dev/reference/react/Suspense). Enquanto nossa página estiver suspensa (enquanto houver operações bloqueantes como uma requisição em andamento em um Server Component), será mostrado o conteúdo de `loading.tsx`. Uma vez que essas operações terminem, o conteúdo de `loading.tsx` será substituído pelo conteúdo de `page.tsx`. Isso nos permite não só mostrar ao usuário que "algo está carregando", mas também nos permite enviar todas as partes de nossa aplicação que não dependam dessas operações bloqueantes, como o cabeçalho, rodapé ou os componentes que já terminaram suas operações.

Vamos criar o arquivo `src/app/loading.tsx` e adicionar o seguinte conteúdo:

```jsx
export default function Loading() {
  return (
    <div>Carregando...</div>
  );
}
```

Agora, ao recarregar a página, veremos que enquanto está carregando, é mostrado o texto "Carregando..." e uma vez que termina de carregar, é substituído pelo conteúdo de `page.tsx`.

Mas também notamos que se formos à rota `/1`, também é mostrado o texto "Carregando...". Por quê? Se o `loading.tsx` está definido na raiz do nosso projeto.

Quando uma parte de nossa aplicação é suspensa, ela procura para cima o Suspense Boundary mais próximo e o utiliza. Neste caso, por não haver nenhum em `/[id]`, ele sobe e encontra o definido na raiz de nossa aplicação.

> [!NOTE]
> Se quiséssemos, poderíamos definir um novo `loading.tsx` dentro de `[id]` e seria usado esse em vez do da raiz, mas por enquanto estamos bem com este.

## Tratamento de Erros

Até agora, nossa aplicaço usa dados de teste, então é pouco provável que ocorram erros. No entanto, pode ser que alguém tente acessar uma página que não existe ou que simplesmente queiramos estar preparados para o dia de amanhã.

Vamos criar o arquivo `src/app/error.tsx` e adicionar o seguinte conteúdo:

```jsx
'use client'

export default function ErrorPage({ error }: { error: Error }) {
  console.error(error);

  return (
    <div>Algo deu errado, tente novamente!</div>
  );
}
```

Se tentarmos entrar em uma rota inexistente, como `/123`, veremos uma janela de erro (em desenvolvimento) e o conteúdo de nossa página de erro corretamente. Um detalhe é que o arquivo `error.tsx` sempre deve ser um Client Component, já que recebe por props uma função `reset` que podemos chamar para re-renderizar nossa página.

O arquivo `error.tsx` funciona com um React Error Boundary cujo comportamento é similar ao Suspense Boundary, procurando para cima o Error Boundary mais próximo. Portanto, se algo falhar em `/1` ou em `/`, será usado o mesmo `error.tsx`.

> [!NOTE]
> Se não definirmos um arquivo `error.tsx`, será usado o que vem por padrão no Next.js.

## Usando um Banco de Dados

Vamos transferir nossos dados de teste para um banco de dados para poder modificá-los quando quisermos. Neste caso, usaremos o Google Sheets, já que é fácil, gratuito e não requer configuraço. Se você não gostar, pode usar o banco de dados que preferir. Para isso, vamos acessar [https://sheets.new](https://sheets.new) e criar uma nova planilha com os mesmos dados que nossos dados de teste.

Você pode usar ChatGPT para converter os dados de teste. De qualquer forma, aqui estão os dados (copie-os, cole na primeira célula do Google Sheets e selecione no Menu: `Dados > dividir texto em colunas`):

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

Em seguida, para acessar esses dados em nossa aplicação, vamos em `Arquivo > Compartilhar > Publicar na web`, publiquemos e copiemos o link que nos é fornecido para acessar os dados em formato `.csv`.

> [!TIP]
> Se você sabe que os campos contêm `,` em suas colunas, poderia usar o formato `.tsv` em vez de `.csv`, já que usa `\t` em vez de `,` como separador, o que é menos frequente.

![Compartilhar na web](./images/share-web-0.jpg)
![Compartilhar na web](./images/share-web-1.jpg)

Uma vez que tenhamos o link, vamos ao nosso `api.ts` e mudemos nosso método `list` para que use os dados do Google Sheets.

```ts
const api = {
  list: async (): Promise<Restaurant[]> => {
    // Obtemos a informação do Google Sheets em formato texto e a dividimos por linhas, pulamos a primeira linha porque é o cabeçalho
    const [, ...data] = await fetch('...').then(res => res.text()).then(text => text.split('\n'))

    // Convertemos cada linha em um objeto Restaurant, certifique-se de que os campos não possuam `,`
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

    // O retornamos
    return restaurants;
  },
  ...
}
```

Pronto! Agora, ao recarregar a página, deveríamos ver os dados do Google Sheets. Leve em conta que o Google Sheets pode demorar alguns segundos para refletir as alterações, então se você não vir os dados atualizados, tente com <kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>R</kbd> (<kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>R</kbd> se usar Mac).

> [!IMPORTANT]
> Certifique-se de que o método `fetch` funcione corretamente na rota `/[id]`.

## Compilando Nossa Aplicação

Agora que temos uma aplicação mais ou menos completa, vamos compilá-la e executá-la localmente para ver mais precisamente como funcionaria em um ambiente de produção. Para isso, vamos encerrar o comando do nosso servidor (<kbd>ctrl</kbd> + <kbd>c</kbd> ou <kbd>cmd</kbd> + <kbd>c</kbd> no Mac) de desenvolvimento e executar os seguintes comandos:

```bash
npm run build
npm start
```

Depois de alguns segundos, veremos algo como isto:

![Saída da compilação](./images/build-output.jpg)

Se acessarmos `http://localhost:3000`, deveríamos ver nossa aplicação funcionando. E funciona! Mas... Se formos à rota `/`, não vemos o componente de carregamento. Tudo funciona, como por mágica, mas por quê? Antes, vamos tentar algo. Vamos à nossa planilha do Google Sheets, atualizemos um título, voltemos à nossa aplicação e recarreguemos com <kbd>ctrl</kbd> + <kbd>f5</kbd>.

Hmm... Não funciona.

Vamos ver novamente a imagem de mais acima:

![Saída da compilação](./images/build-output.jpg)

Podemos ver que a rota `/` tem um ícone de `○` (abaixo nos diz que significa estático), enquanto nossa rota `/[id]` tem um ícone de `ƒ` (abaixo nos diz que significa `Dynamic`).

## Estratégias de Renderização

No Next.js, existem três estratégias principais de renderização: estática, dinâmica e streaming.

### Renderização Estática (por padrão)

Com a renderização estática, nossas rotas são renderizadas em tempo de compilação. Isso permite que os dados estejam disponíveis desde a primeira visita de um usuário. Esses dados persistem ao longo do tempo, e as visitas subsequentes de um usuário não impactarão nossa origem de dados. Isso nos permite ter uma aplicação com um tempo de carregamento muito rápido e um baixo consumo de recursos.

A renderização estática é muito útil para páginas que não mudam com frequência ou não incluem informações provenientes da requisição.

Nossa rota `/` teve uma renderização estática por padrão, mas por que nossa rota `/[id]` não? Bem, porque o Next.js não sabe quais são os `id`s de nossos restaurantes, portanto, não pode renderizá-los em tempo de compilação. No entanto, se em nossa página `/[id]/page.tsx` definirmos uma função [`generateStaticParams`](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) que retorne os ids que queremos gerar, ele gerará esses ids em tempo de compilação de maneira estática:

```jsx
export async function generateStaticParams() {
  const restaurants = await api.list();
 
  return restaurants.map((restaurant) => ({
    id: restaurant.id,
  }));
}
```

> [!TIP]
> Também podemos exportar uma variável `dynamicParams` como `false` em nossa página se quisermos que retorne um 404 para qualquer rota não definida em `generateStaticParams`.

### Renderização Dinâmica

Com a renderização dinâmica, nossas rotas são renderizadas cada vez que um usuário acessa elas. A renderização dinâmica é útil quando uma rota deve usar informações provenientes da requisição (como cookies, headers, search params, etc.) ou quando a informação muda com muita frequência.

Para optar por uma rota com renderização dinâmica, podemos estabelecer configurações de cache a nível de `fetch`, rota/segmento ou ao usar funções dinâmicas. Falaremos disso na próxima seção.

### Streaming

O Streaming é uma técnica de transferência de dados que nos permite dividir o conteúdo em pedaços menores e enviá-los ao cliente à medida que estejam disponíveis. Isso evita que processos bloqueantes (como obter dados) impeçam que o usuário não veja nada até que tudo esteja disponível.

Para habilitar streaming, basta ter um Suspense Boundary, definindo um arquivo `loading.tsx` ou montando um componente Suspense manualmente em algum Server Component. Agora nossa rota está dividida em partes, cada vez que um Suspense Boundary superior terminar de processar, enviará seu conteúdo ao usuário, permitindo que o usuário veja o conteúdo à medida que esteja disponível.

> [!NOTE]
> Já usamos os 3 métodos de renderização. Estático: Nossa página inicial, dinâmico: Nossa página de detalhes antes de adicionar o `loading.tsx`, streaming: Nossa página de detalhes depois de adicionar o `loading.tsx` e antes de adicionar o `generateStaticParams`.

**Pergunta**: Que tipo de renderização estamos usando em nossa página inicial e na de detalhes agora?

## Route Handlers

Já ouvimos falar do stack MERN (MongoDB, Express, React, Node.js) ou outros similares. Se pensarmos no Next.js: Temos um servidor Node.js que pode consumir dados de um DB e retornar uma UI usando componentes do React. Mas, o que podemos fazer se precisarmos de um endpoint, um `/api/restaurants` por exemplo, para consumir dados de uma aplicação mobile?

Temos os [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers) disponíveis através do uso do arquivo especial `route.ts`. Podemos exportar funções com os nomes dos métodos HTTP habituais, e elas serão executadas quando a rota receber uma requisição do mesmo método. Por exemplo, se criarmos um arquivo `src/app/api/restaurants/route.ts` com o seguinte conteúdo:

```ts
import type {NextRequest} from "next/server";

import {api} from "@/api";

export async function GET(request: NextRequest) {
  const restaurants = await api.list();

  return Response.json(restaurants);
}
```

Desta maneira, quando fizermos uma requisição `GET` para `/api/restaurants`, será executada a função `GET` e retornará a lista de restaurantes.

> [!TIP]
> Podemos exportar múltiplas funções no mesmo arquivo e elas serão executadas de acordo com o método da requisição.

## Caching

Quando trabalhamos com aplicações React em Vite, Create React App ou similares, geralmente lidamos com um único cache, o cache do navegador. No Next.js, temos muitos tipos de cache diferentes:

| Mecanismo                    | O que                           | Onde     | Propósito                                                  | Duração                                    |
| ---------------------------- | ------------------------------- | -------- | ---------------------------------------------------------- | ------------------------------------------- |
| Memorização de Requisições  | Valores de retorno de funções | Servidor | Reutilizar dados em uma árvore de componentes React          | Duração da requisição                    |
| Cache de Dados               | Dados                           | Servidor | Armazenar dados entre requisições de usuário e deploys | Persistente (pode ser revalidado)          |
| Cache de Rota Completa       | HTML e carga RSC                | Servidor | Reduzir o custo de renderização e melhorar o desempenho | Persistente (pode ser revalidado)          |
| Cache de Roteamento        | Carga RSC                       | Cliente  | Reduzir as requisições ao servidor durante a navegação  | Sessão do usuário ou baseado no tempo     |

Next.js, por padrão, tentará cachear tanto quanto possível para melhorar o desempenho e reduzir os custos. Quando temos um segmento dinâmico mas uma requisição de dados ainda tem cache relevante, em vez de ir à origem, Next.js tentará obtê-lo do cache de dados. A seguir, podemos ver um diagrama de como funcionam os diferentes tipos de cache.

![Visão geral do Cache](https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Fcaching-overview.png&w=3840&q=75&dpl=dpl_Ejtt9BCyCFNeRJdBoVsM9Es9x8xe)

O comportamento do cache dependerá de se sua rota tem renderização estática ou dinâmica, se os dados estão em cache ou não, ou se uma requisição é parte de uma visita inicial ou uma navegação subsequente. Isso pode parecer um pouco avassalador, mas com o tempo e a prática, veremos que os benefícios são muitos.

> [!NOTE]
> Saber isso sobre o caching ajuda a entender como funciona o Next.js, mas não é conteúdo essencial para ser produtivo no Next.js.

### Configurações de Revalidação de Cache

Nem sempre queremos conteúdo 100% estático ou 100% dinâmico, por isso temos várias maneiras de estipular como queremos que o cache seja gerenciado.

#### `cache: "force-cache"` (por padrão)

Se olharmos o método `list` em nosso `api.ts`, vemos que ele tem a propriedade `cache` definida como `force-cache`. Isso indica ao Next.js que sempre que uma rota precisar obter os dados de `list`, use o cache de dados.

```ts
const [, ...data] = await fetch('...', { cache: 'force-cache' }).then(res => res.text()).then(text => text.split('\n'))
```

#### `cache: "no-store"`

Substitua a propriedade `cache: 'force-cache'` por `cache: 'no-store'` em nosso `api.ts` para que o método `list` não use o cache de dados.

```ts
const [, ...data] = await fetch('...', { cache: 'no-store' }).then(res => res.text()).then(text => text.split('\n'))
```

Isso indicará ao Next.js que sempre que uma rota precisar obter os dados de `list`, não deve usar o cache de dados. Para testar se funcionou, pare o servidor e execute novamente:

```bash
npm run build
npm start
```

> [!NOTE]
> `no-store` é o valor padrão de `cache` na versão `canary` do Next.js e será o valor padrão no futuro.

![Saída da compilação](./images/build-output.jpg)

Agora não só deveria funcionar, mas também podemos ver no detalhe da compilação que a rota `/` está marcada como `Dynamic`. Neste caso, sabemos que nossos restaurantes não vão mudar frequentemente, portanto não é necessário que sejam dinâmicos, vamos voltar a mudar o `cache` de `no-store` para `force-cache`.

> [!IMPORTANT]
> Termine o processo e volte a executar o servidor de desenvolvimento com `npm run dev`.

#### `revalidate: number`

Se não queremos que cada requisição traga informação nova toda vez, mas queremos que "revalide" essa informação a cada certo tempo, podemos definir a propriedade `revalidate` em nossos fetch da seguinte maneira:

```ts
const [, ...data] = await fetch('...', { next: { revalidate: 100 } }).then(res => res.text()).then(text => text.split('\n'))
```

Isso fará com que depois de 100 segundos de ter obtido os dados, na próxima vez que um usuário acessar a rota, serão servidos dados do cache e, em segundo plano, serão obtidos dados novos. Estes dados sobrescreverão o cache e na próxima vez que um usuário acessar a rota, serão servidos os dados novos. Esta estratégia é conhecida como `stale-while-revalidate` e defini-la por um tempo determinado é conhecido como `time-based revalidation`.

#### Configuração de Segmento de Rota

As rotas podem exportar constantes de configuração para definir certos comportamentos, incluindo a revalidação e a estratégia de renderização. Poderíamos fazer o seguinte em nosso `src/app/page.tsx`:

```tsx
export const dynamic = 'force-static' // por padrão: auto
export const revalidate = 100 // por padrão: false
```

- `dynamic`: Muda a estratégia de renderização de uma rota para ser estática ou dinâmica.
- `revalidate`: Define o tempo de revalidação por padrão para uma rota.

Desta maneira nos asseguramos de que nossa rota `/` seja estática e que obtenha dados novos a cada 100 segundos.

> [!NOTE]
> Existem muitas outras configurações que você pode ver [aqui](https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config).

#### Funções Dinâmicas

Também há funções que são denominadas [funções dinâmicas](https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-functions). Estas funções dependem de informação da requisição, como [`cookies`](https://nextjs.org/docs/app/api-reference/functions/cookies), [`headers`](https://nextjs.org/docs/app/api-reference/functions/headers), [`useSearchParams`](https://nextjs.org/docs/app/api-reference/functions/use-search-params) e [`searchParams`](https://nextjs.org/docs/app/api-reference/file-conventions/page#searchparams-optional). Ao usar alguma destas funções em nossos segmentos (ou funções chamadas dentro de nossos segmentos), a rota optará por uma renderização dinâmica.

> [!TIP]
> A renderização por padrão de uma página é `auto`. Se nós sabemos que nossa página deve ser estática ou dinâmica, eu prefiro defini-lo explicitamente. Se é estática e queremos usar `headers` ou `cookies`, os resultados virão vazios. Se queremos que seja dinâmica, definimos `dynamic: "force-dynamic"` e sabemos que sempre será assim.

### Revalidação Manual

A revalidação por tempo é útil, mas não é adequada para todos os casos. Em algumas situações, temos dados que não mudam com frequência, mas quando mudam, queremos que sejam atualizados imediatamente. Por exemplo, um produto em uma loja virtual que mudou seu preço depois de 15 dias e queremos que os usuários vejam o novo preço imediatamente. Para conseguir isso, podemos utilizar dois métodos que são executados do lado do servidor: [`revalidatePath`](https://nextjs.org/docs/app/api-reference/functions/revalidatePath) e [`revalidateTag`](https://nextjs.org/docs/app/api-reference/functions/revalidateTag).

#### `revalidatePath`

Este método nos permite revalidar o conteúdo de uma rota em particular, como nossa rota `/`, se sabemos que adicionamos novos restaurantes à base de dados. Como nossa aplicação não tem um formulário para adicionar novos restaurantes ou modificar existentes, vamos criar uma rota de API utilitária para que, ao chamá-la, revalide a rota `/`.

Criamos um arquivo `src/app/api/revalidate/route.ts` com o seguinte conteúdo:

```typescript
import type {NextRequest} from "next/server";

import {revalidatePath} from "next/cache";

export async function GET(request: NextRequest) {
  const path = request.nextUrl.searchParams.get("path") || "/";

  revalidatePath(path);

  return Response.json({success: true});
}
```
> [!TIP]
> Podemos enviar um `path` por `searchParams` assim nosso endpoint utilitário é mais flexível.

Agora podemos remover todos os `revalidate`, `dynamic` e qualquer coisa que faça nossa rota `/` ser dinâmica. Em seguida, voltamos a compilar e executar nossa aplicação. Se acessarmos `http://localhost:3000`, deveríamos ver nossos restaurantes. Depois, modificamos um na base de dados, fazemos uma requisição `GET` manualmente para `http://localhost:3000/api/revalidate` e voltamos a `http://localhost:3000`. Deveríamos ver os dados atualizados.

É uma boa prática proteger nossas rotas de API com alguma chave secreta para evitar que usuários mal-intencionados executem estes métodos.

> [!IMPORTANT]
> Defina uma variável de ambiente `REVALIDATE_SECRET` e use-a em nossa rota de API para executá-la apenas quando nos enviarem um parâmetro `secret` com o valor correto. Você pode usar a documentação oficial do Next.js para ver como usar [variáveis de ambiente](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables).

#### `revalidateTag`

Pode acontecer que modifiquemos um dado que afete várias rotas ao mesmo tempo, e quando as aplicações crescem, é muito difícil saber quais rotas são afetadas por uma mudança. Para abordar isso, podemos usar `revalidateTag`, que nos permite revalidar todas as rotas que tenham uma tag em particular.

Adicionamos uma tag `restaurants` às nossas duas chamadas em `api.ts`, assim, quando revalidarmos a tag `restaurants`, será revalidado o conteúdo tanto para `/` quanto para cada `/[id]`.

```typescript
const [, ...data] = await fetch('...', { next: { tags: ['restaurants'] } }).then(res => res.text()).then(text => text.split('\n'));
```

Agora, atualizamos nossa rota de API utilitária para usar `revalidateTag`:

```typescript
import type {NextRequest} from "next/server";

import {revalidateTag} from "next/cache";

export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag") || "restaurants";

  revalidateTag(tag);

  return Response.json({success: true});
}
```
> [!TIP]
> Podemos enviar uma `tag` por `searchParams` assim nosso endpoint utilitário é mais flexível.

## Parâmetros de URL

Manejar o estado de nossa aplicação na URL é uma boa prática; nos permite compartilhar links, voltar a uma página em particular e mais. Também nos permite delegar ao router o manejo da navegação e continuar usando Server Components apesar de ter interatividade em nossa aplicação, já que ao mudar a rota fazemos outra requisição.

Vamos criar um componente `src/app/components/SearchBox.tsx` que contém um campo dentro de um formulário. Ao enviar o formulário, atualizamos a URL com o valor do campo e deixamos que o Next.js faça o resto. Vamos adicionar o seguinte conteúdo:

```tsx
"use client";

import Form from "next/form";
import {useRouter, useSearchParams} from "next/navigation";

export default function SearchBox() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // Prevenimos que a página se atualize ao enviar o formulário
    event.preventDefault();

    // Obtemos os dados do formulário
    const formData = new FormData(event.currentTarget);

    // Obtemos o valor do input
    const query = formData.get("query");

    // Redirecionamos ao index com uma query
    router.push(`/?q=${query}`);
  }

  return (
    <Form className="mb-4 inline-flex gap-2" onSubmit={handleSubmit}>
      {/* Inicializamos o input para que contenha o valor atual da query */}
      <input className="px-2" defaultValue={searchParams.get("q") || ""} name="query" />
      <button className="bg-white/20 p-2" type="submit">
        Buscar
      </button>
    </Form>
  );
}
```

> [!NOTE]
> O componente [`Form` do Next.js](https://nextjs.org/docs/app/api-reference/components/form) estende o elemento `<form>` do HTML oferecendo vantagens como prefetching de UIs de carregamento, navegações do lado do cliente e melhoria progressiva.

Agora, adicionamos a caixa de busca em nosso `src/app/page.tsx` e testamos se funciona.

```tsx
...

import SearchBox from "./components/SearchBox";

export default async function Home() {
  const restaurants = await api.list();

  return (
    <section>
      <SearchBox />
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        ...
  )
```

Ótimo! Ao enviar o formulário, ele redireciona corretamente. Agora precisamos fazer a busca funcionar. Para isso, vamos modificar nosso `api.ts` para que tenha um método `search` que receba uma `query` e filtre os restaurantes por nome ou descrição:

```typescript
const api = {
  ...,
  search: async (query: string = ""): Promise<Restaurant[]> => {
    // Obtemos os restaurantes
    const results = await api.list();

    // Filtramos por nome
    return results.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(query.toLowerCase()),
    );
  },
}
```

Como estamos obtendo o conteúdo em `.csv` do Google Sheets, não podemos fazer a filtragem na API, e precisamos obter todos os resultados e filtrá-los no servidor. Não é algo ótimo para uma aplicação real, mas como o `fetch` sempre será igual, nos beneficiaremos do Data Cache do Next.js em vez de baixar um novo `.csv` em cada busca.

Em seguida, passamos `searchParams.q` (todas as `page` recebem a prop `searchParams`) para `api.search` em vez de `api.list` em nosso `src/app/page.tsx`:

```tsx
export default async function Home({searchParams}: {searchParams: Promise<{q: string}>}) {
  const {q} = await searchParams;
  const restaurants = await api.search(q);

  ...
}
```

Utilizar `searchParams` em uma `page` faz com que o segmento seja dinâmico, já que precisa ser executado em cada requisição para obter os valores corretos.

Ótimo! Nossa busca funciona corretamente.

> [!IMPORTANT]
> Se um usuário busca algo que não existe, nada é mostrado. Certifique-se de mostrar alguma mensagem quando não houver resultados como tarefa.

## Agrupamento de Rotas

Isso é algo pessoal, mas agora nos resta uma pasta `components` dentro do diretório `app`, que tem um único arquivo que é relevante para uma única página (`/app/page.tsx`). Não gosto que esteja no nível de `app` porque não é algo que seja compartilhado entre todas as páginas. Poderíamos tirar a pasta `components` para fora de `app`, mas aconteceria o mesmo. Felizmente, no App Router podemos [agrupar rotas](https://nextjs.org/docs/app/building-your-application/routing/route-groups) e arquivos da seguinte maneira:

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
> `(index)` é apenas um nome; pode se chamar como você quiser.

Ao criar uma pasta envolta em `(parênteses)`, não só podemos organizar melhor nossos arquivos, mas também poderíamos definir diferentes `layout` / `loading` / `error` para grupos de rotas que estão no mesmo nível (ou até ter layouts aninhados). Agora, nossa pasta `components` está colocada o mais próximo possível de onde é relevante. Não se esqueça de atualizar as importações para que nossa aplicação continue funcionando.

## Server Actions

Agora que penso, pode ser que não precisemos de um Client Component ou um componente de busca. Poderíamos usar um Server Action diretamente em `src/app/page.tsx`.

Os [Server Actions](https://nextjs.org/docs/app/api-reference/functions/server-actions) nos permitem executar código do lado do servidor quando o usuário envia um formulário. Nos dão acesso aos dados incluídos nesse formulário, então poderíamos usá-los para fazer a busca. Vamos em `src/app/page.tsx` e vamos substituir nosso componente de busca pelo seguinte:

```tsx
import { redirect } from "next/navigation";

export default async function Home({searchParams}: {searchParams: Promise<{q?: string}>}) {
  const {q} = await searchParams;
  const restaurants = await api.search(q);

  async function searchAction(formData: FormData) {
    'use server'

    redirect(`/?q=${formData.get('query')}`);
  }

  return (
    <section>
      <form action={searchAction} className="inline-flex gap-2 mb-4">
        <input defaultValue={q || ''} className="px-2" name="query" />
        <button type="submit" className="p-2 bg-white/20">Buscar</button>
      </form>
      <section className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        ...
      </section>
    </section>
  );
}
```

Os Server Actions requerem que especifiquemos a diretiva `'use server'` na função de nossa ação (ou na parte superior do arquivo se vamos ter um arquivo com muitas ações). Depois, passamos esta função à propriedade `action` de nosso formulário. Ao enviar o formulário, será executada a função `searchAction` e se redirecionará à rota `/` com o valor do campo `q` como query string.

> [!TIP]
> Podemos usar os server actions como funções assícronas, não só em submit de formulários. Podemos pensá-los como "route handlers" mas usando funções em vez de `fetch`.

## Salvando em Favoritos (localStorage)

Vamos implementar a funcionalidade de salvar em favoritos. Para isso, vamos ao nosso componente `RestaurantCard.tsx` (ou como quer que você o tenha chamado nos exercícios anteriores). Vamos adicionar um botão de coração que, ao clicar, salvará o ID do restaurante em `localStorage`.

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

Nosso componente será um Client Component já que precisamos estar no cliente para poder acessar `localStorage`, que é uma API do navegador. No entanto, quando renderizamos o componente, vemos o seguinte erro:

![](./images/window-undefined.jpg)

### Pré-renderização

No Next.js, todos os componentes são pré-renderizados no servidor por padrão. Isso significa que um componente (mesmo sendo um Client Component) será executado no servidor e depois no cliente. Isso nos permite gerar uma pré-visualização (não interativa) enquanto o JavaScript é baixado do lado do cliente. Uma vez que isso acontece, nossa aplicação é hidratada e se torna interativa.

No entanto, ao executar no servidor, não temos acesso a `window`. Por isso, devemos garantir que nosso componente seja renderizado apenas no cliente.

### Lazy Loading

No Next.js, podemos usar a função `dynamic` importada de [`next/dynamic`](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading#nextdynamic) para realizar lazy loading de nossos componentes. Isso nos permite importar um componente de maneira dinâmica, apenas quando necessário. Também nos permite definir se um componente deveria ou não ser renderizado no servidor através da propriedade `ssr`.

Atualizamos o código do nosso componente `RestaurantCard` para que contenha dois componentes: um para a informação e outro para o botão de favorito. O componente de informação será pré-renderizado no servidor e o componente de favorito será renderizado apenas no cliente através de `dynamic`.

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

// Criamos um componente dinâmico para que não seja renderizado no servidor
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

Se atualizarmos manualmente a chave `favorites` em `localStorage` para incluir o ID de algum de nossos restaurantes, deveríamos vê-lo corretamente.

![](./images/favorites.jpg)

Te deixo algumas tarefas:

- Nosso componente `RestaurantCard` contém dois componentes. O componente que contém a informação não precisa de nenhuma interatividade, portanto, poderia continuar sendo um Server Component. Mova o componente do botão de favorito para outro arquivo e importe-o.
    - Você pode converter `RestaurantCard` em uma pasta e adicionar um `index.tsx` e um `FavoriteButton.tsx` dentro. Dessa maneira, os componentes continuariam colocados o mais próximo possível de onde são relevantes. Mas gerencie isso como preferir.
- Implemente a funcionalidade de adicionar e remover favoritos no botão de favorito. Ao carregar a página, deveria mostrar o estado atual, e ao clicar no botão, deveria mostrar o estado atualizado e persistir esse estado ao recarregar a página.
- Estamos repetindo os tipos para `Restaurant` muitas vezes, mova a interface para um arquivo `src/types.ts`, exporte-a e use-a onde for necessário.

## O futuro do Next.js

O que vimos ao longo deste curso é tudo o que se encontra na versão estável do Next.js até a versão 15.0.1, mas o futuro do Next.js está cheio de mudanças interessantes. Embora isso que vamos ver agora não seja estável, é bom saber para estar preparado para o que vem por aí.

### Dynamic IO

Como você deve ter percebido, o cache e suas configurações, quando as coisas são estáticas, quando não são, como fazer determinadas coisas faz com que algo que era estático agora seja dinâmico, é confuso. Dynamic IO é uma flag experimental que nos permite que as operações de obtenção de dados no Next.js sejam dinâmicas a menos que se especifique o contrário de maneira explícita.

Para habilitá-lo vamos modificar nosso `next.config.ts` para adicionar a flag `dynamicIO` dentro de `experimental`:

```ts
import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  experimental: {
    ...
    dynamicIO: true,
  },
  ...
}
 
export default nextConfig
```

Quando Dynamic IO estiver habilitado, vamos ver que cada vez que tentarmos acessar uma página que possa ser dinâmica (que acesse params, searchParams, headers, tenha um fetch, etc.) vamos ver um erro como este:

![](./images/dynamic-error.jpg)

Isso é porque devemos ser explícitos sobre como queremos que nossa rota, componente ou função se renderize.

Se queremos que uma parte de nossa rota seja dinâmica, vamos envolver o que precisamos que seja dinâmico, com um `Suspense`:

```tsx
async function RestaurantContent({id}: {id: string}) {
  const restaurant = await api.fetch(id);
  
  return <div>{restaurant.name}</div>;
}

export default async function RestaurantPage({params}: {params: Promise<{id: string}>}) {
  return (
    <main>
      <header>...</header>
      <Suspense fallback={<div>Carregando...</div>}>
        <RestaurantContent id={(await params).id} />
      </Suspense>
      <footer>...</footer>
    </main>
  );
}
```

Agora se tentarmos acessar essa página, vamos ver nosso `header`, `footer` e um `Carregando...` onde deveria estar o conteúdo do restaurante, enquanto o servidor obtém os dados.

Se quiséssemos que nossa rota ou partes dela sejam estáticas, vamos poder usar [`use cache`](https://nextjs.org/docs/canary/app/api-reference/directives/use-cache), [`cacheLife`](https://nextjs.org/docs/canary/app/api-reference/next-config-js/cacheLife) e [`cacheTag`](https://nextjs.org/docs/canary/app/api-reference/functions/cacheTag).

> [!NOTE]
> Ao usar `dynamicIO`, não vamos poder usar configurações de segmentos como `dynamic`, `revalidate` e mais, vamos ter outras alternativas para alcançar essas funcionalidades.

> [!TIP]
> Há funções como `Math.random()`, `Date.now()` que para usá-las devemos usá-las dentro de `use cache` ou com [`connection`](https://nextjs.org/docs/app/api-reference/functions/connection) para indicar ao Next.js que deve obter um novo valor em cada requisição.

#### `use cache`

É uma diretiva que define se um componente, função ou arquivo deveria ser cacheado. Seu uso é similar ao de `use server`, podemos usá-lo dentro de uma função ou componente para marcá-lo como cacheável ou podemos defini-lo na parte superior de um arquivo para indicar que todas as funções desse arquivo deveriam ser cacheadas.

> [!NOTE]
> Esta diretiva é uma funcionalidade do Next.js, não como `use client` ou `use server`, que são diretivas do React.

Por exemplo, poderíamos definir nosso método `api.list` como cacheável assim todos os métodos que o usam sempre trariam os dados atualizados:

```ts
const api = {
  ...
  list: async (): Promise<Restaurant[]> => {
    // Definimos a função como cacheável
    "use cache";

    // Obtemos a informação do Google Sheets em formato texto e a dividimos por linhas, pulamos a primeira linha porque é o cabeçalho
    const [, ...data] = await fetch("...")
      .then((res) => res.text())
      .then((text) => text.split("\n"));

    // Convertemos cada linha em um objeto Restaurant, certifique-se de que os campos não possuam `,`
    const restaurants: Restaurant[] = data.map((row) => {
      const [id, name, description, address, score, ratings, image] = row.split(",");

      return {
        id,
        name,
        description,
        address,
        score: Number(score),
        ratings: Number(ratings),
        image,
      };
    });

    // O retornamos
    return restaurants;
  },
  ...
}
```

> [!TIP]
> Como dizíamos antes, poderíamos fazer isso em um componente para alcançar o mesmo resultado.

#### `cacheLife`

Uma das funcionalidades mais interessantes do conteúdo estático é a possibilidade de revalidá-lo. Neste paradigma de `use cache`, podemos definir um tempo de vida para esse cache usando a função `cacheLife`.

Imaginemos que queremos que o cache de nossa listagem de restaurantes expire uma vez por dia:

```ts
import {
  unstable_cacheLife as cacheLife,
} from 'next/cache'

const api = {
  ...
  list: async (): Promise<Restaurant[]> => {
    // Definimos a função como cacheável
    "use cache";

    // Definimos que o cache expire uma vez por dia
    cacheLife("days");
    ...
  },
}
```

O cache tem 3 propriedades:

- `stale`: Duração durante a qual o cliente pode usar este dado sem ter que perguntar ao servidor se continua válido.
- `revalidate`: Frequência com que o servidor deveria revalidar estes dados. Pode ser que enquanto os dados estão sendo revalidados, ao usuário seja servido o dado antigo.
- `expire`: Duração máxima que pode ter o dado, se exceder este tempo se mudará para renderização dinâmica para assegurar-se de mostrar dados atualizados.

Mais acima usamos o perfil `days` para definir que o cache expire uma vez por dia. No Next.js temos vários perfis por padrão que podemos usar:

| **Perfil**  | **Stale** | **Revalidate** | **Expire**     | **Descrição**                                                                        |
| ----------- | --------- | -------------- | -------------- | ------------------------------------------------------------------------------------ |
| `default`   | undefined | 15 minutos     | INFINITE_CACHE | Perfil padrão, adequado para conteúdo que não necessita atualizações frequentes     |
| `seconds`   | undefined | 1 segundo      | 1 minuto       | Para conteúdo que muda rapidamente requerendo atualizações em tempo real            |
| `minutes`   | 5 minutos | 1 minuto       | 1 hora         | Para conteúdo que se atualiza frequentemente dentro de uma hora                     |
| `hours`     | 5 minutos | 1 hora         | 1 dia          | Para conteúdo que se atualiza diariamente mas pode estar ligeiramente desatualizado |
| `days`      | 5 minutos | 1 dia          | 1 semana       | Para conteúdo que se atualiza diariamente mas pode estar ligeiramente desatualizado |
| `weeks`     | 5 minutos | 1 semana       | 1 mês          | Para conteúdo que se atualiza mensalmente mas pode estar uma semana antigo          |
| `max`       | 5 minutos | 1 mês          | INFINITE_CACHE | Para conteúdo muito estável que raramente necessita atualizações                    |

Então, para nosso caso acima, enquanto o usuário estiver na página navegando, a cada 5 minutos verificará se a listagem de restaurantes continua válida. Se não estiver, será revalidada em segundo plano e na próxima navegação o usuário verá os dados atualizados. Se ninguém visitou o site por 1 semana, o primeiro usuário que acessar, verá a tela de carregamento em vez dos dados desatualizados e serão servidos os dados atualizados.

Também podemos definir perfis personalizados para nossos dados. Podemos fazê-lo em nosso `next.config.ts`:

```ts
const nextConfig = {
  experimental: {
    dynamicIO: true,
    cacheLife: {
      biweekly: {
        stale: 60 * 60 * 24 * 14, // 14 dias
        revalidate: 60 * 60 * 24, // 1 dia
        expire: 60 * 60 * 24 * 14, // 14 dias
      },
    },
  },
  ...
}
```

E depois usá-lo como `cacheLife("biweekly")`. Ou podemos fazê-lo em linha:

```ts
import {
  unstable_cacheLife as cacheLife,
} from 'next/cache'

const api = {
  ...
  list: async (): Promise<Restaurant[]> => {
    // Definimos a função como cacheável
    "use cache";

    // Definimos que o cache expire uma vez por dia
    cacheLife({
      stale: 3600, // 1 hora
      revalidate: 900, // 15 minutos
      expire: 86400, // 1 dia
    })
    ...
  },
}
```

A diretiva de `use cache` com `cacheLife` pode ser aninhada e em caso de não ser especificada, os pais mais próximos herdarão sua configuração.

#### `cacheTag`

No paradigma anterior tínhamos os `tags` que podíamos definir a nível `fetch`, agora temos `cacheTag` com a qual podemos definir uma tag para uma função ou componente cacheável:

```ts
import {
  unstable_cacheTag as cacheTag,
  unstable_cacheLife as cacheLife,
} from 'next/cache'

const api = {
  ...
  list: async (): Promise<Restaurant[]> => {
    // Definimos a função como cacheável
    "use cache";

    // Definimos que o cache expire uma vez por dia
    cacheLife("days");
    cacheTag("restaurants")
    ...
  },
}
```

E assim como antes, podemos purgar esse cache usando `revalidateTag`.

Uma das maiores vantagens disso é que podemos definir uma tag, ou listagem de tags baseada em uma resposta, por exemplo, se nossa página inicial mostra 10 restaurantes, poderíamos fazer:

```ts
cacheTag(["1", "2", ...])
```

E se muda o restaurante `3` e nós fazemos `revalidateTag("3")` só será renderizada a página inicial se o restaurante `3` estava presente.

> [!NOTE]
> Atualize toda a aplicação para usar `dynamicIO` e `use cache`.

---

## Parabéns
Muito bem por chegar até aqui! 🎉 Planejo manter este curso atualizado, então, se você gostou, não hesite em voltar em algum momento.

Ao longo deste curso, criamos juntos uma pequena aplicação e exploramos pontos que considero essenciais para desenvolver aplicações em Next.js. Mas isso não marca o fim do caminho; a verdadeira melhoria e aprendizado vêm ao colocar a mão na massa.

Às terças-feiras costumo transmitir na Twitch, onde desenvolvo desafios técnicos reais de empresas ao vivo. Também falamos sobre tecnologia, respondemos perguntas e mais. Se o horário não funciona para você, a maioria das transmissões fica guardada no meu canal do YouTube.

Se você busca praticar de maneira ativa, recomendo tentar alguns dos desafios que criei [aqui](https://github.com/goncy/interview-challenges). E se você tem perguntas que gostaria de resolver em comunidade, junte-se ao nosso [Discord](https://discord.goncy.dev)!

Espero que você tenha gostado do curso. Se encontrar algo que acredita que poderia ser melhorado ou notar algum erro, os Pull Requests são bem-vindos! Abaixo você encontrará minhas redes sociais e os lugares onde pode fazer doações se gostou do meu conteúdo.

Nos vemos! 🚀

---

Se você gosta do meu conteúdo, siga-me no [Twitter](https://twitter.gonzalopozzo.com), na [Twitch](https://twitch.gonzalopozzo.com), no [YouTube](https://youtube.gonzalopozzo.com), doe um [Cafezinho](https://cafecito.gonzalopozzo.com) ou torne-se [sponsor no github](https://github.com/sponsors/goncy) ✨