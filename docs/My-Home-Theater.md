Tabla de contenidos:

- [My Home Theater](#my-home-theater)
- [El apartado de películas y series](#el-apartado-de-películas-y-series)
  - [Franquicias](#franquicias)
    - [ℹ️ GET /api/mht-franchises](#ℹ️-get-apimht-franchises)
    - [ℹ️ GET /api/mht-franchises/:slug](#ℹ️-get-apimht-franchisesslug)
  - [Películas](#películas)
    - [ℹ️ GET /api/mht-movies](#ℹ️-get-apimht-movies)
    - [ℹ️ GET /api/mht-movies/:slug](#ℹ️-get-apimht-moviesslug)
  - [Series](#series)
    - [ℹ️ GET /api/mht-series](#ℹ️-get-apimht-series)
    - [ℹ️ GET /api/mht-series/:slug](#ℹ️-get-apimht-seriesslug)
  - [Temporadas](#temporadas)
    - [ℹ️ GET /api/mht-seasons](#ℹ️-get-apimht-seasons)
    - [ℹ️ GET /api/mht-seasons/:slug](#ℹ️-get-apimht-seasonsslug)
  - [Capítulos](#capítulos)
    - [ℹ️ GET /api/mht-chapters](#ℹ️-get-apimht-chapters)
    - [ℹ️ GET /api/mht-chapters/:slug](#ℹ️-get-apimht-chaptersslug)
- [El apartado de contenido en internet](#el-apartado-de-contenido-en-internet)
  - [Canales](#canales)
    - [ℹ️ GET /api/mht-channels](#ℹ️-get-apimht-channels)
    - [ℹ️ GET /api/mht-channels/:slug](#ℹ️-get-apimht-channelsslug)
  - [Videos](#videos)
    - [ℹ️ GET /api/mht-videos](#ℹ️-get-apimht-videos)
    - [ℹ️ GET /api/mht-videos/:slug](#ℹ️-get-apimht-videosslug)
  - [Playlists](#playlists)
    - [ℹ️ GET /api/mht-playlists](#ℹ️-get-apimht-playlists)
    - [ℹ️ GET /api/mht-playlists/:slug](#ℹ️-get-apimht-playlistsslug)
- [El apartado de deportes](#el-apartado-de-deportes)
  - [Deportes](#deportes)
    - [ℹ️ GET /api/mht-sports](#ℹ️-get-apimht-sports)
    - [ℹ️ GET /api/mht-sports/:slug](#ℹ️-get-apimht-sportsslug)
  - [Ligas](#ligas)
    - [ℹ️ GET /api/mht-leagues](#ℹ️-get-apimht-leagues)
    - [ℹ️ GET /api/mht-leagues/:slug](#ℹ️-get-apimht-leaguesslug)
  - [Torneos](#torneos)
    - [ℹ️ GET /api/mht-tournaments](#ℹ️-get-apimht-tournaments)
    - [ℹ️ GET /api/mht-tournaments/:slug](#ℹ️-get-apimht-tournamentsslug)
  - [Partidos](#partidos)
    - [ℹ️ GET /api/mht-matches](#ℹ️-get-apimht-matches)
    - [ℹ️ GET /api/mht-matches/:slug](#ℹ️-get-apimht-matchesslug)

# My Home Theater

My Gaming Station es el título del proyecto blog dirigido a hablar de videojuegos. Dentro de My Blog Projects, todas las tablas y colecciones que corresponden a este proyecto llevan el prefijo "MGS"

Las tablas, colecciones y endpoints de My Gaming Station se enlistan a continuación:

# El apartado de películas y series

## Franquicias

La colección que guarda los posts referentes a las franquicias de las que quiero hablar

La estructura de la colección es la siguiente:

- **name:** Text *(Short text, required, localization enabled)*: Nombre de la franquicia
- **logo:** Media *(Single media, only images allowed, required)*: Imagen en escala 1:1 del logotipo de la franquicia
- **description:** Rich text (Markdown) *(Localization enabled)*: Descripción sobre la franquicia
- **slug:** UID *(Required)*: Slug que se usa desde el FrontEnd para acceder a un elemento específico de la colección
- **mht_movies** Relation with MHT-Movie *(MHT-Franchise belongs to many MHT-Movies)*: Relación con las películas relacionadas a esta franquicia
- **mht_series** Relation with MHT-Serie *(MHT-Franchise belongs to many MHT-Series)*: Relación con las series relacionadas a esta franquicia

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/mht-franchises

Obtener todas las franquicias

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mht-franchises?locale=es-419```: Trae las franquicias con localización en español latino usando las configuraciones por defecto de paginación y orden
- ```/api/mht-franchises?orderBy=name-asc&page=2&pageSize=2```: Trae las franquicias ordenando por nombre ascendentemente usando una paginación de tamaño de dos registros encontrándonos en la página 2
- ```/api/mht-franchises?exclude=star-wars&randomSeed=15&page=1&pageSize=2```: Trae las franquicias excluyendo el registro con slug star-wars usando una semilla aleatoria para mezclar los registros que trae con un tamaño de página de 2 registros en la página 1

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Se programó manualmente el parámetro ```search``` para poder realizar búsquedas de franquicias. Si este parámetro está vacío, no realizará ninguna búsqueda pero de llevar algo, buscará solamente coincidencias con el campo del nombre de la franquicia

Se programó manualmente el parámetro ```exclude``` que permite excluir un registro a través de pasarle su slug. Esto enfocado para cuando se quieran dar sugerencias dentro de una consulta de una franquicia y evitar sugerir la misma franquicia que se está consultando. Se pasaría entonces el slug de la franquicia que se quiere excluir

Se programó manualmente la paginación a través de las variables ```page``` y ```pageSize``` que describen el número de página y el tamaño de la página deseado respectivamente. Si el número de página no es indicado, por defecto tomará el valor de 1. Si el tamaño de la página no es indicado, por defecto tomará el valor de la longitud del arreglo regresado. Si el número de página es mayor al total de páginas que habría según los parámetros de paginación, el número de página pasa a ser 1 devolviendo a la primera página

Se programó una forma de ordenar los resultados de este endpoint a través de la variable ```orderBy``` la cual puede obtener los siguientes valores:

- ```name-asc```: Ordena los resultados alfabéticamente en función del nombre
- ```name-desc```: Ordena los resultados en orden alfabético inverso en función del nombre
- ```createdAtDate-asc```: Ordena los resultados de forma ascendente en función de la fecha en la que creé mi entrada de blog sobre esta franquicia
- ```createdAtDate-desc```: Ordena los resultados de forma descendente en función de la fecha en la que creé mi entrada de blog sobre esta franquicia
- Cualquier otro valor que se le pase, incluso si no se le pasa un valor, ordenará por defecto el resultado alfabéticamente en función del nombre

Se programó manualmente a través de la variable ```randomSeed``` una semilla aleatoria para mezclar el resultado de documentos y poder mostrarlos de forma aleatoria en el FrontEnd. Si se pasa este parámetro, sobrescribirá al parámetro de ```orderBy```. Si el parámetro no recibe nada, por defecto los ordenará como se deseé con el parámetro ```orderBy```

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-franchises?orderBy=name-asc&randomSeed=15&page=2&pageSize=2```):

```json
{
  "data": [
    {
      "name": "Don't know, Marvel maybe",
      "description": "Don't know, Marvel maybe",
      "slug": "marvel",
      "locale": "en",
      "createdAt": "2025-04-27T02:41:05.767Z",
      "id": 8,
      "mht_movies": [],
      "mht_series": [],
      "logo": {
        "name": "test-serie1.jpg",
        "alternativeText": null,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_test-serie1.jpg",
            "hash": "thumbnail_test_serie1_17e624c110",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 156,
            "height": 156,
            "size": 6.27,
            "sizeInBytes": 6267,
            "url": "/uploads/thumbnail_test_serie1_17e624c110.jpg"
          },
          "small": {
            "name": "small_test-serie1.jpg",
            "hash": "small_test_serie1_17e624c110",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 500,
            "size": 27.73,
            "sizeInBytes": 27729,
            "url": "/uploads/small_test_serie1_17e624c110.jpg"
          }
        }
      }
    }
  ],
  "meta": {
    "page": "2",
    "pageSize": "2",
    "totalPages": 2
  }
}
```

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-franchises?locale=ea```):

```json
{
  "data": [],
  "meta": {
    "page": "1",
    "pageSize": 0,
    "totalPages": null
  }
}
```

### ℹ️ GET /api/mht-franchises/:slug

Obtener una franquicia en específico

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mht-franchises/star-wars```: Consultando el registro con el endpoint que se buscaba con la configuración de idioma por defecto
- ```/api/mht-franchises/marvel?locale=en```: Consultando el registro con el endpoint que se buscaba con la localización de inglés
- ```/api/mht-franchises/dceu?locale=es-419```: Consultando el registro con el endpoint que se buscaba con la localización de español latinoamérica

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-franchises/star-wars```):

```json
{
  "data": {
    "name": "Star Wars wuahaha",
    "description": "War! The Republic is crumbling\nunder attacks by the ruthless\nSith Lord, Count Dooku.\nThere are heroes on both sides.\nEvil is everywhere.\n\nIn a stunning move, the\nfiendish droid leader, General\nGrievous, has swept into the\nRepublic capital and kidnapped\nChancellor Palpatine, leader of\nthe Galactic Senate.\n\nAs the Separatist Droid Army\nattempts to flee the besieged\ncapital with their valuable\nhostage, two Jedi Knights lead a\ndesperate mission to rescue the\ncaptive Chancellor…",
    "slug": "star-wars",
    "locale": "en",
    "createdAt": "2025-04-27T02:27:15.774Z",
    "id": 4,
    "mht_movies": [
      {
        "name": "Star Wars 1 test",
        "watching_date": "2014-02-02T06:00:00.000Z",
        "watching_date_format": "DD/MM/AAAA",
        "grade": 67.5,
        "review": "This is a Star Wars test",
        "description": "This is a Star Wars test",
        "slug": "star-wars-1",
        "locale": "en",
        "createdAt": "2025-04-28T00:49:45.169Z",
        "id": 4,
        "logo": {
          "name": "test-juego1.jpg",
          "alternativeText": null,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_test-juego1.jpg",
              "hash": "thumbnail_test_juego1_882db78950",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 156,
              "height": 156,
              "size": 5.35,
              "sizeInBytes": 5349,
              "url": "/uploads/thumbnail_test_juego1_882db78950.jpg"
            },
            "small": {
              "name": "small_test-juego1.jpg",
              "hash": "small_test_juego1_882db78950",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 500,
              "height": 500,
              "size": 28.19,
              "sizeInBytes": 28190,
              "url": "/uploads/small_test_juego1_882db78950.jpg"
            }
          }
        }
      },
      {
        "name": "Star Wars 2 test",
        "watching_date": "2015-03-03T06:00:00.000Z",
        "watching_date_format": "DD/MM/AAAA",
        "grade": 65,
        "review": "SW 2 test",
        "description": "SW 2 test",
        "slug": "star-wars-2",
        "locale": "en",
        "createdAt": "2025-04-28T00:51:41.627Z",
        "id": 8,
        "logo": {
          "name": "01-hermes-test.jpg",
          "alternativeText": null,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_01-hermes-test.jpg",
              "hash": "thumbnail_01_hermes_test_594ba8dc1e",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 156,
              "height": 156,
              "size": 3.7,
              "sizeInBytes": 3698,
              "url": "/uploads/thumbnail_01_hermes_test_594ba8dc1e.jpg"
            },
            "small": {
              "name": "small_01-hermes-test.jpg",
              "hash": "small_01_hermes_test_594ba8dc1e",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 500,
              "height": 500,
              "size": 18.27,
              "sizeInBytes": 18267,
              "url": "/uploads/small_01_hermes_test_594ba8dc1e.jpg"
            },
            "medium": {
              "name": "medium_01-hermes-test.jpg",
              "hash": "medium_01_hermes_test_594ba8dc1e",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 750,
              "height": 750,
              "size": 31.53,
              "sizeInBytes": 31533,
              "url": "/uploads/medium_01_hermes_test_594ba8dc1e.jpg"
            },
            "large": {
              "name": "large_01-hermes-test.jpg",
              "hash": "large_01_hermes_test_594ba8dc1e",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 1000,
              "height": 1000,
              "size": 47.29,
              "sizeInBytes": 47289,
              "url": "/uploads/large_01_hermes_test_594ba8dc1e.jpg"
            }
          }
        }
      }
    ],
    "mht_series": [
      {
        "name": "Clone Wars test",
        "initial_watching_date": "2023-07-07T06:00:00.000Z",
        "initial_watching_date_format": "??/MM/AAAA",
        "end_watching_date": "2024-01-03T06:00:00.000Z",
        "end_watching_date_format": "DD/MM/AAAA",
        "grade": 100,
        "review": "Hey Snips",
        "description": "Hey Snips",
        "slug": "clone-wars",
        "locale": "en",
        "createdAt": "2025-04-28T00:53:12.868Z",
        "id": 2,
        "logo": {
          "name": "01-hermes-test.jpg",
          "alternativeText": null,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_01-hermes-test.jpg",
              "hash": "thumbnail_01_hermes_test_594ba8dc1e",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 156,
              "height": 156,
              "size": 3.7,
              "sizeInBytes": 3698,
              "url": "/uploads/thumbnail_01_hermes_test_594ba8dc1e.jpg"
            },
            "small": {
              "name": "small_01-hermes-test.jpg",
              "hash": "small_01_hermes_test_594ba8dc1e",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 500,
              "height": 500,
              "size": 18.27,
              "sizeInBytes": 18267,
              "url": "/uploads/small_01_hermes_test_594ba8dc1e.jpg"
            },
            "medium": {
              "name": "medium_01-hermes-test.jpg",
              "hash": "medium_01_hermes_test_594ba8dc1e",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 750,
              "height": 750,
              "size": 31.53,
              "sizeInBytes": 31533,
              "url": "/uploads/medium_01_hermes_test_594ba8dc1e.jpg"
            },
            "large": {
              "name": "large_01-hermes-test.jpg",
              "hash": "large_01_hermes_test_594ba8dc1e",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 1000,
              "height": 1000,
              "size": 47.29,
              "sizeInBytes": 47289,
              "url": "/uploads/large_01_hermes_test_594ba8dc1e.jpg"
            }
          }
        }
      }
    ],
    "logo": {
      "name": "test-serie1.jpg",
      "alternativeText": null,
      "formats": {
        "thumbnail": {
          "name": "thumbnail_test-serie1.jpg",
          "hash": "thumbnail_test_serie1_17e624c110",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 156,
          "height": 156,
          "size": 6.27,
          "sizeInBytes": 6267,
          "url": "/uploads/thumbnail_test_serie1_17e624c110.jpg"
        },
        "small": {
          "name": "small_test-serie1.jpg",
          "hash": "small_test_serie1_17e624c110",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 500,
          "height": 500,
          "size": 27.73,
          "sizeInBytes": 27729,
          "url": "/uploads/small_test_serie1_17e624c110.jpg"
        }
      }
    }
  },
  "meta": {

  }
}
```

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-franchises/noexisto```):

```json
{
  "data": null,
  "error": {
    "status": 404,
    "name": "NotFoundError",
    "message": "Not Found",
    "details": {

    }
  }
}
```

## Películas

La colección que guarda los posts referentes a las películas de las que quiero hablar

La estructura de la colección es la siguiente:

- **name:** Text *(Short text, required, localization enabled)*: Nombre de la película
- **logo:** Media *(Single media, only images allowed, required)*: Imagen en escala 27:40 del logotipo de la película
- **watching_date:** Date *(Datetime, required)*: Fecha en la que vi la película
- **watching_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha en la que vi la película indicada en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año
- **grade** Number *(Decimal)*: La calificación que le doy a la película de 0 a 100 con solamente un decimal posible
- **mht_franchise** Relation with MHT-Franchise *(MHT-Franchise has many MHT-Movies)*: Relación con las películas relacionadas a esta franquicia
- **review:** Text *(Long text, localization enabled)*: Pequeña reseña de la película
- **description:** Rich text (Markdown) *(Localization enabled)*: Descripción más extensa de la película
- **slug:** UID *(Required)*: Slug que se usa desde el FrontEnd para acceder a un elemento específico de la colección
- **release_date:** Date *(Datetime, required)*: Fecha de salida de la película
- **release_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha de salida de la película indicada en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/mht-movies

Obtener todas las películas

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mht-movies?locale=es-419```: Trae las películas con localización en español latino usando las configuraciones por defecto de paginación y orden
- ```/api/mht-movies?orderBy=name-asc&page=2&pageSize=2```: Trae las películas ordenando por nombre ascendentemente usando una paginación de tamaño de dos registros encontrándonos en la página 2
- ```/api/mht-movies?exclude=star-wars-1&randomSeed=15&page=1&pageSize=2```: Trae las películas excluyendo el registro con slug star-wars-1 usando una semilla aleatoria para mezclar los registros que trae con un tamaño de página de 2 registros en la página 1

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Se programó manualmente el parámetro ```franchise``` para agrupar las películas por el slug de una franquicia. Si no se le pasa nada, regresa todas las películas

Se programó manualmente el parámetro ```search``` para poder realizar búsquedas de películas. Si este parámetro está vacío, no realizará ninguna búsqueda pero de llevar algo, buscará solamente coincidencias con el campo del nombre de la película

Se programó manualmente el parámetro ```exclude``` que permite excluir un registro a través de pasarle su slug. Esto enfocado para cuando se quieran dar sugerencias dentro de una consulta de una película y evitar sugerir la misma película que se está consultando. Se pasaría entonces el slug de la película que se quiere excluir

Se programó manualmente la paginación a través de las variables ```page``` y ```pageSize``` que describen el número de página y el tamaño de la página deseado respectivamente. Si el número de página no es indicado, por defecto tomará el valor de 1. Si el tamaño de la página no es indicado, por defecto tomará el valor de la longitud del arreglo regresado. Si el número de página es mayor al total de páginas que habría según los parámetros de paginación, el número de página pasa a ser 1 devolviendo a la primera página

Se programó una forma de ordenar los resultados de este endpoint a través de la variable ```orderBy``` la cual puede obtener los siguientes valores:

- ```name-asc```: Ordena los resultados alfabéticamente en función del nombre
- ```name-desc```: Ordena los resultados en orden alfabético inverso en función del nombre
- ```releaseDate-asc```: Ordena los resultados de forma ascendente en función de la fecha de salida de la película
- ```releaseDate-desc```: Ordena los resultados de forma descendente en función de la fecha de salida de la película
- ```watchingDate-asc```: Ordena los resultados de forma ascendente en función de la fecha en la que vi la película
- ```watchingDate-desc```: Ordena los resultados de forma descendente en función de la fecha en la que vi la película
- ```createdAtDate-asc```: Ordena los resultados de forma ascendente en función de la fecha en la que creé mi entrada de blog sobre esta película
- ```createdAtDate-desc```: Ordena los resultados de forma descendente en función de la fecha en la que creé mi entrada de blog sobre esta película
- ```grade-asc```: Ordena los resultados de forma ascendente en función de la calificación que le di a esta película
- ```grade-desc```: Ordena los resultados de forma descendente en función de la calificación que le di a esta película
- Cualquier otro valor que se le pase, incluso si no se le pasa un valor, ordenará por defecto el resultado alfabéticamente en función del nombre

Se programó manualmente a través de la variable ```randomSeed``` una semilla aleatoria para mezclar el resultado de documentos y poder mostrarlos de forma aleatoria en el FrontEnd. Si se pasa este parámetro, sobrescribirá al parámetro de ```orderBy```. Si el parámetro no recibe nada, por defecto los ordenará como se deseé con el parámetro ```orderBy```

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-movies?randomSeed=4```):

```json
{
  "data": [
    {
      "name": "Star Wars 1 test",
      "description": "This is a Star Wars test",
      "watching_date": "2014-02-02T06:00:00.000Z",
      "watching_date_format": "DD/MM/AAAA",
      "release_date": "2025-04-02T06:00:00.000Z",
      "release_date_format": "DD/MM/AAAA",
      "grade": 67.5,
      "review": "This is a Star Wars test",
      "slug": "star-wars-1",
      "locale": "en",
      "createdAt": "2025-04-28T00:49:45.169Z",
      "id": 4,
      "mht_franchise": {
        "name": "Star Wars wuahaha",
        "slug": "star-wars",
        "locale": "en",
        "createdAt": "2025-04-27T02:27:15.774Z",
        "id": 4,
        "logo": {
          "name": "test-serie1.jpg",
          "alternativeText": null,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_test-serie1.jpg",
              "hash": "thumbnail_test_serie1_17e624c110",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 156,
              "height": 156,
              "size": 6.27,
              "sizeInBytes": 6267,
              "url": "/uploads/thumbnail_test_serie1_17e624c110.jpg"
            },
            "small": {
              "name": "small_test-serie1.jpg",
              "hash": "small_test_serie1_17e624c110",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 500,
              "height": 500,
              "size": 27.73,
              "sizeInBytes": 27729,
              "url": "/uploads/small_test_serie1_17e624c110.jpg"
            }
          }
        }
      },
      "logo": {
        "name": "test-juego1.jpg",
        "alternativeText": null,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_test-juego1.jpg",
            "hash": "thumbnail_test_juego1_882db78950",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 156,
            "height": 156,
            "size": 5.35,
            "sizeInBytes": 5349,
            "url": "/uploads/thumbnail_test_juego1_882db78950.jpg"
          },
          "small": {
            "name": "small_test-juego1.jpg",
            "hash": "small_test_juego1_882db78950",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 500,
            "size": 28.19,
            "sizeInBytes": 28190,
            "url": "/uploads/small_test_juego1_882db78950.jpg"
          }
        }
      }
    },
    {
      "name": "Star Wars 2 test",
      "description": "SW 2 test",
      "watching_date": "2015-03-03T06:00:00.000Z",
      "watching_date_format": "DD/MM/AAAA",
      "release_date": "2022-04-06T05:00:00.000Z",
      "release_date_format": "??/MM/AAAA",
      "grade": 65,
      "review": "SW 2 test",
      "slug": "star-wars-2",
      "locale": "en",
      "createdAt": "2025-04-28T00:51:41.627Z",
      "id": 8,
      "mht_franchise": {
        "name": "Star Wars wuahaha",
        "slug": "star-wars",
        "locale": "en",
        "createdAt": "2025-04-27T02:27:15.774Z",
        "id": 4,
        "logo": {
          "name": "test-serie1.jpg",
          "alternativeText": null,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_test-serie1.jpg",
              "hash": "thumbnail_test_serie1_17e624c110",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 156,
              "height": 156,
              "size": 6.27,
              "sizeInBytes": 6267,
              "url": "/uploads/thumbnail_test_serie1_17e624c110.jpg"
            },
            "small": {
              "name": "small_test-serie1.jpg",
              "hash": "small_test_serie1_17e624c110",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 500,
              "height": 500,
              "size": 27.73,
              "sizeInBytes": 27729,
              "url": "/uploads/small_test_serie1_17e624c110.jpg"
            }
          }
        }
      },
      "logo": {
        "name": "01-hermes-test.jpg",
        "alternativeText": null,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_01-hermes-test.jpg",
            "hash": "thumbnail_01_hermes_test_594ba8dc1e",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 156,
            "height": 156,
            "size": 3.7,
            "sizeInBytes": 3698,
            "url": "/uploads/thumbnail_01_hermes_test_594ba8dc1e.jpg"
          },
          "small": {
            "name": "small_01-hermes-test.jpg",
            "hash": "small_01_hermes_test_594ba8dc1e",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 500,
            "size": 18.27,
            "sizeInBytes": 18267,
            "url": "/uploads/small_01_hermes_test_594ba8dc1e.jpg"
          },
          "medium": {
            "name": "medium_01-hermes-test.jpg",
            "hash": "medium_01_hermes_test_594ba8dc1e",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 750,
            "height": 750,
            "size": 31.53,
            "sizeInBytes": 31533,
            "url": "/uploads/medium_01_hermes_test_594ba8dc1e.jpg"
          },
          "large": {
            "name": "large_01-hermes-test.jpg",
            "hash": "large_01_hermes_test_594ba8dc1e",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 1000,
            "height": 1000,
            "size": 47.29,
            "sizeInBytes": 47289,
            "url": "/uploads/large_01_hermes_test_594ba8dc1e.jpg"
          }
        }
      }
    }
  ],
  "meta": {
    "page": "1",
    "pageSize": 2,
    "totalPages": 1
  }
}
```

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-franchises?locale=ea```):

```json
{
  "data": [],
  "meta": {
    "page": "1",
    "pageSize": 0,
    "totalPages": null
  }
}
```

### ℹ️ GET /api/mht-movies/:slug

Obtener una película en específico

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mht-movies/star-wars-1```: Consultando el registro con el endpoint que se buscaba con la configuración de idioma por defecto
- ```/api/mht-movies/avengers-infinity-war?locale=en```: Consultando el registro con el endpoint que se buscaba con la localización de inglés
- ```/api/mht-movies/star-wars-the-clone-wars?locale=es-419```: Consultando el registro con el endpoint que se buscaba con la localización de español latinoamérica

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-movies/star-wars-1```):

```json
{
  "data": {
    "name": "Star Wars 1 test",
    "description": "This is a Star Wars test",
    "watching_date": "2014-02-02T06:00:00.000Z",
    "watching_date_format": "DD/MM/AAAA",
    "release_date": "2025-04-02T06:00:00.000Z",
    "release_date_format": "DD/MM/AAAA",
    "grade": 67.5,
    "review": "This is a Star Wars test",
    "slug": "star-wars-1",
    "locale": "en",
    "createdAt": "2025-04-28T00:49:45.169Z",
    "id": 4,
    "mht_franchise": {
      "name": "Star Wars wuahaha",
      "slug": "star-wars",
      "locale": "en",
      "createdAt": "2025-04-27T02:27:15.774Z",
      "id": 4,
      "logo": {
        "name": "test-serie1.jpg",
        "alternativeText": null,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_test-serie1.jpg",
            "hash": "thumbnail_test_serie1_17e624c110",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 156,
            "height": 156,
            "size": 6.27,
            "sizeInBytes": 6267,
            "url": "/uploads/thumbnail_test_serie1_17e624c110.jpg"
          },
          "small": {
            "name": "small_test-serie1.jpg",
            "hash": "small_test_serie1_17e624c110",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 500,
            "size": 27.73,
            "sizeInBytes": 27729,
            "url": "/uploads/small_test_serie1_17e624c110.jpg"
          }
        }
      }
    },
    "logo": {
      "name": "test-juego1.jpg",
      "alternativeText": null,
      "formats": {
        "thumbnail": {
          "name": "thumbnail_test-juego1.jpg",
          "hash": "thumbnail_test_juego1_882db78950",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 156,
          "height": 156,
          "size": 5.35,
          "sizeInBytes": 5349,
          "url": "/uploads/thumbnail_test_juego1_882db78950.jpg"
        },
        "small": {
          "name": "small_test-juego1.jpg",
          "hash": "small_test_juego1_882db78950",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 500,
          "height": 500,
          "size": 28.19,
          "sizeInBytes": 28190,
          "url": "/uploads/small_test_juego1_882db78950.jpg"
        }
      }
    }
  },
  "meta": {

  }
}
```

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-movies/noexisto```):

```json
{
  "data": null,
  "error": {
    "status": 404,
    "name": "NotFoundError",
    "message": "Not Found",
    "details": {

    }
  }
}
```

## Series

La colección que guarda los posts referentes a las series de las que quiero hablar

La estructura de la colección es la siguiente:

- **name:** Text *(Short text, required, localization enabled)*: Nombre de la serie
- **logo:** Media *(Single media, only images allowed, required)*: Imagen en escala 27:40 del logotipo de la serie
- **initial_watching_date:** Date *(Datetime, required)*: Fecha en la que inicié a ver la serie
- **initial_watching_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha en la que inicié a ver la serie indicada en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año
- **end_watching_date:** Date *(Datetime)*: Fecha en la que terminé de ver la serie
- **end_watching_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha en la que terminé de ver la serie indicada en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año
- **grade** Number *(Decimal)*: La calificación que le doy a la serie de 0 a 100 con solamente un decimal posible
- **mht_franchise** Relation with MHT-Franchise *(MHT-Franchise has many MHT-Series)*: Relación con las series relacionadas a esta franquicia
- **review:** Text *(Long text, localization enabled)*: Pequeña reseña de la serie
- **description:** Rich text (Markdown) *(Localization enabled)*: Descripción más extensa de la serie
- **slug:** UID *(Required)*: Slug que se usa desde el FrontEnd para acceder a un elemento específico de la colección
- **release_date:** Date *(Datetime, required)*: Fecha de salida de la serie
- **release_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha de salida de la serie indicada en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año
- **mht_seasons** Relation with MHT-Season *(MHT-Serie has many MHT-Seasons)*: Relación con las temporadas relacionadas a esta serie

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/mht-series

Obtener todas las series

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mht-series?locale=es-419```: Trae las series con localización en español latino usando las configuraciones por defecto de paginación y orden
- ```/api/mht-series?orderBy=name-asc&page=2&pageSize=2```: Trae las series ordenando por nombre ascendentemente usando una paginación de tamaño de dos registros encontrándonos en la página 2
- ```/api/mht-series?exclude=clone-wars&randomSeed=15&page=1&pageSize=2```: Trae las series excluyendo el registro con slug clone-wars usando una semilla aleatoria para mezclar los registros que trae con un tamaño de página de 2 registros en la página 1

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Se programó manualmente el parámetro ```franchise``` para agrupar las series por el slug de una franquicia. Si no se le pasa nada, regresa todas las series

Se programó manualmente el parámetro ```search``` para poder realizar búsquedas de series. Si este parámetro está vacío, no realizará ninguna búsqueda pero de llevar algo, buscará solamente coincidencias con el campo del nombre de la serie

Se programó manualmente el parámetro ```exclude``` que permite excluir un registro a través de pasarle su slug. Esto enfocado para cuando se quieran dar sugerencias dentro de una consulta de una serie y evitar sugerir la misma serie que se está consultando. Se pasaría entonces el slug de la serie que se quiere excluir

Se programó manualmente la paginación a través de las variables ```page``` y ```pageSize``` que describen el número de página y el tamaño de la página deseado respectivamente. Si el número de página no es indicado, por defecto tomará el valor de 1. Si el tamaño de la página no es indicado, por defecto tomará el valor de la longitud del arreglo regresado. Si el número de página es mayor al total de páginas que habría según los parámetros de paginación, el número de página pasa a ser 1 devolviendo a la primera página

Se programó una forma de ordenar los resultados de este endpoint a través de la variable ```orderBy``` la cual puede obtener los siguientes valores:

- ```name-asc```: Ordena los resultados alfabéticamente en función del nombre
- ```name-desc```: Ordena los resultados en orden alfabético inverso en función del nombre
- ```releaseDate-asc```: Ordena los resultados de forma ascendente en función de la fecha de salida de la serie
- ```releaseDate-desc```: Ordena los resultados de forma descendente en función de la fecha de salida de la serie
- ```initialWatchingDate-asc```: Ordena los resultados de forma ascendente en función de la fecha en la que empecé a ver la serie
- ```initialWatchingDate-desc```: Ordena los resultados de forma descendente en función de la fecha en la que empecé a ver la serie
- ```createdAtDate-asc```: Ordena los resultados de forma ascendente en función de la fecha en la que creé mi entrada de blog sobre esta serie
- ```createdAtDate-desc```: Ordena los resultados de forma descendente en función de la fecha en la que creé mi entrada de blog sobre esta serie
- ```grade-asc```: Ordena los resultados de forma ascendente en función de la calificación que le di a esta serie
- ```grade-desc```: Ordena los resultados de forma descendente en función de la calificación que le di a esta serie
- Cualquier otro valor que se le pase, incluso si no se le pasa un valor, ordenará por defecto el resultado alfabéticamente en función del nombre

Se programó manualmente a través de la variable ```randomSeed``` una semilla aleatoria para mezclar el resultado de documentos y poder mostrarlos de forma aleatoria en el FrontEnd. Si se pasa este parámetro, sobrescribirá al parámetro de ```orderBy```. Si el parámetro no recibe nada, por defecto los ordenará como se deseé con el parámetro ```orderBy```

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-series?search=clone```):

```json
{
  "data": [
    {
      "name": "Clone Wars test",
      "description": "Hey Snips",
      "initial_watching_date": "2023-07-07T06:00:00.000Z",
      "initial_watching_date_format": "??/MM/AAAA",
      "end_watching_date": "2024-01-03T06:00:00.000Z",
      "end_watching_date_format": "DD/MM/AAAA",
      "release_date": null,
      "release_date_format": null,
      "grade": 100,
      "review": "Hey Snips",
      "slug": "clone-wars",
      "locale": "en",
      "createdAt": "2025-04-28T00:53:12.868Z",
      "id": 2,
      "mht_franchise": {
        "name": "Star Wars wuahaha",
        "slug": "star-wars",
        "locale": "en",
        "createdAt": "2025-04-27T02:27:15.774Z",
        "id": 4,
        "logo": {
          "name": "test-serie1.jpg",
          "alternativeText": null,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_test-serie1.jpg",
              "hash": "thumbnail_test_serie1_17e624c110",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 156,
              "height": 156,
              "size": 6.27,
              "sizeInBytes": 6267,
              "url": "/uploads/thumbnail_test_serie1_17e624c110.jpg"
            },
            "small": {
              "name": "small_test-serie1.jpg",
              "hash": "small_test_serie1_17e624c110",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 500,
              "height": 500,
              "size": 27.73,
              "sizeInBytes": 27729,
              "url": "/uploads/small_test_serie1_17e624c110.jpg"
            }
          }
        }
      },
      "mht_seasons": [],
      "logo": {
        "name": "01-hermes-test.jpg",
        "alternativeText": null,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_01-hermes-test.jpg",
            "hash": "thumbnail_01_hermes_test_594ba8dc1e",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 156,
            "height": 156,
            "size": 3.7,
            "sizeInBytes": 3698,
            "url": "/uploads/thumbnail_01_hermes_test_594ba8dc1e.jpg"
          },
          "small": {
            "name": "small_01-hermes-test.jpg",
            "hash": "small_01_hermes_test_594ba8dc1e",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 500,
            "size": 18.27,
            "sizeInBytes": 18267,
            "url": "/uploads/small_01_hermes_test_594ba8dc1e.jpg"
          },
          "medium": {
            "name": "medium_01-hermes-test.jpg",
            "hash": "medium_01_hermes_test_594ba8dc1e",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 750,
            "height": 750,
            "size": 31.53,
            "sizeInBytes": 31533,
            "url": "/uploads/medium_01_hermes_test_594ba8dc1e.jpg"
          },
          "large": {
            "name": "large_01-hermes-test.jpg",
            "hash": "large_01_hermes_test_594ba8dc1e",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 1000,
            "height": 1000,
            "size": 47.29,
            "sizeInBytes": 47289,
            "url": "/uploads/large_01_hermes_test_594ba8dc1e.jpg"
          }
        }
      }
    }
  ],
  "meta": {
    "page": "1",
    "pageSize": 1,
    "totalPages": 1
  }
}
```

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-series?search=clonicas```):

```json
{
  "data": [],
  "meta": {
    "page": "1",
    "pageSize": 0,
    "totalPages": null
  }
}
```

### ℹ️ GET /api/mht-series/:slug

Obtener una serie en específico

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mht-series/clone-wars```: Consultando el registro con el endpoint que se buscaba con la configuración de idioma por defecto
- ```/api/mht-series/ninjago?locale=en```: Consultando el registro con el endpoint que se buscaba con la localización de inglés
- ```/api/mht-series/star-wars-rebels?locale=es-419```: Consultando el registro con el endpoint que se buscaba con la localización de español latinoamérica

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-series/clone-wars```):

```json
{
  "data": {
    "name": "Clone Wars test",
    "description": "Hey Snips",
    "initial_watching_date": "2023-07-07T06:00:00.000Z",
    "initial_watching_date_format": "??/MM/AAAA",
    "end_watching_date": "2024-01-03T06:00:00.000Z",
    "end_watching_date_format": "DD/MM/AAAA",
    "release_date": null,
    "release_date_format": null,
    "grade": 100,
    "review": "Hey Snips",
    "slug": "clone-wars",
    "locale": "en",
    "createdAt": "2025-04-28T00:53:12.868Z",
    "id": 2,
    "mht_franchise": {
      "name": "Star Wars wuahaha",
      "slug": "star-wars",
      "locale": "en",
      "createdAt": "2025-04-27T02:27:15.774Z",
      "id": 4,
      "logo": {
        "name": "test-serie1.jpg",
        "alternativeText": null,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_test-serie1.jpg",
            "hash": "thumbnail_test_serie1_17e624c110",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 156,
            "height": 156,
            "size": 6.27,
            "sizeInBytes": 6267,
            "url": "/uploads/thumbnail_test_serie1_17e624c110.jpg"
          },
          "small": {
            "name": "small_test-serie1.jpg",
            "hash": "small_test_serie1_17e624c110",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 500,
            "size": 27.73,
            "sizeInBytes": 27729,
            "url": "/uploads/small_test_serie1_17e624c110.jpg"
          }
        }
      }
    },
    "mht_seasons": [],
    "logo": {
      "name": "01-hermes-test.jpg",
      "alternativeText": null,
      "formats": {
        "thumbnail": {
          "name": "thumbnail_01-hermes-test.jpg",
          "hash": "thumbnail_01_hermes_test_594ba8dc1e",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 156,
          "height": 156,
          "size": 3.7,
          "sizeInBytes": 3698,
          "url": "/uploads/thumbnail_01_hermes_test_594ba8dc1e.jpg"
        },
        "small": {
          "name": "small_01-hermes-test.jpg",
          "hash": "small_01_hermes_test_594ba8dc1e",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 500,
          "height": 500,
          "size": 18.27,
          "sizeInBytes": 18267,
          "url": "/uploads/small_01_hermes_test_594ba8dc1e.jpg"
        },
        "medium": {
          "name": "medium_01-hermes-test.jpg",
          "hash": "medium_01_hermes_test_594ba8dc1e",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 750,
          "height": 750,
          "size": 31.53,
          "sizeInBytes": 31533,
          "url": "/uploads/medium_01_hermes_test_594ba8dc1e.jpg"
        },
        "large": {
          "name": "large_01-hermes-test.jpg",
          "hash": "large_01_hermes_test_594ba8dc1e",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 1000,
          "height": 1000,
          "size": 47.29,
          "sizeInBytes": 47289,
          "url": "/uploads/large_01_hermes_test_594ba8dc1e.jpg"
        }
      }
    }
  },
  "meta": {

  }
}
```

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-series/noexisto```):

```json
{
  "data": null,
  "error": {
    "status": 404,
    "name": "NotFoundError",
    "message": "Not Found",
    "details": {

    }
  }
}
```

## Temporadas

La colección que guarda los posts referentes a las temporadas de series de las que quiero hablar

La estructura de la colección es la siguiente:

- **name:** Text *(Short text, required, localization enabled)*: Nombre de la temporada
- **initial_watching_date:** Date *(Datetime, required)*: Fecha en la que inicié a ver la temporada
- **initial_watching_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha en la que inicié a ver la temporada indicada en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año
- **end_watching_date:** Date *(Datetime)*: Fecha en la que terminé de ver la temporada
- **end_watching_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha en la que terminé de ver la temporada indicada en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año
- **logo:** Media *(Single media, only images allowed, required)*: Imagen en escala 27:40 del logotipo de la temporada
- **grade** Number *(Decimal)*: La calificación que le doy a la temporada de 0 a 100 con solamente un decimal posible
- **mht_serie** Relation with MHT-Serie *(MHT-Serie has many MHT-Seasons)*: Relación con las temporadas relacionadas a esta serie
- **review:** Text *(Long text, localization enabled)*: Pequeña reseña de la temporada
- **description:** Rich text (Markdown) *(Localization enabled)*: Descripción más extensa de la temporada
- **mht_chapters** Relation with MHT-Chapter *(MHT-Season belongs to many MHT-Chapters)*: Relación con los capítulos relacionados a esta temporada
- **release_date:** Date *(Datetime, required)*: Fecha de salida de la temporada
- **release_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha de salida de la temporada indicada en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año
- **slug:** UID *(Required)*: Slug que se usa desde el FrontEnd para acceder a un elemento específico de la colección
- **season_number** Text *(Short text, required)*: El número de la temporada que es sobre su serie (se cambió a texto para poder no sólo poner números, sino poder poner también "special" o "pilot" u otros casos raros de las series)

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/mht-seasons

Obtener todas las temporadas

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mht-seasons?locale=es-419```: Trae las temporadas con localización en español latino usando las configuraciones por defecto de paginación y orden
- ```/api/mht-seasons?orderBy=name-asc&page=2&pageSize=2```: Trae las temporadas ordenando por nombre ascendentemente usando una paginación de tamaño de dos registros encontrándonos en la página 2
- ```/api/mht-seasons?exclude=clone-wars&randomSeed=15&page=1&pageSize=2```: Trae las temporadas excluyendo el registro con slug clone-wars usando una semilla aleatoria para mezclar los registros que trae con un tamaño de página de 2 registros en la página 1

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Se programó manualmente el parámetro ```serie``` para agrupar las temporadas por el slug de una serie. Si no se le pasa nada, regresa todas las temporadas

Se programó manualmente el parámetro ```search``` para poder realizar búsquedas de temporadas. Si este parámetro está vacío, no realizará ninguna búsqueda pero de llevar algo, buscará solamente coincidencias con el campo del nombre de la temporada

Se programó manualmente el parámetro ```exclude``` que permite excluir un registro a través de pasarle su slug. Esto enfocado para cuando se quieran dar sugerencias dentro de una consulta de una temporada y evitar sugerir la misma temporada que se está consultando. Se pasaría entonces el slug de la temporada que se quiere excluir

Se programó manualmente la paginación a través de las variables ```page``` y ```pageSize``` que describen el número de página y el tamaño de la página deseado respectivamente. Si el número de página no es indicado, por defecto tomará el valor de 1. Si el tamaño de la página no es indicado, por defecto tomará el valor de la longitud del arreglo regresado. Si el número de página es mayor al total de páginas que habría según los parámetros de paginación, el número de página pasa a ser 1 devolviendo a la primera página

Se programó una forma de ordenar los resultados de este endpoint a través de la variable ```orderBy``` la cual puede obtener los siguientes valores:

- ```name-asc```: Ordena los resultados alfabéticamente en función del nombre
- ```name-desc```: Ordena los resultados en orden alfabético inverso en función del nombre
- ```seasonNumber-asc```: Ordena los resultados de forma ascendente en función del número de temporada
- ```seasonNumber-desc```: Ordena los resultados de forma descendente en función del número de temporada
- ```releaseDate-asc```: Ordena los resultados de forma ascendente en función de la fecha de salida de la temporada
- ```releaseDate-desc```: Ordena los resultados de forma descendente en función de la fecha de salida de la temporada
- ```initialWatchingDate-asc```: Ordena los resultados de forma ascendente en función de la fecha en la que empecé a ver la temporada
- ```initialWatchingDate-desc```: Ordena los resultados de forma descendente en función de la fecha en la que empecé a ver la temporada
- ```createdAtDate-asc```: Ordena los resultados de forma ascendente en función de la fecha en la que creé mi entrada de blog sobre esta temporada
- ```createdAtDate-desc```: Ordena los resultados de forma descendente en función de la fecha en la que creé mi entrada de blog sobre esta temporada
- ```grade-asc```: Ordena los resultados de forma ascendente en función de la calificación que le di a esta temporada
- ```grade-desc```: Ordena los resultados de forma descendente en función de la calificación que le di a esta temporada
- Cualquier otro valor que se le pase, incluso si no se le pasa un valor, ordenará por defecto el resultado alfabéticamente en función del nombre

Se programó manualmente a través de la variable ```randomSeed``` una semilla aleatoria para mezclar el resultado de documentos y poder mostrarlos de forma aleatoria en el FrontEnd. Si se pasa este parámetro, sobrescribirá al parámetro de ```orderBy```. Si el parámetro no recibe nada, por defecto los ordenará como se deseé con el parámetro ```orderBy```

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-seasons?search=ninjago-rebooted```):

```json
{
  "data": [
    {
      "name": "Rebooted",
      "season_number": 3,
      "initial_watching_date": "2014-04-01T06:00:00.000Z",
      "initial_watching_date_format": "??/MM/AAAA",
      "end_watching_date": "2014-11-09T06:00:00.000Z",
      "end_watching_date_format": "??/MM/AAAA",
      "release_date": "2014-04-08T05:00:00.000Z",
      "release_date_format": "DD/MM/AAAA",
      "grade": 99,
      "review": "S3",
      "description": "s3",
      "slug": "ninjago-rebooted",
      "locale": "en",
      "createdAt": "2025-04-29T19:43:45.050Z",
      "id": 13,
      "mht_serie": {
        "name": "Ninjago test",
        "initial_watching_date": "2012-04-01T06:00:00.000Z",
        "initial_watching_date_format": "DD/MM/AAAA",
        "end_watching_date": "2019-04-01T06:00:00.000Z",
        "end_watching_date_format": "DD/MM/AAAA",
        "release_date": "2012-04-01T06:00:00.000Z",
        "release_date_format": "DD/MM/AAAA",
        "grade": 85,
        "review": null,
        "slug": "ninjago",
        "locale": "en",
        "createdAt": "2025-04-29T19:38:02.272Z",
        "id": 8,
        "logo": {
          "name": "test-serie1.jpg",
          "alternativeText": null,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_test-serie1.jpg",
              "hash": "thumbnail_test_serie1_17e624c110",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 156,
              "height": 156,
              "size": 6.27,
              "sizeInBytes": 6267,
              "url": "/uploads/thumbnail_test_serie1_17e624c110.jpg"
            },
            "small": {
              "name": "small_test-serie1.jpg",
              "hash": "small_test_serie1_17e624c110",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 500,
              "height": 500,
              "size": 27.73,
              "sizeInBytes": 27729,
              "url": "/uploads/small_test_serie1_17e624c110.jpg"
            }
          }
        }
      },
      "mht_chapters": [],
      "logo": {
        "name": "01-hermes-test.jpg",
        "alternativeText": null,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_01-hermes-test.jpg",
            "hash": "thumbnail_01_hermes_test_594ba8dc1e",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 156,
            "height": 156,
            "size": 3.7,
            "sizeInBytes": 3698,
            "url": "/uploads/thumbnail_01_hermes_test_594ba8dc1e.jpg"
          },
          "small": {
            "name": "small_01-hermes-test.jpg",
            "hash": "small_01_hermes_test_594ba8dc1e",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 500,
            "size": 18.27,
            "sizeInBytes": 18267,
            "url": "/uploads/small_01_hermes_test_594ba8dc1e.jpg"
          },
          "medium": {
            "name": "medium_01-hermes-test.jpg",
            "hash": "medium_01_hermes_test_594ba8dc1e",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 750,
            "height": 750,
            "size": 31.53,
            "sizeInBytes": 31533,
            "url": "/uploads/medium_01_hermes_test_594ba8dc1e.jpg"
          },
          "large": {
            "name": "large_01-hermes-test.jpg",
            "hash": "large_01_hermes_test_594ba8dc1e",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 1000,
            "height": 1000,
            "size": 47.29,
            "sizeInBytes": 47289,
            "url": "/uploads/large_01_hermes_test_594ba8dc1e.jpg"
          }
        }
      }
    }
  ],
  "meta": {
    "page": "1",
    "pageSize": 1,
    "totalPages": 1
  }
}
```

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-seasons?search=noexisto```):

```json
{
  "data": [],
  "meta": {
    "page": "1",
    "pageSize": 0,
    "totalPages": null
  }
}
```

### ℹ️ GET /api/mht-seasons/:slug

Obtener una temporada en específico

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mht-seasons/clone-wars-s1```: Consultando el registro con el endpoint que se buscaba con la configuración de idioma por defecto
- ```/api/mht-seasons/ninjago-s2?locale=en```: Consultando el registro con el endpoint que se buscaba con la localización de inglés
- ```/api/mht-seasons/star-wars-rebels-s4?locale=es-419```: Consultando el registro con el endpoint que se buscaba con la localización de español latinoamérica

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-seasons/ninjago-rebooted```):

```json
{
  "data": {
    "name": "Rebooted",
    "season_number": 3,
    "initial_watching_date": "2014-04-01T06:00:00.000Z",
    "initial_watching_date_format": "??/MM/AAAA",
    "end_watching_date": "2014-11-09T06:00:00.000Z",
    "end_watching_date_format": "??/MM/AAAA",
    "release_date": "2014-04-08T05:00:00.000Z",
    "release_date_format": "DD/MM/AAAA",
    "grade": 99,
    "review": "S3",
    "description": "s3",
    "slug": "ninjago-rebooted",
    "locale": "en",
    "createdAt": "2025-04-29T19:43:45.050Z",
    "id": 13,
    "mht_serie": {
      "name": "Ninjago test",
      "initial_watching_date": "2012-04-01T06:00:00.000Z",
      "initial_watching_date_format": "DD/MM/AAAA",
      "end_watching_date": "2019-04-01T06:00:00.000Z",
      "end_watching_date_format": "DD/MM/AAAA",
      "release_date": "2012-04-01T06:00:00.000Z",
      "release_date_format": "DD/MM/AAAA",
      "grade": 85,
      "review": null,
      "slug": "ninjago",
      "locale": "en",
      "createdAt": "2025-04-29T19:38:02.272Z",
      "id": 8,
      "logo": {
        "name": "test-serie1.jpg",
        "alternativeText": null,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_test-serie1.jpg",
            "hash": "thumbnail_test_serie1_17e624c110",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 156,
            "height": 156,
            "size": 6.27,
            "sizeInBytes": 6267,
            "url": "/uploads/thumbnail_test_serie1_17e624c110.jpg"
          },
          "small": {
            "name": "small_test-serie1.jpg",
            "hash": "small_test_serie1_17e624c110",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 500,
            "size": 27.73,
            "sizeInBytes": 27729,
            "url": "/uploads/small_test_serie1_17e624c110.jpg"
          }
        }
      }
    },
    "mht_chapters": [],
    "logo": {
      "name": "01-hermes-test.jpg",
      "alternativeText": null,
      "formats": {
        "thumbnail": {
          "name": "thumbnail_01-hermes-test.jpg",
          "hash": "thumbnail_01_hermes_test_594ba8dc1e",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 156,
          "height": 156,
          "size": 3.7,
          "sizeInBytes": 3698,
          "url": "/uploads/thumbnail_01_hermes_test_594ba8dc1e.jpg"
        },
        "small": {
          "name": "small_01-hermes-test.jpg",
          "hash": "small_01_hermes_test_594ba8dc1e",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 500,
          "height": 500,
          "size": 18.27,
          "sizeInBytes": 18267,
          "url": "/uploads/small_01_hermes_test_594ba8dc1e.jpg"
        },
        "medium": {
          "name": "medium_01-hermes-test.jpg",
          "hash": "medium_01_hermes_test_594ba8dc1e",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 750,
          "height": 750,
          "size": 31.53,
          "sizeInBytes": 31533,
          "url": "/uploads/medium_01_hermes_test_594ba8dc1e.jpg"
        },
        "large": {
          "name": "large_01-hermes-test.jpg",
          "hash": "large_01_hermes_test_594ba8dc1e",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 1000,
          "height": 1000,
          "size": 47.29,
          "sizeInBytes": 47289,
          "url": "/uploads/large_01_hermes_test_594ba8dc1e.jpg"
        }
      }
    }
  },
  "meta": {

  }
}
```

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-seasons/noexisto```):

```json
{
  "data": null,
  "error": {
    "status": 404,
    "name": "NotFoundError",
    "message": "Not Found",
    "details": {

    }
  }
}
```

## Capítulos

La colección que guarda los posts referentes a los capítulos de series de las que quiero hablar

La estructura de la colección es la siguiente:

- **name:** Text *(Short text, required, localization enabled)*: Nombre del capítulo
- **chapter_number** Number *(Integer, required)*: El número del capítulo que es sobre su temporada
- **watching_date:** Date *(Datetime, required)*: Fecha en la que vi el capítulo
- **watching_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha en la que vi el capítulo indicada en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año
- **grade** Number *(Decimal)*: La calificación que le doy al capítulo de 0 a 100 con solamente un decimal posible
- **mht_season** Relation with MHT-Season *(MHT-Season has many MHT-Chapters)*: Relación con los capítulos relacionados a esta temporada
- **review:** Text *(Long text, localization enabled)*: Pequeña reseña del capítulo
- **description:** Rich text (Markdown) *(Localization enabled)*: Descripción más extensa del capítulo
- **slug:** UID *(Required)*: Slug que se usa desde el FrontEnd para acceder a un elemento específico de la colección
- **logo:** Media *(Single media, only images allowed, required)*: Imagen en escala 16:9 del logotipo del capítulo

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/mht-chapters

Obtener todos los capítulos

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mht-chapters?locale=es-419```: Trae los capítulos con localización en español latino usando las configuraciones por defecto de paginación y orden
- ```/api/mht-chapters?orderBy=name-asc&page=2&pageSize=2```: Trae los capítulos ordenando por nombre ascendentemente usando una paginación de tamaño de dos registros encontrándonos en la página 2
- ```/api/mht-chapters?exclude=ninjago-s1-e13&randomSeed=15&page=1&pageSize=2```: Trae los capítulos excluyendo el registro con slug ninjago-s1-e13 usando una semilla aleatoria para mezclar los registros que trae con un tamaño de página de 2 registros en la página 1

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Se programó manualmente el parámetro ```season``` para agrupar los capítulos por el slug de una temporada. Si no se le pasa nada, regresa todos los capítulos

Se programó manualmente el parámetro ```serie``` para agrupar los capítulos por el slug de una serie. Si no se le pasa nada, regresa todos los capítulos

Se programó manualmente el parámetro ```search``` para poder realizar búsquedas de capítulos. Si este parámetro está vacío, no realizará ninguna búsqueda pero de llevar algo, buscará solamente coincidencias con el campo del nombre del capítulo

Se programó manualmente el parámetro ```exclude``` que permite excluir un registro a través de pasarle su slug. Esto enfocado para cuando se quieran dar sugerencias dentro de una consulta de un capítulo y evitar sugerir el mismo capítulo que se está consultando. Se pasaría entonces el slug del capítulo que se quiere excluir

Se programó manualmente la paginación a través de las variables ```page``` y ```pageSize``` que describen el número de página y el tamaño de la página deseado respectivamente. Si el número de página no es indicado, por defecto tomará el valor de 1. Si el tamaño de la página no es indicado, por defecto tomará el valor de la longitud del arreglo regresado. Si el número de página es mayor al total de páginas que habría según los parámetros de paginación, el número de página pasa a ser 1 devolviendo a la primera página

Se programó una forma de ordenar los resultados de este endpoint a través de la variable ```orderBy``` la cual puede obtener los siguientes valores:

- ```name-asc```: Ordena los resultados alfabéticamente en función del nombre
- ```name-desc```: Ordena los resultados en orden alfabético inverso en función del nombre
- ```chapterNumber-asc```: Ordena los resultados de forma ascendente en función del número de capítulo
- ```chapterNumber-desc```: Ordena los resultados de forma descendente en función del número de capítulo
- ```watchingDate-asc```: Ordena los resultados de forma ascendente en función de la fecha en la que vi el capítulo
- ```watchingDate-desc```: Ordena los resultados de forma descendente en función de la fecha en la que vi el capítulo
- ```createdAtDate-asc```: Ordena los resultados de forma ascendente en función de la fecha en la que creé mi entrada de blog sobre este capítulo
- ```createdAtDate-desc```: Ordena los resultados de forma descendente en función de la fecha en la que creé mi entrada de blog sobre este capítulo
- ```grade-asc```: Ordena los resultados de forma ascendente en función de la calificación que le di a este capítulo
- ```grade-desc```: Ordena los resultados de forma descendente en función de la calificación que le di a este capítulo
- Cualquier otro valor que se le pase, incluso si no se le pasa un valor, ordenará por defecto el resultado alfabéticamente en función del nombre

Se programó manualmente a través de la variable ```randomSeed``` una semilla aleatoria para mezclar el resultado de documentos y poder mostrarlos de forma aleatoria en el FrontEnd. Si se pasa este parámetro, sobrescribirá al parámetro de ```orderBy```. Si el parámetro no recibe nada, por defecto los ordenará como se deseé con el parámetro ```orderBy```

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-chapters?search=ahsoka```):

```json
{
  "data": [
    {
      "name": "ahsoka and the martez",
      "chapter_number": 5,
      "watching_date": "2025-05-30T06:00:00.000Z",
      "watching_date_format": "??/MM/AAAA",
      "grade": 88,
      "review": "nice chapter ahsoka",
      "slug": "clone-wars-s7-e5",
      "locale": "en",
      "createdAt": "2025-05-06T03:35:34.117Z",
      "id": 21,
      "mht_season": {
        "name": "The Final Season",
        "season_number": 7,
        "initial_watching_date": "2024-03-10T06:00:00.000Z",
        "initial_watching_date_format": "DD/MM/AAAA",
        "end_watching_date": "2024-03-30T06:00:00.000Z",
        "end_watching_date_format": "DD/MM/AAAA",
        "release_date": "2020-02-22T06:00:00.000Z",
        "release_date_format": "DD/MM/AAAA",
        "grade": 94,
        "review": "cinema",
        "slug": "clone-wars-season-7",
        "locale": "en",
        "createdAt": "2025-04-29T19:45:50.743Z",
        "id": 10,
        "mht_serie": {
          "name": "Clone Wars test",
          "initial_watching_date": "2023-07-07T06:00:00.000Z",
          "initial_watching_date_format": "??/MM/AAAA",
          "end_watching_date": "2024-01-03T06:00:00.000Z",
          "end_watching_date_format": "DD/MM/AAAA",
          "release_date": null,
          "release_date_format": null,
          "grade": 100,
          "review": "Hey Snips",
          "slug": "clone-wars",
          "locale": "en",
          "createdAt": "2025-04-28T00:53:12.868Z",
          "id": 2,
          "logo": {
            "name": "01-hermes-test.jpg",
            "alternativeText": null,
            "formats": {
              "thumbnail": {
                "name": "thumbnail_01-hermes-test.jpg",
                "hash": "thumbnail_01_hermes_test_594ba8dc1e",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "path": null,
                "width": 156,
                "height": 156,
                "size": 3.7,
                "sizeInBytes": 3698,
                "url": "/uploads/thumbnail_01_hermes_test_594ba8dc1e.jpg"
              },
              "small": {
                "name": "small_01-hermes-test.jpg",
                "hash": "small_01_hermes_test_594ba8dc1e",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "path": null,
                "width": 500,
                "height": 500,
                "size": 18.27,
                "sizeInBytes": 18267,
                "url": "/uploads/small_01_hermes_test_594ba8dc1e.jpg"
              },
              "medium": {
                "name": "medium_01-hermes-test.jpg",
                "hash": "medium_01_hermes_test_594ba8dc1e",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "path": null,
                "width": 750,
                "height": 750,
                "size": 31.53,
                "sizeInBytes": 31533,
                "url": "/uploads/medium_01_hermes_test_594ba8dc1e.jpg"
              },
              "large": {
                "name": "large_01-hermes-test.jpg",
                "hash": "large_01_hermes_test_594ba8dc1e",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "path": null,
                "width": 1000,
                "height": 1000,
                "size": 47.29,
                "sizeInBytes": 47289,
                "url": "/uploads/large_01_hermes_test_594ba8dc1e.jpg"
              }
            }
          }
        },
        "logo": {
          "name": "test-juego1.jpg",
          "alternativeText": null,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_test-juego1.jpg",
              "hash": "thumbnail_test_juego1_882db78950",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 156,
              "height": 156,
              "size": 5.35,
              "sizeInBytes": 5349,
              "url": "/uploads/thumbnail_test_juego1_882db78950.jpg"
            },
            "small": {
              "name": "small_test-juego1.jpg",
              "hash": "small_test_juego1_882db78950",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 500,
              "height": 500,
              "size": 28.19,
              "sizeInBytes": 28190,
              "url": "/uploads/small_test_juego1_882db78950.jpg"
            }
          }
        }
      },
      "logo": {
        "name": "test-juego1.jpg",
        "alternativeText": null,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_test-juego1.jpg",
            "hash": "thumbnail_test_juego1_882db78950",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 156,
            "height": 156,
            "size": 5.35,
            "sizeInBytes": 5349,
            "url": "/uploads/thumbnail_test_juego1_882db78950.jpg"
          },
          "small": {
            "name": "small_test-juego1.jpg",
            "hash": "small_test_juego1_882db78950",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 500,
            "size": 28.19,
            "sizeInBytes": 28190,
            "url": "/uploads/small_test_juego1_882db78950.jpg"
          }
        }
      }
    }
  ],
  "meta": {
    "page": "1",
    "pageSize": 1,
    "totalPages": 1
  }
}
```

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-chapters?search=noexisto```):

```json
{
  "data": [],
  "meta": {
    "page": "1",
    "pageSize": 0,
    "totalPages": null
  }
}
```

### ℹ️ GET /api/mht-chapters/:slug

Obtener un capítulo en específico

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mht-chapters/clone-wars-s1e12```: Consultando el registro con el endpoint que se buscaba con la configuración de idioma por defecto
- ```/api/mht-chapters/ninjago-s2e10?locale=en```: Consultando el registro con el endpoint que se buscaba con la localización de inglés
- ```/api/mht-chapters/star-wars-rebels-s4e10?locale=es-419```: Consultando el registro con el endpoint que se buscaba con la localización de español latinoamérica

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-chapters/clone-wars-s7-e1```):

```json
{
  "data": {
    "name": "El primero del bad batch english",
    "chapter_number": 1,
    "watching_date": "2025-05-12T06:00:00.000Z",
    "watching_date_format": "DD/MM/AAAA",
    "grade": 85,
    "review": "gud chapter bro",
    "description": "yes it was",
    "slug": "clone-wars-s7-e1",
    "locale": "en",
    "createdAt": "2025-05-06T03:28:50.221Z",
    "id": 5,
    "mht_season": {
      "name": "The Final Season",
      "season_number": 7,
      "initial_watching_date": "2024-03-10T06:00:00.000Z",
      "initial_watching_date_format": "DD/MM/AAAA",
      "end_watching_date": "2024-03-30T06:00:00.000Z",
      "end_watching_date_format": "DD/MM/AAAA",
      "release_date": "2020-02-22T06:00:00.000Z",
      "release_date_format": "DD/MM/AAAA",
      "grade": 94,
      "review": "cinema",
      "slug": "clone-wars-season-7",
      "locale": "en",
      "createdAt": "2025-04-29T19:45:50.743Z",
      "id": 10,
      "mht_serie": {
        "name": "Clone Wars test",
        "initial_watching_date": "2023-07-07T06:00:00.000Z",
        "initial_watching_date_format": "??/MM/AAAA",
        "end_watching_date": "2024-01-03T06:00:00.000Z",
        "end_watching_date_format": "DD/MM/AAAA",
        "release_date": null,
        "release_date_format": null,
        "grade": 100,
        "review": "Hey Snips",
        "slug": "clone-wars",
        "locale": "en",
        "createdAt": "2025-04-28T00:53:12.868Z",
        "id": 2,
        "logo": {
          "name": "01-hermes-test.jpg",
          "alternativeText": null,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_01-hermes-test.jpg",
              "hash": "thumbnail_01_hermes_test_594ba8dc1e",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 156,
              "height": 156,
              "size": 3.7,
              "sizeInBytes": 3698,
              "url": "/uploads/thumbnail_01_hermes_test_594ba8dc1e.jpg"
            },
            "small": {
              "name": "small_01-hermes-test.jpg",
              "hash": "small_01_hermes_test_594ba8dc1e",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 500,
              "height": 500,
              "size": 18.27,
              "sizeInBytes": 18267,
              "url": "/uploads/small_01_hermes_test_594ba8dc1e.jpg"
            },
            "medium": {
              "name": "medium_01-hermes-test.jpg",
              "hash": "medium_01_hermes_test_594ba8dc1e",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 750,
              "height": 750,
              "size": 31.53,
              "sizeInBytes": 31533,
              "url": "/uploads/medium_01_hermes_test_594ba8dc1e.jpg"
            },
            "large": {
              "name": "large_01-hermes-test.jpg",
              "hash": "large_01_hermes_test_594ba8dc1e",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 1000,
              "height": 1000,
              "size": 47.29,
              "sizeInBytes": 47289,
              "url": "/uploads/large_01_hermes_test_594ba8dc1e.jpg"
            }
          }
        }
      },
      "logo": {
        "name": "test-juego1.jpg",
        "alternativeText": null,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_test-juego1.jpg",
            "hash": "thumbnail_test_juego1_882db78950",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 156,
            "height": 156,
            "size": 5.35,
            "sizeInBytes": 5349,
            "url": "/uploads/thumbnail_test_juego1_882db78950.jpg"
          },
          "small": {
            "name": "small_test-juego1.jpg",
            "hash": "small_test_juego1_882db78950",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 500,
            "size": 28.19,
            "sizeInBytes": 28190,
            "url": "/uploads/small_test_juego1_882db78950.jpg"
          }
        }
      }
    },
    "logo": {
      "name": "daviddoe@strapi",
      "alternativeText": "An image uploaded to Strapi called daviddoe@strapi",
      "formats": {
        "thumbnail": {
          "name": "thumbnail_daviddoe@strapi",
          "hash": "thumbnail_daviddoe_strapi_296656373c",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "path": null,
          "width": 139,
          "height": 156,
          "size": 4.2,
          "sizeInBytes": 4201,
          "url": "/uploads/thumbnail_daviddoe_strapi_296656373c.jpeg"
        },
        "medium": {
          "name": "medium_daviddoe@strapi",
          "hash": "medium_daviddoe_strapi_296656373c",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "path": null,
          "width": 669,
          "height": 750,
          "size": 44.32,
          "sizeInBytes": 44315,
          "url": "/uploads/medium_daviddoe_strapi_296656373c.jpeg"
        },
        "small": {
          "name": "small_daviddoe@strapi",
          "hash": "small_daviddoe_strapi_296656373c",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "path": null,
          "width": 446,
          "height": 500,
          "size": 22.43,
          "sizeInBytes": 22427,
          "url": "/uploads/small_daviddoe_strapi_296656373c.jpeg"
        },
        "large": {
          "name": "large_daviddoe@strapi",
          "hash": "large_daviddoe_strapi_296656373c",
          "ext": ".jpeg",
          "mime": "image/jpeg",
          "path": null,
          "width": 892,
          "height": 1000,
          "size": 74.82,
          "sizeInBytes": 74823,
          "url": "/uploads/large_daviddoe_strapi_296656373c.jpeg"
        }
      }
    }
  },
  "meta": {

  }
}
```

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-chapters/noexisto```):

```json
{
  "data": null,
  "error": {
    "status": 404,
    "name": "NotFoundError",
    "message": "Not Found",
    "details": {

    }
  }
}
```

# El apartado de contenido en internet

## Canales

La colección que guarda los posts referentes a los canales de YouTube de los que quiero hablar

La estructura de la colección es la siguiente:

- **name:** Text *(Short text, required, localization enabled)*: Nombre del canal
- **logo:** Media *(Single media, only images allowed, required)*: Imagen en escala 1:1 del logotipo del canal
- **initial_meeting_date:** Date *(Datetime, required)*: Fecha en la que conocí el canal
- **initial_meeting_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha en la que conocí el canal indicada en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año
- **review:** Text *(Long text, localization enabled)*: Pequeña reseña del canal
- **description:** Rich text (Markdown) *(Localization enabled)*: Descripción más extensa del canal
- **slug:** UID *(Required)*: Slug que se usa desde el FrontEnd para acceder a un elemento específico de la colección
- **mht_videos** Relation with MHT-Video *(MHT-Channel has many MHT-Videos)*: Relación con los videos relacionados a este canal
- **url:** Text *(Short text)*: URL al canal

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/mht-channels

Obtener todos los canales

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mht-channels?locale=es-419```: Trae los canales con localización en español latino usando las configuraciones por defecto de paginación y orden
- ```/api/mht-channels?orderBy=name-asc&page=2&pageSize=2```: Trae los canales ordenando por nombre ascendentemente usando una paginación de tamaño de dos registros encontrándonos en la página 2
- ```/api/mht-channels?exclude=sr-eidrian&randomSeed=15&page=1&pageSize=2```: Trae los canales excluyendo el registro con slug sr-eidrian usando una semilla aleatoria para mezclar los registros que trae con un tamaño de página de 2 registros en la página 1

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Se programó manualmente el parámetro ```search``` para poder realizar búsquedas de canales. Si este parámetro está vacío, no realizará ninguna búsqueda pero de llevar algo, buscará solamente coincidencias con el campo del nombre del canal

Se programó manualmente el parámetro ```exclude``` que permite excluir un registro a través de pasarle su slug. Esto enfocado para cuando se quieran dar sugerencias dentro de una consulta de un canal y evitar sugerir el mismo canal que se está consultando. Se pasaría entonces el slug del canal que se quiere excluir

Se programó manualmente la paginación a través de las variables ```page``` y ```pageSize``` que describen el número de página y el tamaño de la página deseado respectivamente. Si el número de página no es indicado, por defecto tomará el valor de 1. Si el tamaño de la página no es indicado, por defecto tomará el valor de la longitud del arreglo regresado. Si el número de página es mayor al total de páginas que habría según los parámetros de paginación, el número de página pasa a ser 1 devolviendo a la primera página

Se programó una forma de ordenar los resultados de este endpoint a través de la variable ```orderBy``` la cual puede obtener los siguientes valores:

- ```name-asc```: Ordena los resultados alfabéticamente en función del nombre
- ```name-desc```: Ordena los resultados en orden alfabético inverso en función del nombre
- ```initialMeetingDate-asc```: Ordena los resultados de forma ascendente en función de la fecha en la que conocí el canal
- ```initialMeetingDate-desc```: Ordena los resultados de forma descendente en función de la fecha en la que conocí el canal
- ```createdAtDate-asc```: Ordena los resultados de forma ascendente en función de la fecha en la que creé mi entrada de blog sobre este canal
- ```createdAtDate-desc```: Ordena los resultados de forma descendente en función de la fecha en la que creé mi entrada de blog sobre este canal
- Cualquier otro valor que se le pase, incluso si no se le pasa un valor, ordenará por defecto el resultado alfabéticamente en función del nombre

Se programó manualmente a través de la variable ```randomSeed``` una semilla aleatoria para mezclar el resultado de documentos y poder mostrarlos de forma aleatoria en el FrontEnd. Si se pasa este parámetro, sobrescribirá al parámetro de ```orderBy```. Si el parámetro no recibe nada, por defecto los ordenará como se deseé con el parámetro ```orderBy```

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-channels?search=eidrian```):

```json
{
  "data": [
    {
      "name": "Sr Eidrian",
      "description": "Stroll's #1 fan",
      "initial_meeting_date": "2024-02-15T06:00:00.000Z",
      "initial_meeting_date_format": "??/MM/AAAA",
      "review": "Stroll's #1 fan",
      "slug": "sr-eidrian",
      "locale": "en",
      "url": "https://www.youtube.com/@SrEidrian",
      "createdAt": "2025-05-17T20:19:12.747Z",
      "id": 14,
      "mht_videos": [
        {
          "name": "Questions and answers",
          "release_date": "2025-04-28T06:00:00.000Z",
          "release_date_format": "??/??/AAAA",
          "watching_date": "2025-06-07T06:00:00.000Z",
          "watching_date_format": "DD/MM/AAAA",
          "review": "Video good",
          "description": "Video good",
          "slug": "sr-eidrian-qa",
          "grade": 5,
          "locale": "en",
          "url": "https://www.youtube.com/watch?v=f4fF4TVN6yI",
          "createdAt": "2025-05-17T21:16:08.764Z",
          "id": 16,
          "logo": {
            "name": "Imagen1.jpg",
            "alternativeText": null,
            "formats": {
              "thumbnail": {
                "name": "thumbnail_Imagen1.jpg",
                "hash": "thumbnail_Imagen1_a87d9afac7",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "path": null,
                "width": 208,
                "height": 156,
                "size": 6.39,
                "sizeInBytes": 6388,
                "url": "/uploads/thumbnail_Imagen1_a87d9afac7.jpg"
              },
              "small": {
                "name": "small_Imagen1.jpg",
                "hash": "small_Imagen1_a87d9afac7",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "path": null,
                "width": 500,
                "height": 375,
                "size": 20.07,
                "sizeInBytes": 20074,
                "url": "/uploads/small_Imagen1_a87d9afac7.jpg"
              },
              "medium": {
                "name": "medium_Imagen1.jpg",
                "hash": "medium_Imagen1_a87d9afac7",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "path": null,
                "width": 750,
                "height": 563,
                "size": 35.22,
                "sizeInBytes": 35224,
                "url": "/uploads/medium_Imagen1_a87d9afac7.jpg"
              }
            }
          }
        }
      ],
      "logo": {
        "name": "test-serie1.jpg",
        "alternativeText": null,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_test-serie1.jpg",
            "hash": "thumbnail_test_serie1_17e624c110",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 156,
            "height": 156,
            "size": 6.27,
            "sizeInBytes": 6267,
            "url": "/uploads/thumbnail_test_serie1_17e624c110.jpg"
          },
          "small": {
            "name": "small_test-serie1.jpg",
            "hash": "small_test_serie1_17e624c110",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 500,
            "size": 27.73,
            "sizeInBytes": 27729,
            "url": "/uploads/small_test_serie1_17e624c110.jpg"
          }
        }
      }
    }
  ],
  "meta": {
    "page": "1",
    "pageSize": 1,
    "totalPages": 1
  }
}
```

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-channels?search=noexisto```):

```json
{
  "data": [],
  "meta": {
    "page": "1",
    "pageSize": 0,
    "totalPages": null
  }
}
```

### ℹ️ GET /api/mht-channels/:slug

Obtener un canal en específico

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mht-channels/dotcsv```: Consultando el registro con el endpoint que se buscaba con la configuración de idioma por defecto
- ```/api/mht-channels/jaiden-animations?locale=en```: Consultando el registro con el endpoint que se buscaba con la localización de inglés
- ```/api/mht-channels/sr-eidrian?locale=es-419```: Consultando el registro con el endpoint que se buscaba con la localización de español latinoamérica

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-channels/sr-eidrian```):

```json
{
  "data": {
    "name": "Sr Eidrian",
    "description": "Stroll's #1 fan",
    "initial_meeting_date": "2024-02-15T06:00:00.000Z",
    "initial_meeting_date_format": "??/MM/AAAA",
    "review": "Stroll's #1 fan",
    "slug": "sr-eidrian",
    "locale": "en",
    "url": "https://www.youtube.com/@SrEidrian",
    "createdAt": "2025-05-17T20:19:12.747Z",
    "id": 14,
    "mht_videos": [
      {
        "name": "Questions and answers",
        "release_date": "2025-04-28T06:00:00.000Z",
        "release_date_format": "??/??/AAAA",
        "watching_date": "2025-06-07T06:00:00.000Z",
        "watching_date_format": "DD/MM/AAAA",
        "review": "Video good",
        "description": "Video good",
        "slug": "sr-eidrian-qa",
        "grade": 5,
        "locale": "en",
        "url": "https://www.youtube.com/watch?v=f4fF4TVN6yI",
        "createdAt": "2025-05-17T21:16:08.764Z",
        "id": 16,
        "logo": {
          "name": "Imagen1.jpg",
          "alternativeText": null,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_Imagen1.jpg",
              "hash": "thumbnail_Imagen1_a87d9afac7",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 208,
              "height": 156,
              "size": 6.39,
              "sizeInBytes": 6388,
              "url": "/uploads/thumbnail_Imagen1_a87d9afac7.jpg"
            },
            "small": {
              "name": "small_Imagen1.jpg",
              "hash": "small_Imagen1_a87d9afac7",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 500,
              "height": 375,
              "size": 20.07,
              "sizeInBytes": 20074,
              "url": "/uploads/small_Imagen1_a87d9afac7.jpg"
            },
            "medium": {
              "name": "medium_Imagen1.jpg",
              "hash": "medium_Imagen1_a87d9afac7",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 750,
              "height": 563,
              "size": 35.22,
              "sizeInBytes": 35224,
              "url": "/uploads/medium_Imagen1_a87d9afac7.jpg"
            }
          }
        }
      }
    ],
    "logo": {
      "name": "test-serie1.jpg",
      "alternativeText": null,
      "formats": {
        "thumbnail": {
          "name": "thumbnail_test-serie1.jpg",
          "hash": "thumbnail_test_serie1_17e624c110",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 156,
          "height": 156,
          "size": 6.27,
          "sizeInBytes": 6267,
          "url": "/uploads/thumbnail_test_serie1_17e624c110.jpg"
        },
        "small": {
          "name": "small_test-serie1.jpg",
          "hash": "small_test_serie1_17e624c110",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 500,
          "height": 500,
          "size": 27.73,
          "sizeInBytes": 27729,
          "url": "/uploads/small_test_serie1_17e624c110.jpg"
        }
      }
    }
  },
  "meta": {

  }
}
```

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-channels/noexisto```):

```json
{
  "data": null,
  "error": {
    "status": 404,
    "name": "NotFoundError",
    "message": "Not Found",
    "details": {

    }
  }
}
```

## Videos

La colección que guarda los posts referentes a los videos de YouTube de los que quiero hablar

La estructura de la colección es la siguiente:

- **name:** Text *(Short text, required, localization enabled)*: Nombre del video
- **release_date:** Date *(Datetime, required)*: Fecha en la que se publicó el video
- **release_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha en la que se publicó el video indicada en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año
- **watching_date:** Date *(Datetime, required)*: Fecha en la que vi el video
- **watching_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha en la que vi el video indicada en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año
- **review:** Text *(Long text, localization enabled)*: Pequeña reseña del capítulo
- **description:** Rich text (Markdown) *(Localization enabled)*: Descripción más extensa del capítulo
- **slug:** UID *(Required)*: Slug que se usa desde el FrontEnd para acceder a un elemento específico de la colección
- **logo:** Media *(Single media, only images allowed, required)*: Imagen en escala 16:9 del logotipo del capítulo
- **grade** Number *(Decimal)*: La calificación que le doy al video de 0 a 100 con solamente un decimal posible
- **mht_channel** Relation with MHT-Channel *(MHT-Channel has many MHT-Videos)*: Relación con el canal relacionado a este video
- **mht_playlist** Relation with MHT-Playlist *(MHT-Playlist has many MHT-Videos)*: Relación con la playlist relacionada a este video
- **url:** Text *(Short text)*: URL al video

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/mht-videos

Obtener todos los videos

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mht-videos?locale=es-419```: Trae los videos con localización en español latino usando las configuraciones por defecto de paginación y orden
- ```/api/mht-videos?orderBy=name-asc&page=2&pageSize=2```: Trae los videos ordenando por nombre ascendentemente usando una paginación de tamaño de dos registros encontrándonos en la página 2
- ```/api/mht-videos?exclude=jaiden-test-1&randomSeed=15&page=1&pageSize=2```: Trae los videos excluyendo el registro con slug jaiden-test-1 usando una semilla aleatoria para mezclar los registros que trae con un tamaño de página de 2 registros en la página 1

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Se programó manualmente el parámetro ```channel``` para agrupar los videos por el slug de un canal. Si no se le pasa nada, regresa todos los videos

Se programó manualmente el parámetro ```search``` para poder realizar búsquedas de videos. Si este parámetro está vacío, no realizará ninguna búsqueda pero de llevar algo, buscará solamente coincidencias con el campo del nombre del video

Se programó manualmente el parámetro ```exclude``` que permite excluir un registro a través de pasarle su slug. Esto enfocado para cuando se quieran dar sugerencias dentro de una consulta de un video y evitar sugerir el mismo video que se está consultando. Se pasaría entonces el slug del video que se quiere excluir

Se programó manualmente la paginación a través de las variables ```page``` y ```pageSize``` que describen el número de página y el tamaño de la página deseado respectivamente. Si el número de página no es indicado, por defecto tomará el valor de 1. Si el tamaño de la página no es indicado, por defecto tomará el valor de la longitud del arreglo regresado. Si el número de página es mayor al total de páginas que habría según los parámetros de paginación, el número de página pasa a ser 1 devolviendo a la primera página

Se programó una forma de ordenar los resultados de este endpoint a través de la variable ```orderBy``` la cual puede obtener los siguientes valores:

- ```name-asc```: Ordena los resultados alfabéticamente en función del nombre
- ```name-desc```: Ordena los resultados en orden alfabético inverso en función del nombre
- ```releaseDate-asc```: Ordena los resultados de forma ascendente en función de la fecha en la que se publicó el video
- ```releaseDate-desc```: Ordena los resultados de forma descendente en función de la fecha en la que se publicó el video
- ```watchingDate-asc```: Ordena los resultados de forma ascendente en función de la fecha en la que vi el video
- ```watchingDate-desc```: Ordena los resultados de forma descendente en función de la fecha en la que vi el video
- ```createdAtDate-asc```: Ordena los resultados de forma ascendente en función de la fecha en la que creé mi entrada de blog sobre este video
- ```createdAtDate-desc```: Ordena los resultados de forma descendente en función de la fecha en la que creé mi entrada de blog sobre este video
- ```grade-asc```: Ordena los resultados de forma ascendente en función de la calificación que le di a este video
- ```grade-desc```: Ordena los resultados de forma descendente en función de la calificación que le di a este video
- Cualquier otro valor que se le pase, incluso si no se le pasa un valor, ordenará por defecto el resultado alfabéticamente en función del nombre

Se programó manualmente a través de la variable ```randomSeed``` una semilla aleatoria para mezclar el resultado de documentos y poder mostrarlos de forma aleatoria en el FrontEnd. Si se pasa este parámetro, sobrescribirá al parámetro de ```orderBy```. Si el parámetro no recibe nada, por defecto los ordenará como se deseé con el parámetro ```orderBy```

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-videos?search=jaiden```):

```json
{
  "data": [
    {
      "name": "Another Jaiden video",
      "release_date": "2025-05-06T06:00:00.000Z",
      "release_date_format": "??/MM/AAAA",
      "watching_date": "2025-05-29T06:00:00.000Z",
      "watching_date_format": "DD/MM/AAAA",
      "review": "Good video",
      "description": "Good video",
      "slug": "jaiden-test-1",
      "grade": 67,
      "locale": "en",
      "url": "https://www.youtube.com/watch?v=MknFxpkuiFc",
      "createdAt": "2025-05-17T21:14:33.307Z",
      "id": 17,
      "mht_channel": {
        "name": "Jaiden Animations",
        "description": "Tostada",
        "initial_meeting_date": "2024-10-16T06:00:00.000Z",
        "initial_meeting_date_format": "??/MM/AAAA",
        "review": "Tostada en español",
        "slug": "jaiden-animations",
        "locale": "en",
        "url": "https://www.youtube.com/@jaidenanimations",
        "createdAt": "2025-05-17T20:16:33.797Z",
        "id": 4,
        "logo": {
          "name": "test-serie1.jpg",
          "alternativeText": null,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_test-serie1.jpg",
              "hash": "thumbnail_test_serie1_17e624c110",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 156,
              "height": 156,
              "size": 6.27,
              "sizeInBytes": 6267,
              "url": "/uploads/thumbnail_test_serie1_17e624c110.jpg"
            },
            "small": {
              "name": "small_test-serie1.jpg",
              "hash": "small_test_serie1_17e624c110",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 500,
              "height": 500,
              "size": 27.73,
              "sizeInBytes": 27729,
              "url": "/uploads/small_test_serie1_17e624c110.jpg"
            }
          }
        }
      },
      "logo": {
        "name": "test-serie1.jpg",
        "alternativeText": null,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_test-serie1.jpg",
            "hash": "thumbnail_test_serie1_17e624c110",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 156,
            "height": 156,
            "size": 6.27,
            "sizeInBytes": 6267,
            "url": "/uploads/thumbnail_test_serie1_17e624c110.jpg"
          },
          "small": {
            "name": "small_test-serie1.jpg",
            "hash": "small_test_serie1_17e624c110",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 500,
            "size": 27.73,
            "sizeInBytes": 27729,
            "url": "/uploads/small_test_serie1_17e624c110.jpg"
          }
        }
      }
    }
  ],
  "meta": {
    "page": "1",
    "pageSize": 1,
    "totalPages": 1
  }
}
```

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-videos?search=noexisto```):

```json
{
  "data": [],
  "meta": {
    "page": "1",
    "pageSize": 0,
    "totalPages": null
  }
}
```

### ℹ️ GET /api/mht-videos/:slug

Obtener un video en específico

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mht-videos/sr-eidrian-qa```: Consultando el registro con el endpoint que se buscaba con la configuración de idioma por defecto
- ```/api/mht-videos/jaiden-test-1?locale=en```: Consultando el registro con el endpoint que se buscaba con la localización de inglés
- ```/api/mht-videos/jaiden-animations-so-its-been-10-years-huh?locale=es-419```: Consultando el registro con el endpoint que se buscaba con la localización de español latinoamérica

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-videos/jaiden-test-1```):

```json
{
  "data": {
    "name": "Another Jaiden video",
    "release_date": "2025-05-06T06:00:00.000Z",
    "release_date_format": "??/MM/AAAA",
    "watching_date": "2025-05-29T06:00:00.000Z",
    "watching_date_format": "DD/MM/AAAA",
    "review": "Good video",
    "description": "Good video",
    "slug": "jaiden-test-1",
    "grade": 67,
    "locale": "en",
    "url": "https://www.youtube.com/watch?v=MknFxpkuiFc",
    "createdAt": "2025-05-17T21:14:33.307Z",
    "id": 17,
    "mht_channel": {
      "name": "Jaiden Animations",
      "description": "Tostada",
      "initial_meeting_date": "2024-10-16T06:00:00.000Z",
      "initial_meeting_date_format": "??/MM/AAAA",
      "review": "Tostada en español",
      "slug": "jaiden-animations",
      "locale": "en",
      "url": "https://www.youtube.com/@jaidenanimations",
      "createdAt": "2025-05-17T20:16:33.797Z",
      "id": 4,
      "logo": {
        "name": "test-serie1.jpg",
        "alternativeText": null,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_test-serie1.jpg",
            "hash": "thumbnail_test_serie1_17e624c110",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 156,
            "height": 156,
            "size": 6.27,
            "sizeInBytes": 6267,
            "url": "/uploads/thumbnail_test_serie1_17e624c110.jpg"
          },
          "small": {
            "name": "small_test-serie1.jpg",
            "hash": "small_test_serie1_17e624c110",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 500,
            "size": 27.73,
            "sizeInBytes": 27729,
            "url": "/uploads/small_test_serie1_17e624c110.jpg"
          }
        }
      }
    },
    "logo": {
      "name": "test-serie1.jpg",
      "alternativeText": null,
      "formats": {
        "thumbnail": {
          "name": "thumbnail_test-serie1.jpg",
          "hash": "thumbnail_test_serie1_17e624c110",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 156,
          "height": 156,
          "size": 6.27,
          "sizeInBytes": 6267,
          "url": "/uploads/thumbnail_test_serie1_17e624c110.jpg"
        },
        "small": {
          "name": "small_test-serie1.jpg",
          "hash": "small_test_serie1_17e624c110",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 500,
          "height": 500,
          "size": 27.73,
          "sizeInBytes": 27729,
          "url": "/uploads/small_test_serie1_17e624c110.jpg"
        }
      }
    }
  },
  "meta": {

  }
}
```

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-videos/noexisto```):

```json
{
  "data": null,
  "error": {
    "status": 404,
    "name": "NotFoundError",
    "message": "Not Found",
    "details": {

    }
  }
}
```

## Playlists

La colección que guarda los posts referentes a las series de YouTube (que no es lo mismo que las playlists de YouTube. Aquí serán videos sueltos agrupados por mí pero les llamo Playlists porque ya existe una colección Series en My Home Theater) de los que quiero hablar

La estructura de la colección es la siguiente:

- **name:** Text *(Short text, required, localization enabled)*: Nombre de la playlist
- **review:** Text *(Long text, localization enabled)*: Pequeña reseña de la playlist
- **description:** Rich text (Markdown) *(Localization enabled)*: Descripción más extensa de la playlist
- **slug:** UID *(Required)*: Slug que se usa desde el FrontEnd para acceder a un elemento específico de la colección
- **logo:** Media *(Single media, only images allowed, required)*: Imagen en escala 16:9 del logotipo de la playlist
- **grade** Number *(Decimal)*: La calificación que le doy a la playlist de 0 a 100 con solamente un decimal posible
- **mht_videos** Relation with MHT-Video *(MHT-Playlist belongs to many MHT-Videos)*: Relación con los videos relacionados a esta playlist

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/mht-playlists

Obtener todas las playlists

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mht-playlists?locale=es-419```: Trae las playlists con localización en español latino usando las configuraciones por defecto de paginación y orden
- ```/api/mht-playlists?orderBy=name-asc&page=2&pageSize=2```: Trae las playlists ordenando por nombre ascendentemente usando una paginación de tamaño de dos registros encontrándonos en la página 2
- ```/api/mht-playlists?exclude=playlist-test&randomSeed=15&page=1&pageSize=2```: Trae las playlists excluyendo el registro con slug playlist-test usando una semilla aleatoria para mezclar los registros que trae con un tamaño de página de 2 registros en la página 1

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Se programó manualmente el parámetro ```search``` para poder realizar búsquedas de canales. Si este parámetro está vacío, no realizará ninguna búsqueda pero de llevar algo, buscará solamente coincidencias con el campo del nombre del canal

Se programó manualmente el parámetro ```exclude``` que permite excluir un registro a través de pasarle su slug. Esto enfocado para cuando se quieran dar sugerencias dentro de una consulta de un canal y evitar sugerir el mismo canal que se está consultando. Se pasaría entonces el slug del canal que se quiere excluir

Se programó manualmente la paginación a través de las variables ```page``` y ```pageSize``` que describen el número de página y el tamaño de la página deseado respectivamente. Si el número de página no es indicado, por defecto tomará el valor de 1. Si el tamaño de la página no es indicado, por defecto tomará el valor de la longitud del arreglo regresado. Si el número de página es mayor al total de páginas que habría según los parámetros de paginación, el número de página pasa a ser 1 devolviendo a la primera página

Se programó una forma de ordenar los resultados de este endpoint a través de la variable ```orderBy``` la cual puede obtener los siguientes valores:

- ```name-asc```: Ordena los resultados alfabéticamente en función del nombre
- ```name-desc```: Ordena los resultados en orden alfabético inverso en función del nombre
- ```createdAtDate-asc```: Ordena los resultados de forma ascendente en función de la fecha en la que creé mi entrada de blog sobre este canal
- ```createdAtDate-desc```: Ordena los resultados de forma descendente en función de la fecha en la que creé mi entrada de blog sobre este canal
- Cualquier otro valor que se le pase, incluso si no se le pasa un valor, ordenará por defecto el resultado alfabéticamente en función del nombre

Se programó manualmente a través de la variable ```randomSeed``` una semilla aleatoria para mezclar el resultado de documentos y poder mostrarlos de forma aleatoria en el FrontEnd. Si se pasa este parámetro, sobrescribirá al parámetro de ```orderBy```. Si el parámetro no recibe nada, por defecto los ordenará como se deseé con el parámetro ```orderBy```

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-playlists?exclude=playlist-test```):

```json
{
  "data": [
    {
      "name": "a",
      "description": "a",
      "review": "a",
      "slug": "a",
      "grade": 67,
      "locale": "en",
      "createdAt": "2025-05-18T19:42:36.972Z",
      "id": 8,
      "mht_videos": [],
      "logo": {
        "name": "01-hermes-test.jpg",
        "alternativeText": null,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_01-hermes-test.jpg",
            "hash": "thumbnail_01_hermes_test_594ba8dc1e",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 156,
            "height": 156,
            "size": 3.7,
            "sizeInBytes": 3698,
            "url": "/uploads/thumbnail_01_hermes_test_594ba8dc1e.jpg"
          },
          "small": {
            "name": "small_01-hermes-test.jpg",
            "hash": "small_01_hermes_test_594ba8dc1e",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 500,
            "size": 18.27,
            "sizeInBytes": 18267,
            "url": "/uploads/small_01_hermes_test_594ba8dc1e.jpg"
          },
          "medium": {
            "name": "medium_01-hermes-test.jpg",
            "hash": "medium_01_hermes_test_594ba8dc1e",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 750,
            "height": 750,
            "size": 31.53,
            "sizeInBytes": 31533,
            "url": "/uploads/medium_01_hermes_test_594ba8dc1e.jpg"
          },
          "large": {
            "name": "large_01-hermes-test.jpg",
            "hash": "large_01_hermes_test_594ba8dc1e",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 1000,
            "height": 1000,
            "size": 47.29,
            "sizeInBytes": 47289,
            "url": "/uploads/large_01_hermes_test_594ba8dc1e.jpg"
          }
        }
      }
    }
  ],
  "meta": {
    "page": "1",
    "pageSize": 1,
    "totalPages": 1
  }
}
```

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-playlists?search=noexisto```):

```json
{
  "data": [],
  "meta": {
    "page": "1",
    "pageSize": 0,
    "totalPages": null
  }
}
```

### ℹ️ GET /api/mht-playlists/:slug

Obtener una playlist en específico

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mht-playlists/a-playlist```: Consultando el registro con el endpoint que se buscaba con la configuración de idioma por defecto
- ```/api/mht-playlists/playlist-test-1?locale=en```: Consultando el registro con el endpoint que se buscaba con la localización de inglés
- ```/api/mht-playlists/playlist-test-2?locale=es-419```: Consultando el registro con el endpoint que se buscaba con la localización de español latinoamérica

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-playlists/playlist-test```):

```json
{
  "data": {
    "name": "A playlist",
    "description": "Good playlist",
    "review": "Good playlist",
    "slug": "playlist-test",
    "grade": 45,
    "locale": "en",
    "createdAt": "2025-05-17T21:18:28.322Z",
    "id": 4,
    "mht_videos": [
      {
        "name": "Another Jaiden video",
        "release_date": "2025-05-06T06:00:00.000Z",
        "release_date_format": "??/MM/AAAA",
        "watching_date": "2025-05-29T06:00:00.000Z",
        "watching_date_format": "DD/MM/AAAA",
        "review": "Good video",
        "description": "Good video",
        "slug": "jaiden-test-1",
        "grade": 67,
        "locale": "en",
        "url": "https://www.youtube.com/watch?v=MknFxpkuiFc",
        "createdAt": "2025-05-17T21:14:33.307Z",
        "id": 17,
        "logo": {
          "name": "test-serie1.jpg",
          "alternativeText": null,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_test-serie1.jpg",
              "hash": "thumbnail_test_serie1_17e624c110",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 156,
              "height": 156,
              "size": 6.27,
              "sizeInBytes": 6267,
              "url": "/uploads/thumbnail_test_serie1_17e624c110.jpg"
            },
            "small": {
              "name": "small_test-serie1.jpg",
              "hash": "small_test_serie1_17e624c110",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 500,
              "height": 500,
              "size": 27.73,
              "sizeInBytes": 27729,
              "url": "/uploads/small_test_serie1_17e624c110.jpg"
            }
          }
        }
      },
      {
        "name": "Questions and answers",
        "release_date": "2025-04-28T06:00:00.000Z",
        "release_date_format": "??/??/AAAA",
        "watching_date": "2025-06-07T06:00:00.000Z",
        "watching_date_format": "DD/MM/AAAA",
        "review": "Video good",
        "description": "Video good",
        "slug": "sr-eidrian-qa",
        "grade": 5,
        "locale": "en",
        "url": "https://www.youtube.com/watch?v=f4fF4TVN6yI",
        "createdAt": "2025-05-17T21:16:08.764Z",
        "id": 16,
        "logo": {
          "name": "Imagen1.jpg",
          "alternativeText": null,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_Imagen1.jpg",
              "hash": "thumbnail_Imagen1_a87d9afac7",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 208,
              "height": 156,
              "size": 6.39,
              "sizeInBytes": 6388,
              "url": "/uploads/thumbnail_Imagen1_a87d9afac7.jpg"
            },
            "small": {
              "name": "small_Imagen1.jpg",
              "hash": "small_Imagen1_a87d9afac7",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 500,
              "height": 375,
              "size": 20.07,
              "sizeInBytes": 20074,
              "url": "/uploads/small_Imagen1_a87d9afac7.jpg"
            },
            "medium": {
              "name": "medium_Imagen1.jpg",
              "hash": "medium_Imagen1_a87d9afac7",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 750,
              "height": 563,
              "size": 35.22,
              "sizeInBytes": 35224,
              "url": "/uploads/medium_Imagen1_a87d9afac7.jpg"
            }
          }
        }
      },
      {
        "name": "So it's been 10 years huh",
        "release_date": "2024-06-12T06:00:00.000Z",
        "release_date_format": "DD/MM/AAAA",
        "watching_date": "2024-10-15T06:00:00.000Z",
        "watching_date_format": "??/MM/AAAA",
        "review": "Good video",
        "description": "Good video Jaiden",
        "slug": "jaiden-animations-so-its-been-10-years-huh",
        "grade": 97,
        "locale": "en",
        "url": "https://www.youtube.com/watch?v=7KDWBkmRRIo",
        "createdAt": "2025-05-17T20:20:26.983Z",
        "id": 3,
        "logo": {
          "name": "test-serie1.jpg",
          "alternativeText": null,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_test-serie1.jpg",
              "hash": "thumbnail_test_serie1_17e624c110",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 156,
              "height": 156,
              "size": 6.27,
              "sizeInBytes": 6267,
              "url": "/uploads/thumbnail_test_serie1_17e624c110.jpg"
            },
            "small": {
              "name": "small_test-serie1.jpg",
              "hash": "small_test_serie1_17e624c110",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 500,
              "height": 500,
              "size": 27.73,
              "sizeInBytes": 27729,
              "url": "/uploads/small_test_serie1_17e624c110.jpg"
            }
          }
        }
      }
    ],
    "logo": {
      "name": "test-juego1.jpg",
      "alternativeText": null,
      "formats": {
        "thumbnail": {
          "name": "thumbnail_test-juego1.jpg",
          "hash": "thumbnail_test_juego1_882db78950",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 156,
          "height": 156,
          "size": 5.35,
          "sizeInBytes": 5349,
          "url": "/uploads/thumbnail_test_juego1_882db78950.jpg"
        },
        "small": {
          "name": "small_test-juego1.jpg",
          "hash": "small_test_juego1_882db78950",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 500,
          "height": 500,
          "size": 28.19,
          "sizeInBytes": 28190,
          "url": "/uploads/small_test_juego1_882db78950.jpg"
        }
      }
    }
  },
  "meta": {

  }
}
```

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-playlists/noexisto```):

```json
{
  "data": null,
  "error": {
    "status": 404,
    "name": "NotFoundError",
    "message": "Not Found",
    "details": {

    }
  }
}
```

# El apartado de deportes

## Deportes

La colección que guarda los posts referentes a los deportes de los que quiero hablar

La estructura de la colección es la siguiente:

- **name:** Text *(Short text, required, localization enabled)*: Nombre del deporte
- **logo:** Media *(Single media, only images allowed, required)*: Imagen en escala 1:1 del logotipo del deporte
- **description:** Rich text (Markdown) *(Localization enabled)*: Descripción más extensa del deporte
- **slug:** UID *(Required)*: Slug que se usa desde el FrontEnd para acceder a un elemento específico de la colección
- **mht_leagues** Relation with MHT-League *(MHT-Sport belongs to many MHT-Leagues)*: Relación con las ligas deportivas relacionadas a este deporte
- **grade** Number *(Decimal)*: La calificación que le doy al deporte de 0 a 100 con solamente un decimal posible

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/mht-sports

Obtener todos los deportes

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mht-sports?locale=es-419```: Trae los deportes con localización en español latino usando las configuraciones por defecto de paginación y orden
- ```/api/mht-sports?orderBy=name-asc&page=2&pageSize=2```: Trae los deportes ordenando por nombre ascendentemente usando una paginación de tamaño de dos registros encontrándonos en la página 2
- ```/api/mht-sports?exclude=basketball&randomSeed=15&page=1&pageSize=2```: Trae los deportes excluyendo el registro con slug basketball usando una semilla aleatoria para mezclar los registros que trae con un tamaño de página de 2 registros en la página 1

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Se programó manualmente el parámetro ```search``` para poder realizar búsquedas de canales. Si este parámetro está vacío, no realizará ninguna búsqueda pero de llevar algo, buscará solamente coincidencias con el campo del nombre del canal

Se programó manualmente el parámetro ```exclude``` que permite excluir un registro a través de pasarle su slug. Esto enfocado para cuando se quieran dar sugerencias dentro de una consulta de un canal y evitar sugerir el mismo canal que se está consultando. Se pasaría entonces el slug del canal que se quiere excluir

Se programó manualmente la paginación a través de las variables ```page``` y ```pageSize``` que describen el número de página y el tamaño de la página deseado respectivamente. Si el número de página no es indicado, por defecto tomará el valor de 1. Si el tamaño de la página no es indicado, por defecto tomará el valor de la longitud del arreglo regresado. Si el número de página es mayor al total de páginas que habría según los parámetros de paginación, el número de página pasa a ser 1 devolviendo a la primera página

Se programó una forma de ordenar los resultados de este endpoint a través de la variable ```orderBy``` la cual puede obtener los siguientes valores:

- ```name-asc```: Ordena los resultados alfabéticamente en función del nombre
- ```name-desc```: Ordena los resultados en orden alfabético inverso en función del nombre
- ```createdAtDate-asc```: Ordena los resultados de forma ascendente en función de la fecha en la que creé mi entrada de blog sobre este deporte
- ```createdAtDate-desc```: Ordena los resultados de forma descendente en función de la fecha en la que creé mi entrada de blog sobre este deporte
- ```grade-asc```: Ordena los resultados de forma ascendente en función de la calificación que le di a este deporte
- ```grade-desc```: Ordena los resultados de forma descendente en función de la calificación que le di a este deporte
- Cualquier otro valor que se le pase, incluso si no se le pasa un valor, ordenará por defecto el resultado alfabéticamente en función del nombre

Se programó manualmente a través de la variable ```randomSeed``` una semilla aleatoria para mezclar el resultado de documentos y poder mostrarlos de forma aleatoria en el FrontEnd. Si se pasa este parámetro, sobrescribirá al parámetro de ```orderBy```. Si el parámetro no recibe nada, por defecto los ordenará como se deseé con el parámetro ```orderBy```

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-sports?search=basketball```):

```json
{
  "data": [
    {
      "name": "Basketball",
      "description": "Example basket",
      "slug": "basketball",
      "grade": 99,
      "locale": "en",
      "createdAt": "2025-05-19T00:28:46.017Z",
      "id": 16,
      "mht_leagues": [
        {
          "name": "NBA",
          "description": "Example NBA",
          "slug": "nba",
          "grade": 99,
          "locale": "en",
          "createdAt": "2025-05-19T00:31:33.855Z",
          "id": 16,
          "logo": {
            "name": "test-juego1.jpg",
            "alternativeText": null,
            "formats": {
              "thumbnail": {
                "name": "thumbnail_test-juego1.jpg",
                "hash": "thumbnail_test_juego1_882db78950",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "path": null,
                "width": 156,
                "height": 156,
                "size": 5.35,
                "sizeInBytes": 5349,
                "url": "/uploads/thumbnail_test_juego1_882db78950.jpg"
              },
              "small": {
                "name": "small_test-juego1.jpg",
                "hash": "small_test_juego1_882db78950",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "path": null,
                "width": 500,
                "height": 500,
                "size": 28.19,
                "sizeInBytes": 28190,
                "url": "/uploads/small_test_juego1_882db78950.jpg"
              }
            }
          }
        },
        {
          "name": "Basketball olímpico",
          "description": "Example olympics",
          "slug": "olympic-basketball",
          "grade": 70,
          "locale": "en",
          "createdAt": "2025-05-19T00:32:36.638Z",
          "id": 14,
          "logo": {
            "name": "test-serie1.jpg",
            "alternativeText": null,
            "formats": {
              "thumbnail": {
                "name": "thumbnail_test-serie1.jpg",
                "hash": "thumbnail_test_serie1_17e624c110",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "path": null,
                "width": 156,
                "height": 156,
                "size": 6.27,
                "sizeInBytes": 6267,
                "url": "/uploads/thumbnail_test_serie1_17e624c110.jpg"
              },
              "small": {
                "name": "small_test-serie1.jpg",
                "hash": "small_test_serie1_17e624c110",
                "ext": ".jpg",
                "mime": "image/jpeg",
                "path": null,
                "width": 500,
                "height": 500,
                "size": 27.73,
                "sizeInBytes": 27729,
                "url": "/uploads/small_test_serie1_17e624c110.jpg"
              }
            }
          }
        }
      ],
      "logo": {
        "name": "test-serie1.jpg",
        "alternativeText": null,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_test-serie1.jpg",
            "hash": "thumbnail_test_serie1_17e624c110",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 156,
            "height": 156,
            "size": 6.27,
            "sizeInBytes": 6267,
            "url": "/uploads/thumbnail_test_serie1_17e624c110.jpg"
          },
          "small": {
            "name": "small_test-serie1.jpg",
            "hash": "small_test_serie1_17e624c110",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 500,
            "size": 27.73,
            "sizeInBytes": 27729,
            "url": "/uploads/small_test_serie1_17e624c110.jpg"
          }
        }
      }
    }
  ],
  "meta": {
    "page": "1",
    "pageSize": 1,
    "totalPages": 1
  }
}
```

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-sports?search=noexisto```):

```json
{
  "data": [],
  "meta": {
    "page": "1",
    "pageSize": 0,
    "totalPages": null
  }
}
```

### ℹ️ GET /api/mht-sports/:slug

Obtener un deporte en específico

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mht-sports/basketball```: Consultando el registro con el endpoint que se buscaba con la configuración de idioma por defecto
- ```/api/mht-sports/soccer?locale=en```: Consultando el registro con el endpoint que se buscaba con la localización de inglés
- ```/api/mht-sports/motor-racing?locale=es-419```: Consultando el registro con el endpoint que se buscaba con la localización de español latinoamérica

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-sports/basketball```):

```json
{
  "data": {
    "name": "Basketball",
    "description": "Example basket",
    "slug": "basketball",
    "grade": 99,
    "locale": "en",
    "createdAt": "2025-05-19T00:28:46.017Z",
    "id": 16,
    "mht_leagues": [
      {
        "name": "NBA",
        "description": "Example NBA",
        "slug": "nba",
        "grade": 99,
        "locale": "en",
        "createdAt": "2025-05-19T00:31:33.855Z",
        "id": 16,
        "logo": {
          "name": "test-juego1.jpg",
          "alternativeText": null,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_test-juego1.jpg",
              "hash": "thumbnail_test_juego1_882db78950",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 156,
              "height": 156,
              "size": 5.35,
              "sizeInBytes": 5349,
              "url": "/uploads/thumbnail_test_juego1_882db78950.jpg"
            },
            "small": {
              "name": "small_test-juego1.jpg",
              "hash": "small_test_juego1_882db78950",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 500,
              "height": 500,
              "size": 28.19,
              "sizeInBytes": 28190,
              "url": "/uploads/small_test_juego1_882db78950.jpg"
            }
          }
        }
      },
      {
        "name": "Basketball olímpico",
        "description": "Example olympics",
        "slug": "olympic-basketball",
        "grade": 70,
        "locale": "en",
        "createdAt": "2025-05-19T00:32:36.638Z",
        "id": 14,
        "logo": {
          "name": "test-serie1.jpg",
          "alternativeText": null,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_test-serie1.jpg",
              "hash": "thumbnail_test_serie1_17e624c110",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 156,
              "height": 156,
              "size": 6.27,
              "sizeInBytes": 6267,
              "url": "/uploads/thumbnail_test_serie1_17e624c110.jpg"
            },
            "small": {
              "name": "small_test-serie1.jpg",
              "hash": "small_test_serie1_17e624c110",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 500,
              "height": 500,
              "size": 27.73,
              "sizeInBytes": 27729,
              "url": "/uploads/small_test_serie1_17e624c110.jpg"
            }
          }
        }
      }
    ],
    "logo": {
      "name": "test-serie1.jpg",
      "alternativeText": null,
      "formats": {
        "thumbnail": {
          "name": "thumbnail_test-serie1.jpg",
          "hash": "thumbnail_test_serie1_17e624c110",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 156,
          "height": 156,
          "size": 6.27,
          "sizeInBytes": 6267,
          "url": "/uploads/thumbnail_test_serie1_17e624c110.jpg"
        },
        "small": {
          "name": "small_test-serie1.jpg",
          "hash": "small_test_serie1_17e624c110",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 500,
          "height": 500,
          "size": 27.73,
          "sizeInBytes": 27729,
          "url": "/uploads/small_test_serie1_17e624c110.jpg"
        }
      }
    }
  },
  "meta": {

  }
}
```

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-sports/noexisto```):

```json
{
  "data": null,
  "error": {
    "status": 404,
    "name": "NotFoundError",
    "message": "Not Found",
    "details": {

    }
  }
}
```

## Ligas

La colección que guarda los posts referentes a las ligas deportivas de las que quiero hablar

La estructura de la colección es la siguiente:

- **name:** Text *(Short text, required, localization enabled)*: Nombre de la liga
- **logo:** Media *(Single media, only images allowed, required)*: Imagen en escala 1:1 del logotipo de la liga
- **description:** Rich text (Markdown) *(Localization enabled)*: Descripción más extensa de la liga
- **slug:** UID *(Required)*: Slug que se usa desde el FrontEnd para acceder a un elemento específico de la colección
- **mht_sport** Relation with MHT-Sport *(MHT-Sport has many MHT-Leagues)*: Relación con el deporte relacionado a esta liga
- **mht_tournaments** Relation with MHT-Tournament *(MHT-League belongs to many MHT-Tournaments)*: Relación con las temporadas deportivas relacionadas a esta liga
- **grade** Number *(Decimal)*: La calificación que le doy a la temporada deportiva de 0 a 100 con solamente un decimal posible

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/mht-leagues

Obtener todas las ligas

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mht-leagues?locale=es-419```: Trae las ligas con localización en español latino usando las configuraciones por defecto de paginación y orden
- ```/api/mht-leagues?orderBy=name-asc&page=2&pageSize=2```: Trae las ligas ordenando por nombre ascendentemente usando una paginación de tamaño de dos registros encontrándonos en la página 2
- ```/api/mht-leagues?exclude=nba&randomSeed=15&page=1&pageSize=2```: Trae las ligas excluyendo el registro con slug nba usando una semilla aleatoria para mezclar los registros que trae con un tamaño de página de 2 registros en la página 1

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Se programó manualmente el parámetro ```sport``` para agrupar las ligas por el slug de un deporte. Si no se le pasa nada, regresa todas las ligas

Se programó manualmente el parámetro ```search``` para poder realizar búsquedas de ligas. Si este parámetro está vacío, no realizará ninguna búsqueda pero de llevar algo, buscará solamente coincidencias con el campo del nombre de la liga

Se programó manualmente el parámetro ```exclude``` que permite excluir un registro a través de pasarle su slug. Esto enfocado para cuando se quieran dar sugerencias dentro de una consulta de una liga y evitar sugerir la misma liga que se está consultando. Se pasaría entonces el slug de la liga que se quiere excluir

Se programó manualmente la paginación a través de las variables ```page``` y ```pageSize``` que describen el número de página y el tamaño de la página deseado respectivamente. Si el número de página no es indicado, por defecto tomará el valor de 1. Si el tamaño de la página no es indicado, por defecto tomará el valor de la longitud del arreglo regresado. Si el número de página es mayor al total de páginas que habría según los parámetros de paginación, el número de página pasa a ser 1 devolviendo a la primera página

Se programó una forma de ordenar los resultados de este endpoint a través de la variable ```orderBy``` la cual puede obtener los siguientes valores:

- ```name-asc```: Ordena los resultados alfabéticamente en función del nombre
- ```name-desc```: Ordena los resultados en orden alfabético inverso en función del nombre
- ```createdAtDate-asc```: Ordena los resultados de forma ascendente en función de la fecha en la que creé mi entrada de blog sobre esta liga
- ```createdAtDate-desc```: Ordena los resultados de forma descendente en función de la fecha en la que creé mi entrada de blog sobre esta liga
- ```grade-asc```: Ordena los resultados de forma ascendente en función de la calificación que le di a esta liga
- ```grade-desc```: Ordena los resultados de forma descendente en función de la calificación que le di a esta liga
- Cualquier otro valor que se le pase, incluso si no se le pasa un valor, ordenará por defecto el resultado alfabéticamente en función del nombre

Se programó manualmente a través de la variable ```randomSeed``` una semilla aleatoria para mezclar el resultado de documentos y poder mostrarlos de forma aleatoria en el FrontEnd. Si se pasa este parámetro, sobrescribirá al parámetro de ```orderBy```. Si el parámetro no recibe nada, por defecto los ordenará como se deseé con el parámetro ```orderBy```

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-leagues?search=nba```):

```json
{
  "data": [
    {
      "name": "NBA",
      "description": "Example NBA",
      "slug": "nba",
      "grade": 99,
      "locale": "en",
      "createdAt": "2025-05-19T00:31:33.855Z",
      "id": 16,
      "mht_sport": {
        "name": "Basketball",
        "description": "Example basket",
        "slug": "basketball",
        "grade": 99,
        "locale": "en",
        "createdAt": "2025-05-19T00:28:46.017Z",
        "id": 16,
        "logo": {
          "name": "test-serie1.jpg",
          "alternativeText": null,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_test-serie1.jpg",
              "hash": "thumbnail_test_serie1_17e624c110",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 156,
              "height": 156,
              "size": 6.27,
              "sizeInBytes": 6267,
              "url": "/uploads/thumbnail_test_serie1_17e624c110.jpg"
            },
            "small": {
              "name": "small_test-serie1.jpg",
              "hash": "small_test_serie1_17e624c110",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 500,
              "height": 500,
              "size": 27.73,
              "sizeInBytes": 27729,
              "url": "/uploads/small_test_serie1_17e624c110.jpg"
            }
          }
        }
      },
      "mht_tournaments": [
        {
          "name": "2024-2025 Season",
          "initial_watching_date": "2024-10-16T06:00:00.000Z",
          "initial_watching_date_format": "DD/MM/AAAA",
          "end_watching_date": "2025-06-18T06:00:00.000Z",
          "end_watching_date_format": "DD/MM/AAAA",
          "initial_release_date": "2024-10-16T06:00:00.000Z",
          "initial_release_date_format": "DD/MM/AAAA",
          "end_release_date": "2025-06-18T06:00:00.000Z",
          "end_release_date_format": "DD/MM/AAAA",
          "description": "Example of season 24 - 25",
          "slug": "nba-season-2024-2025",
          "grade": 95.4,
          "locale": "en",
          "createdAt": "2025-05-19T00:37:02.940Z"
        },
        {
          "name": "Season 2023-2024",
          "initial_watching_date": "2025-05-07T06:00:00.000Z",
          "initial_watching_date_format": "DD/MM/AAAA",
          "end_watching_date": "2025-05-14T06:00:00.000Z",
          "end_watching_date_format": "??/MM/AAAA",
          "initial_release_date": "2025-05-25T06:00:00.000Z",
          "initial_release_date_format": "??/??/AAAA",
          "end_release_date": "2025-05-23T06:00:00.000Z",
          "end_release_date_format": "??/??/AAAA",
          "description": "Example",
          "slug": "nba-season-2023-2024",
          "grade": 89.9,
          "locale": "en",
          "createdAt": "2025-05-19T00:38:26.990Z"
        }
      ],
      "logo": {
        "name": "test-juego1.jpg",
        "alternativeText": null,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_test-juego1.jpg",
            "hash": "thumbnail_test_juego1_882db78950",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 156,
            "height": 156,
            "size": 5.35,
            "sizeInBytes": 5349,
            "url": "/uploads/thumbnail_test_juego1_882db78950.jpg"
          },
          "small": {
            "name": "small_test-juego1.jpg",
            "hash": "small_test_juego1_882db78950",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 500,
            "size": 28.19,
            "sizeInBytes": 28190,
            "url": "/uploads/small_test_juego1_882db78950.jpg"
          }
        }
      }
    }
  ],
  "meta": {
    "page": "1",
    "pageSize": 1,
    "totalPages": 1
  }
}
```

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-leagues?search=noexisto```):

```json
{
  "data": [],
  "meta": {
    "page": "1",
    "pageSize": 0,
    "totalPages": null
  }
}
```

### ℹ️ GET /api/mht-leagues/:slug

Obtener una liga en específico

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mht-leagues/nba```: Consultando el registro con el endpoint que se buscaba con la configuración de idioma por defecto
- ```/api/mht-leagues/liga-mx?locale=en```: Consultando el registro con el endpoint que se buscaba con la localización de inglés
- ```/api/mht-leagues/formula-1?locale=es-419```: Consultando el registro con el endpoint que se buscaba con la localización de español latinoamérica

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-leagues/nba```):

```json
{
  "data": {
    "name": "NBA",
    "description": "Example NBA",
    "slug": "nba",
    "grade": 99,
    "locale": "en",
    "createdAt": "2025-05-19T00:31:33.855Z",
    "id": 16,
    "mht_sport": {
      "name": "Basketball",
      "description": "Example basket",
      "slug": "basketball",
      "grade": 99,
      "locale": "en",
      "createdAt": "2025-05-19T00:28:46.017Z",
      "id": 16,
      "logo": {
        "name": "test-serie1.jpg",
        "alternativeText": null,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_test-serie1.jpg",
            "hash": "thumbnail_test_serie1_17e624c110",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 156,
            "height": 156,
            "size": 6.27,
            "sizeInBytes": 6267,
            "url": "/uploads/thumbnail_test_serie1_17e624c110.jpg"
          },
          "small": {
            "name": "small_test-serie1.jpg",
            "hash": "small_test_serie1_17e624c110",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 500,
            "size": 27.73,
            "sizeInBytes": 27729,
            "url": "/uploads/small_test_serie1_17e624c110.jpg"
          }
        }
      }
    },
    "mht_tournaments": [
      {
        "name": "2024-2025 Season",
        "initial_watching_date": "2024-10-16T06:00:00.000Z",
        "initial_watching_date_format": "DD/MM/AAAA",
        "end_watching_date": "2025-06-18T06:00:00.000Z",
        "end_watching_date_format": "DD/MM/AAAA",
        "initial_release_date": "2024-10-16T06:00:00.000Z",
        "initial_release_date_format": "DD/MM/AAAA",
        "end_release_date": "2025-06-18T06:00:00.000Z",
        "end_release_date_format": "DD/MM/AAAA",
        "description": "Example of season 24 - 25",
        "slug": "nba-season-2024-2025",
        "grade": 95.4,
        "locale": "en",
        "createdAt": "2025-05-19T00:37:02.940Z"
      },
      {
        "name": "Season 2023-2024",
        "initial_watching_date": "2025-05-07T06:00:00.000Z",
        "initial_watching_date_format": "DD/MM/AAAA",
        "end_watching_date": "2025-05-14T06:00:00.000Z",
        "end_watching_date_format": "??/MM/AAAA",
        "initial_release_date": "2025-05-25T06:00:00.000Z",
        "initial_release_date_format": "??/??/AAAA",
        "end_release_date": "2025-05-23T06:00:00.000Z",
        "end_release_date_format": "??/??/AAAA",
        "description": "Example",
        "slug": "nba-season-2023-2024",
        "grade": 89.9,
        "locale": "en",
        "createdAt": "2025-05-19T00:38:26.990Z"
      }
    ],
    "logo": {
      "name": "test-juego1.jpg",
      "alternativeText": null,
      "formats": {
        "thumbnail": {
          "name": "thumbnail_test-juego1.jpg",
          "hash": "thumbnail_test_juego1_882db78950",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 156,
          "height": 156,
          "size": 5.35,
          "sizeInBytes": 5349,
          "url": "/uploads/thumbnail_test_juego1_882db78950.jpg"
        },
        "small": {
          "name": "small_test-juego1.jpg",
          "hash": "small_test_juego1_882db78950",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 500,
          "height": 500,
          "size": 28.19,
          "sizeInBytes": 28190,
          "url": "/uploads/small_test_juego1_882db78950.jpg"
        }
      }
    }
  },
  "meta": {

  }
}
```

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-leagues/noexisto```):

```json
{
  "data": null,
  "error": {
    "status": 404,
    "name": "NotFoundError",
    "message": "Not Found",
    "details": {

    }
  }
}
```

## Torneos

La colección que guarda los posts referentes a los torneos deportivos de los que quiero hablar

La estructura de la colección es la siguiente:

- **name:** Text *(Short text, required, localization enabled)*: Nombre de la temporada deportiva
- **initial_watching_date:** Date *(Datetime, required)*: Fecha en la que inicié a ver la temporada deportiva
- **initial_watching_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha en la que inicié a ver la temporada deportiva indicada en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año
- **end_watching_date:** Date *(Datetime)*: Fecha en la que terminé a ver la temporada deportiva
- **end_watching_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha en la que terminé a ver la temporada deportiva indicada en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año
- **initial_release_date:** Date *(Datetime, required)*: Fecha inicial de salida de la temporada deportiva
- **initial_release_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha inicial de salida de la temporada deportiva indicada en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año
- **end_release_date:** Date *(Datetime)*: Fecha final de salida de la temporada deportiva
- **end_release_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha final de salida de la temporada deportiva indicada en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año
- **grade** Number *(Decimal)*: La calificación que le doy a la temporada deportiva de 0 a 100 con solamente un decimal posible
- **description:** Rich text (Markdown) *(Localization enabled)*: Descripción más extensa de la temporada deportiva
- **slug:** UID *(Required)*: Slug que se usa desde el FrontEnd para acceder a un elemento específico de la colección
- **mht_league** Relation with MHT-League *(MHT-League has many MHT-Tournaments)*: Relación con la liga relacionada a esta temporada deportiva
- **mht_matches** Relation with MHT-Match *(MHT-Tournament belongs to many MHT-Matches)*: Relación con los partidos deportivos relacionados a esta temporada

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/mht-tournaments

Obtener todas las temporadas deportivas

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mht-tournaments?locale=es-419```: Trae los torneos con localización en español latino usando las configuraciones por defecto de paginación y orden
- ```/api/mht-tournaments?orderBy=name-asc&page=2&pageSize=2```: Trae los torneos ordenando por nombre ascendentemente usando una paginación de tamaño de dos registros encontrándonos en la página 2
- ```/api/mht-tournaments?exclude=nba-season-2023-2024&randomSeed=15&page=1&pageSize=2```: Trae los torneos excluyendo el registro con slug nba-season-2023-2024 usando una semilla aleatoria para mezclar los registros que trae con un tamaño de página de 2 registros en la página 1

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Se programó manualmente el parámetro ```league``` para agrupar las temporadas por el slug de una liga. Si no se le pasa nada, regresa todas las temporadas

Se programó manualmente el parámetro ```search``` para poder realizar búsquedas de temporadas. Si este parámetro está vacío, no realizará ninguna búsqueda pero de llevar algo, buscará solamente coincidencias con el campo del nombre de la liga

Se programó manualmente el parámetro ```exclude``` que permite excluir un registro a través de pasarle su slug. Esto enfocado para cuando se quieran dar sugerencias dentro de una consulta de una temporada y evitar sugerir la misma temporada que se está consultando. Se pasaría entonces el slug de la temporada que se quiere excluir

Se programó manualmente la paginación a través de las variables ```page``` y ```pageSize``` que describen el número de página y el tamaño de la página deseado respectivamente. Si el número de página no es indicado, por defecto tomará el valor de 1. Si el tamaño de la página no es indicado, por defecto tomará el valor de la longitud del arreglo regresado. Si el número de página es mayor al total de páginas que habría según los parámetros de paginación, el número de página pasa a ser 1 devolviendo a la primera página

Se programó una forma de ordenar los resultados de este endpoint a través de la variable ```orderBy``` la cual puede obtener los siguientes valores:

- ```name-asc```: Ordena los resultados alfabéticamente en función del nombre
- ```name-desc```: Ordena los resultados en orden alfabético inverso en función del nombre
- ```initialWatchingDate-asc```: Ordena los resultados de forma ascendente en función de la fecha en la que empecé a ver la temporada
- ```initialWatchingDate-desc```: Ordena los resultados de forma descendente en función de la fecha en la que empecé a ver la temporada
- ```initialReleaseDate-asc```: Ordena los resultados de forma ascendente en función de la fecha de salida de la temporada
- ```initialReleaseDate-desc```: Ordena los resultados de forma descendente en función de la fecha de salida de la temporada
- ```createdAtDate-asc```: Ordena los resultados de forma ascendente en función de la fecha en la que creé mi entrada de blog sobre esta temporada
- ```createdAtDate-desc```: Ordena los resultados de forma descendente en función de la fecha en la que creé mi entrada de blog sobre esta temporada
- ```grade-asc```: Ordena los resultados de forma ascendente en función de la calificación que le di a esta temporada
- ```grade-desc```: Ordena los resultados de forma descendente en función de la calificación que le di a esta temporada
- Cualquier otro valor que se le pase, incluso si no se le pasa un valor, ordenará por defecto el resultado alfabéticamente en función del nombre

Se programó manualmente a través de la variable ```randomSeed``` una semilla aleatoria para mezclar el resultado de documentos y poder mostrarlos de forma aleatoria en el FrontEnd. Si se pasa este parámetro, sobrescribirá al parámetro de ```orderBy```. Si el parámetro no recibe nada, por defecto los ordenará como se deseé con el parámetro ```orderBy```

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-tournaments?search=2023```):

```json
{
  "data": [
    {
      "name": "Season 2023-2024",
      "initial_watching_date": "2025-05-07T06:00:00.000Z",
      "initial_watching_date_format": "DD/MM/AAAA",
      "end_watching_date": "2025-05-14T06:00:00.000Z",
      "end_watching_date_format": "??/MM/AAAA",
      "initial_release_date": "2025-05-25T06:00:00.000Z",
      "initial_release_date_format": "??/??/AAAA",
      "end_release_date": "2025-05-23T06:00:00.000Z",
      "end_release_date_format": "??/??/AAAA",
      "description": "Example",
      "slug": "nba-season-2023-2024",
      "grade": 89.9,
      "locale": "en",
      "createdAt": "2025-05-19T00:38:26.990Z",
      "id": 8,
      "mht_league": {
        "name": "NBA",
        "description": "Example NBA",
        "slug": "nba",
        "grade": 99,
        "locale": "en",
        "createdAt": "2025-05-19T00:31:33.855Z",
        "id": 16,
        "logo": {
          "name": "test-juego1.jpg",
          "alternativeText": null,
          "formats": {
            "thumbnail": {
              "name": "thumbnail_test-juego1.jpg",
              "hash": "thumbnail_test_juego1_882db78950",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 156,
              "height": 156,
              "size": 5.35,
              "sizeInBytes": 5349,
              "url": "/uploads/thumbnail_test_juego1_882db78950.jpg"
            },
            "small": {
              "name": "small_test-juego1.jpg",
              "hash": "small_test_juego1_882db78950",
              "ext": ".jpg",
              "mime": "image/jpeg",
              "path": null,
              "width": 500,
              "height": 500,
              "size": 28.19,
              "sizeInBytes": 28190,
              "url": "/uploads/small_test_juego1_882db78950.jpg"
            }
          }
        }
      },
      "mht_matches": []
    }
  ],
  "meta": {
    "page": "1",
    "pageSize": 1,
    "totalPages": 1
  }
}
```

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-tournaments?search=noexisto```):

```json
{
  "data": [],
  "meta": {
    "page": "1",
    "pageSize": 0,
    "totalPages": null
  }
}
```

### ℹ️ GET /api/mht-tournaments/:slug

Obtener un torneo en específico

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mht-tournaments/nba-season-2023-2024```: Consultando el registro con el endpoint que se buscaba con la configuración de idioma por defecto
- ```/api/mht-tournaments/liga-mx-clausura-2013?locale=en```: Consultando el registro con el endpoint que se buscaba con la localización de inglés
- ```/api/mht-tournaments/formula-1-season-2024?locale=es-419```: Consultando el registro con el endpoint que se buscaba con la localización de español latinoamérica

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-tournaments/nba-season-2023-2024```):

```json
{
  "data": {
    "name": "Season 2023-2024",
    "initial_watching_date": "2025-05-07T06:00:00.000Z",
    "initial_watching_date_format": "DD/MM/AAAA",
    "end_watching_date": "2025-05-14T06:00:00.000Z",
    "end_watching_date_format": "??/MM/AAAA",
    "initial_release_date": "2025-05-25T06:00:00.000Z",
    "initial_release_date_format": "??/??/AAAA",
    "end_release_date": "2025-05-23T06:00:00.000Z",
    "end_release_date_format": "??/??/AAAA",
    "description": "Example",
    "slug": "nba-season-2023-2024",
    "grade": 89.9,
    "locale": "en",
    "createdAt": "2025-05-19T00:38:26.990Z",
    "id": 8,
    "mht_league": {
      "name": "NBA",
      "description": "Example NBA",
      "slug": "nba",
      "grade": 99,
      "locale": "en",
      "createdAt": "2025-05-19T00:31:33.855Z",
      "id": 16,
      "logo": {
        "name": "test-juego1.jpg",
        "alternativeText": null,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_test-juego1.jpg",
            "hash": "thumbnail_test_juego1_882db78950",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 156,
            "height": 156,
            "size": 5.35,
            "sizeInBytes": 5349,
            "url": "/uploads/thumbnail_test_juego1_882db78950.jpg"
          },
          "small": {
            "name": "small_test-juego1.jpg",
            "hash": "small_test_juego1_882db78950",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 500,
            "size": 28.19,
            "sizeInBytes": 28190,
            "url": "/uploads/small_test_juego1_882db78950.jpg"
          }
        }
      }
    },
    "mht_matches": []
  },
  "meta": {

  }
}
```

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-tournaments/noexisto```):

```json
{
  "data": null,
  "error": {
    "status": 404,
    "name": "NotFoundError",
    "message": "Not Found",
    "details": {

    }
  }
}
```

## Partidos

La colección que guarda los posts referentes a los partidos o eventos deportivos de los que quiero hablar

La estructura de la colección es la siguiente:

- **name:** Text *(Short text, required, localization enabled)*: Nombre de la temporada deportiva
- **watching_date:** Date *(Datetime, required)*: Fecha en la que vi el partido
- **watching_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha en la que vi el partido indicada en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año
- **release_date:** Date *(Datetime, required)*: Fecha de salida del partido
- **release_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha de salida del partido indicada en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año
- **grade** Number *(Decimal)*: La calificación que le doy a la temporada deportiva de 0 a 100 con solamente un decimal posible
- **description:** Rich text (Markdown) *(Localization enabled)*: Descripción más extensa de la temporada deportiva
- **slug:** UID *(Required)*: Slug que se usa desde el FrontEnd para acceder a un elemento específico de la colección
- **mht_tournament** Relation with MHT-Tournament *(MHT-Tournament has many MHT-Matches)*: Relación con la temporada relacionada a este partido

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/mht-matches

Obtener todos los partidos deportivos

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mht-matches?locale=es-419```: Trae los partidos con localización en español latino usando las configuraciones por defecto de paginación y orden
- ```/api/mht-matches?orderBy=name-asc&page=2&pageSize=2```: Trae los partidos ordenando por nombre ascendentemente usando una paginación de tamaño de dos registros encontrándonos en la página 2
- ```/api/mht-matches?exclude=okc-vs-min&randomSeed=15&page=1&pageSize=2```: Trae los partidos excluyendo el registro con slug okc-vs-min usando una semilla aleatoria para mezclar los registros que trae con un tamaño de página de 2 registros en la página 1

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Se programó manualmente el parámetro ```tournament``` para agrupar los partidos por el slug de un torneo. Si no se le pasa nada, regresa todos los partidos

Se programó manualmente el parámetro ```search``` para poder realizar búsquedas de partidos. Si este parámetro está vacío, no realizará ninguna búsqueda pero de llevar algo, buscará solamente coincidencias con el campo del nombre de la liga

Se programó manualmente el parámetro ```exclude``` que permite excluir un registro a través de pasarle su slug. Esto enfocado para cuando se quieran dar sugerencias dentro de una consulta de un partido y evitar sugerir el mismo partido que se está consultando. Se pasaría entonces el slug del partido que se quiere excluir

Se programó manualmente la paginación a través de las variables ```page``` y ```pageSize``` que describen el número de página y el tamaño de la página deseado respectivamente. Si el número de página no es indicado, por defecto tomará el valor de 1. Si el tamaño de la página no es indicado, por defecto tomará el valor de la longitud del arreglo regresado. Si el número de página es mayor al total de páginas que habría según los parámetros de paginación, el número de página pasa a ser 1 devolviendo a la primera página

Se programó una forma de ordenar los resultados de este endpoint a través de la variable ```orderBy``` la cual puede obtener los siguientes valores:

- ```name-asc```: Ordena los resultados alfabéticamente en función del nombre
- ```name-desc```: Ordena los resultados en orden alfabético inverso en función del nombre
- ```watchingDate-asc```: Ordena los resultados de forma ascendente en función de la fecha en la que empecé a ver la temporada
- ```watchingDate-desc```: Ordena los resultados de forma descendente en función de la fecha en la que empecé a ver la temporada
- ```releaseDate-asc```: Ordena los resultados de forma ascendente en función de la fecha de salida de la temporada
- ```releaseDate-desc```: Ordena los resultados de forma descendente en función de la fecha de salida de la temporada
- ```createdAtDate-asc```: Ordena los resultados de forma ascendente en función de la fecha en la que creé mi entrada de blog sobre esta temporada
- ```createdAtDate-desc```: Ordena los resultados de forma descendente en función de la fecha en la que creé mi entrada de blog sobre esta temporada
- ```grade-asc```: Ordena los resultados de forma ascendente en función de la calificación que le di a esta temporada
- ```grade-desc```: Ordena los resultados de forma descendente en función de la calificación que le di a esta temporada
- Cualquier otro valor que se le pase, incluso si no se le pasa un valor, ordenará por defecto el resultado alfabéticamente en función del nombre

Se programó manualmente a través de la variable ```randomSeed``` una semilla aleatoria para mezclar el resultado de documentos y poder mostrarlos de forma aleatoria en el FrontEnd. Si se pasa este parámetro, sobrescribirá al parámetro de ```orderBy```. Si el parámetro no recibe nada, por defecto los ordenará como se deseé con el parámetro ```orderBy```

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-matches?search=oklahoma```):

```json
{
  "data": [
    {
      "name": "Oklahoma City Thunder vs Denver Nuggets",
      "watching_date": "2025-05-07T06:00:00.000Z",
      "watching_date_format": "??/MM/AAAA",
      "release_date": "2025-05-14T06:00:00.000Z",
      "release_date_format": "DD/MM/AAAA",
      "description": "Example",
      "slug": "okc-vs-den",
      "grade": 99.9,
      "locale": "en",
      "createdAt": "2025-05-19T00:41:09.959Z",
      "id": 8,
      "mht_tournament": {
        "name": "2024-2025 Season",
        "initial_watching_date": "2024-10-16T06:00:00.000Z",
        "initial_watching_date_format": "DD/MM/AAAA",
        "end_watching_date": "2025-06-18T06:00:00.000Z",
        "end_watching_date_format": "DD/MM/AAAA",
        "initial_release_date": "2024-10-16T06:00:00.000Z",
        "initial_release_date_format": "DD/MM/AAAA",
        "end_release_date": "2025-06-18T06:00:00.000Z",
        "end_release_date_format": "DD/MM/AAAA",
        "description": "Example of season 24 - 25",
        "slug": "nba-season-2024-2025",
        "grade": 95.4,
        "locale": "en",
        "createdAt": "2025-05-19T00:37:02.940Z"
      }
    }
  ],
  "meta": {
    "page": "1",
    "pageSize": 1,
    "totalPages": 1
  }
}
```

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-matches?search=noexisto```):

```json
{
  "data": [],
  "meta": {
    "page": "1",
    "pageSize": 0,
    "totalPages": null
  }
}
```

### ℹ️ GET /api/mht-matches/:slug

btener un torneo en específico

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mht-matches/gsw-vs-min```: Consultando el registro con el endpoint que se buscaba con la configuración de idioma por defecto
- ```/api/mht-matches/lal-vs-orl?locale=en```: Consultando el registro con el endpoint que se buscaba con la localización de inglés
- ```/api/mht-matches/nyk-vs-ind?locale=es-419```: Consultando el registro con el endpoint que se buscaba con la localización de español latinoamérica

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-matches/okc-vs-den```):

```json
{
  "data": {
    "name": "Oklahoma City Thunder vs Denver Nuggets",
    "watching_date": "2025-05-07T06:00:00.000Z",
    "watching_date_format": "??/MM/AAAA",
    "release_date": "2025-05-14T06:00:00.000Z",
    "release_date_format": "DD/MM/AAAA",
    "description": "Example",
    "slug": "okc-vs-den",
    "grade": 99.9,
    "locale": "en",
    "createdAt": "2025-05-19T00:41:09.959Z",
    "id": 8,
    "mht_tournament": {
      "name": "2024-2025 Season",
      "initial_watching_date": "2024-10-16T06:00:00.000Z",
      "initial_watching_date_format": "DD/MM/AAAA",
      "end_watching_date": "2025-06-18T06:00:00.000Z",
      "end_watching_date_format": "DD/MM/AAAA",
      "initial_release_date": "2024-10-16T06:00:00.000Z",
      "initial_release_date_format": "DD/MM/AAAA",
      "end_release_date": "2025-06-18T06:00:00.000Z",
      "end_release_date_format": "DD/MM/AAAA",
      "description": "Example of season 24 - 25",
      "slug": "nba-season-2024-2025",
      "grade": 95.4,
      "locale": "en",
      "createdAt": "2025-05-19T00:37:02.940Z"
    }
  },
  "meta": {

  }
}
```

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mht-matches/noexisto```):

```json
{
  "data": null,
  "error": {
    "status": 404,
    "name": "NotFoundError",
    "message": "Not Found",
    "details": {

    }
  }
}
```