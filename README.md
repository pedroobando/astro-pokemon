# 🎮 Pokemon Static

Una Pokédex estática generada con [Astro](https://astro.build) que consume la [PokeAPI](https://pokeapi.co/) para mostrar información de los primeros 151 Pokémon.

> 📚 **Parte del curso**: Este proyecto es parte del curso [Astro: El framework web para crear sitios rápidos](https://www.udemy.com/course/astro-guia-completa/) por Fernando Herrera en Udemy.

## ✨ Características

- ⚡ **Generación Estática** - Páginas pre-renderizadas en build time con `getStaticPaths`
- 🏝️ **Islas de Astro** - Componentes interactivos con `client:only` usando SolidJS
- 📱 **Responsive** - Diseño adaptable usando Tailwind CSS
- 🎨 **Transiciones Suaves** - Navegación fluida con `ClientRouter` de Astro
- 🔊 **Sonidos de Pokémon** - Reproduce los cries de cada Pokémon
- 💾 **Persistencia Local** - Favoritos guardados en localStorage
- 📄 **SEO Optimizado** - Meta tags dinámicas y Open Graph
- 🧩 **Componentes Reutilizables** - Arquitectura modular con Astro y SolidJS components

## 🚀 Demo en Vivo

Puedes ver la demo en: `http://localhost:4321` (modo desarrollo)

## 📁 Estructura del Proyecto

```text
/
├── public/                 # Assets estáticos (favicon, etc.)
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── navbar/         # Navegación principal
│   │   └── pokemon/        # Tarjetas de Pokémon
│   │       ├── FavoritePokemonCard.tsx   # Isla: Tarjeta de favorito (SolidJS)
│   │       └── FavoritePokemons.tsx      # Isla: Grid de favoritos (SolidJS)
│   ├── consts/             # Constantes (site-info)
│   ├── interface/          # TypeScript interfaces
│   ├── layouts/            # Layouts de página
│   ├── pages/              # Rutas de la aplicación
│   │   ├── index.astro           # Listado inicial
│   │   ├── pokemons/
│   │   │   ├── [page].astro      # Paginación (15 por página)
│   │   │   └── [name].astro      # Detalle por nombre
│   │   ├── pokemon/
│   │   │   └── [id].astro        # Detalle por ID
│   │   └── favorites/
│   │       └── index.astro       # Favoritos (Isla SolidJS)
│   └── styles/             # Estilos globales
├── astro.config.mjs        # Configuración de Astro
├── package.json
└── README.md
```

## 🛣️ Rutas Disponibles

| Ruta                  | Descripción                                                            |
| --------------------- | ---------------------------------------------------------------------- |
| `/`                   | Listado inicial de Pokémon (primera página de la API)                  |
| `/pokemons/1`         | Paginación - 15 Pokémon por página (10 páginas totales)                |
| `/pokemons/bulbasaur` | Detalle de un Pokémon por nombre                                       |
| `/pokemon/1`          | Detalle de un Pokémon por ID                                           |
| `/favorites`          | Pokémon favoritos guardados en localStorage (Isla SolidJS interactiva) |

## 🧞 Comandos

| Comando        | Acción                                            |
| :------------- | :------------------------------------------------ |
| `pnpm install` | Instalar dependencias                             |
| `pnpm dev`     | Iniciar servidor de desarrollo (`localhost:4321`) |
| `pnpm build`   | Generar sitio estático en `./dist/`               |
| `pnpm preview` | Previsualizar build localmente                    |

## 🛠️ Stack Tecnológico

- **[Astro](https://astro.build/)** v6.1.3 - Framework web moderno
- **[Tailwind CSS](https://tailwindcss.com/)** v4.2.2 - Framework CSS utility-first
- **[SolidJS](https://www.solidjs.com/)** - Biblioteca reactiva para las islas interactivas
- **TypeScript** - Tipado estático
- **[PokeAPI](https://pokeapi.co/)** - API de datos Pokémon
- **[PokeAPI Sprites](https://github.com/PokeAPI/sprites)** - Imágenes oficiales
- **[PokeAPI Cries](https://github.com/PokeAPI/cries)** - Sonidos de Pokémon

## 🎯 Features Implementadas

### ⚡ Static Site Generation (SSG)

Todas las páginas se generan en build time usando `getStaticPaths`, lo que significa:

- Cero carga en la API en runtime
- Tiempo de carga ultrarrápido
- SEO perfecto

### 🎴 PokemonCard Component

Componente reutilizable que muestra:

- Imagen oficial del Pokémon (artwork)
- Nombre con capitalización
- Tamaño adaptable (`isBig` prop)
- Transiciones de Astro (`transition:name`)

### 🔊 Audio de Pokémon

Cada página de detalle incluye un reproductor de audio con el cry del Pokémon usando los assets de PokeAPI Cries.

### 📄 SEO Dinámico

El layout principal (`MainLayout`) genera automáticamente:

- Meta description
- Open Graph tags (title, description, image)
- Keywords relevantes

### 🏝️ Islas de Astro (Astro Islands)

El proyecto utiliza el patrón de **Islas de Astro** para agregar interactividad solo donde se necesita:

#### Componentes de Isla (SolidJS)

- **`FavoritePokemons.tsx`** - Grid de favoritos que lee desde localStorage
- **`FavoritePokemonCard.tsx`** - Tarjeta individual con botón de eliminar

Uso en `src/pages/favorites/index.astro`:

```astro
<FavoritePokemons client:only="solid-js" />
```

La directiva `client:only="solid-js"` indica que:

- El componente se renderiza completamente en el cliente
- No se envía HTML estático al navegador
- SolidJS maneja el estado y la reactividad

#### Ventajas del patrón Islands

- 🚀 **Zero JavaScript** en las páginas estáticas (SSG puro)
- 💧 **Hidratación selectiva** - Solo los favoritos cargan JS
- 🎯 **Interactividad focalizada** - Solo donde el usuario necesita interactuar

## 🔧 Configuración

### Requisitos

- Node.js >= 22.12.0
- pnpm (recomendado)

### Alias de Importación

El proyecto usa alias configurados en `tsconfig.json`:

```ts
import PokemonCard from '@/components/pokemon/PokemonCard.astro';
import type { PokemonListResponse } from '@/interface';
```

## 📝 Notas de Desarrollo

- La paginación muestra 15 Pokémon por página de los 151 disponibles
- Las imágenes se cargan desde el repositorio oficial de sprites de PokeAPI
- Los sonidos están en formato `.ogg` desde el repositorio de cries
- **Favoritos**: Usa el patrón Islands de Astro con SolidJS (`client:only`)
- Los favoritos se persisten en localStorage del navegador
- Cada tarjeta de favorito tiene transición de salida animada al eliminar

## 📚 Recursos

- [Documentación de Astro](https://docs.astro.build)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [PokeAPI Documentation](https://pokeapi.co/docs/v2)

---

Hecho con ❤️ y Astro
