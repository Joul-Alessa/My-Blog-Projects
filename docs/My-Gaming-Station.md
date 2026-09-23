Tabla de contenidos:

- [My Gaming Station](#my-gaming-station)
  - [Videojuegos](#videojuegos)
    - [ℹ️ GET /api/mgs-videogames](#ℹ️-get-apimgs-videogames)
    - [ℹ️ GET /api/mgs-videogames/:slug](#ℹ️-get-apimgs-videogamesslug)
  - [Series](#series)
    - [ℹ️ GET /api/mgs-series](#ℹ️-get-apimgs-series)
    - [ℹ️ GET /api/mgs-series/:slug](#ℹ️-get-apimgs-seriesslug)

# My Gaming Station

My Gaming Station es el título del proyecto blog dirigido a hablar de videojuegos. Dentro de My Blog Projects, todas las tablas y colecciones que corresponden a este proyecto llevan el prefijo "MGS"

Las tablas, colecciones y endpoints de My Gaming Station se enlistan a continuación:

## Videojuegos

La colección que guarda los posts referentes a los videojuegos de los que quiero hablar

La estructura de la colección es la siguiente:

- **name:** Text *(Short text, required, localization enabled)*: Nombre del videojuego
- **description:** Rich text (Markdown) *(Localization enabled)*: Descripción sobre el videojuego
- **logo:** Media *(Single media, only images allowed, required)*: Imagen en escala 1:1 del logotipo del videojuego
- **slug:** UID *(Required)*: Slug que se usa desde el FrontEnd para acceder a un elemento específico de la colección
- **release_date:** Date *(Datetime, required)*: Fecha de salida del videojuego
- **started_playing_date:** Date *(Datetime, required)*: Fecha en la que empecé a jugar el videojuego
- **release_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha de salida del videojuego indicada en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año
- **started_playing_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha en la que empecé a jugar el videojuego en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año
- **mgs_series** Relation with MGS-Serie *(MGS-Videogame belongs to many MGS-Series)*: Relación con las series relacionadas a este videojuego
- **grade** Number *(Decimal)*: La calificación que le doy al videojuego de 0 a 100 con solamente un decimal posible

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/mgs-videogames

Obtener todos los videojuegos

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mgs-videogames?locale=es-419```: Trae los videojuegos con localización en español latino usando las configuraciones por defecto de paginación y orden
- ```/api/mgs-videogames?orderBy=name-asc&page=2&pageSize=2```: Trae los videojuegos ordenando por nombre ascendentemente usando una paginación de tamaño de dos registros encontrándonos en la página 2
- ```/api/mgs-videogames?exclude=minecraft&randomSeed=15&page=1&pageSize=2```: Trae los videojuegos excluyendo el registro con slug minecraft usando una semilla aleatoria para mezclar los registros que trae con un tamaño de página de 2 registros en la página 1

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Se programó manualmente el parámetro ```search``` para poder realizar búsquedas de videojuegos. Si este parámetro está vacío, no realizará ninguna búsqueda pero de llevar algo, buscará solamente coincidencias con el campo del nombre del videojuego

Se programó manualmente el parámetro ```exclude``` que permite excluir un registro a través de pasarle su slug. Esto enfocado para cuando se quieran dar sugerencias dentro de una consulta de un videojuego y evitar sugerir el mismo videojuego que se está consultando. Se pasaría entonces el slug del videojuego que se quiere excluir

Se programó manualmente la paginación a través de las variables ```page``` y ```pageSize``` que describen el número de página y el tamaño de la página deseado respectivamente. Si el número de página no es indicado, por defecto tomará el valor de 1. Si el tamaño de la página no es indicado, por defecto tomará el valor de la longitud del arreglo regresado. Si el número de página es mayor al total de páginas que habría según los parámetros de paginación, el número de página pasa a ser 1 devolviendo a la primera página

Se programó una forma de ordenar los resultados de este endpoint a través de la variable ```orderBy``` la cual puede obtener los siguientes valores:

- ```name-asc```: Ordena los resultados alfabéticamente en función del nombre
- ```name-desc```: Ordena los resultados en orden alfabético inverso en función del nombre
- ```releaseDate-asc```: Ordena los resultados de forma ascendente en función de la fecha de salida del videojuego
- ```releaseDate-desc```: Ordena los resultados de forma descendente en función de la fecha de salida del videojuego
- ```startedPlayingDate-asc```: Ordena los resultados de forma ascendente en función de la fecha en la que empecé a jugar el videojuego
- ```startedPlayingDate-desc```: Ordena los resultados de forma descendente en función de la fecha en la que empecé a jugar el videojuego
- ```createdAtDate-asc```: Ordena los resultados de forma ascendente en función de la fecha en la que creé mi entrada de blog sobre este videojuego
- ```createdAtDate-desc```: Ordena los resultados de forma descendente en función de la fecha en la que creé mi entrada de blog sobre este videojuego
- ```grade-asc```: Ordena los resultados de forma ascendente en función de la calificación que le di a este videojuego
- ```grade-desc```: Ordena los resultados de forma descendente en función de la calificación que le di a este videojuego
- Cualquier otro valor que se le pase, incluso si no se le pasa un valor, ordenará por defecto el resultado alfabéticamente en función del nombre

Se programó manualmente a través de la variable ```randomSeed``` una semilla aleatoria para mezclar el resultado de documentos y poder mostrarlos de forma aleatoria en el FrontEnd. Si se pasa este parámetro, sobrescribirá al parámetro de ```orderBy```. Si el parámetro no recibe nada, por defecto los ordenará como se deseé con el parámetro ```orderBy```

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mgs-videogames?orderBy=name-asc&randomSeed=15&page=2&pageSize=2```):

```json
{
  "data": [
    {
      "name": "Test Game 1",
      "description": "Este es un ejemplo de Juego 1. INGLÉS ENGLISH PLEASE",
      "release_date": "2004-04-23T05:00:00.000Z",
      "release_date_format": "DD/MM/AAAA",
      "started_playing_date": "2017-04-02T06:00:00.000Z",
      "started_playing_date_format": "??/MM/AAAA",
      "slug": "juego1",
      "grade": 85,
      "locale": "en",
      "createdAt": "2025-04-19T00:17:12.055Z",
      "id": 4,
      "mgs_series": [
        {
          "name": "Test Serie 1",
          "description": "Test serie 1 IN ENGLISH",
          "started_playing_date": "2022-04-03T06:00:00.000Z",
          "started_playing_date_format": "DD/MM/AAAA",
          "slug": "serie1",
          "grade": 85,
          "locale": "en",
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
    {
      "name": "Lego Skywalker Saga en",
      "description": "Lego skybualker en",
      "release_date": "2018-01-01T06:00:00.000Z",
      "release_date_format": "DD/MM/AAAA",
      "started_playing_date": "2018-05-05T05:00:00.000Z",
      "started_playing_date_format": "DD/MM/AAAA",
      "slug": "lego-skywalker",
      "grade": 85,
      "locale": "en",
      "createdAt": "2025-04-25T19:57:53.714Z",
      "id": 20,
      "mgs_series": [],
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
    "page": "2",
    "pageSize": "2",
    "totalPages": 2
  }
}
```

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/mgs-videogames?locale=ea```):

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

### ℹ️ GET /api/mgs-videogames/:slug

Obtener un videojuego en específico

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mgs-videogames/minecraft```: Consultando el registro con el endpoint que se buscaba con la configuración de idioma por defecto
- ```/api/mgs-videogames/juego1?locale=en```: Consultando el registro con el endpoint que se buscaba con la localización de inglés
- ```/api/mgs-videogames/rocket-league?locale=es-419```: Consultando el registro con el endpoint que se buscaba con la localización de español latinoamérica

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mgs-videogames/minecraft```):

```json
{
  "data": {
    "name": "Minecraft test en",
    "description": "Minecraft english test",
    "release_date": "2009-05-05T05:00:00.000Z",
    "release_date_format": "DD/MM/AAAA",
    "started_playing_date": "2014-05-04T05:00:00.000Z",
    "started_playing_date_format": "??/MM/AAAA",
    "slug": "minecraft",
    "grade": 85,
    "locale": "en",
    "createdAt": "2025-04-25T19:44:36.201Z",
    "id": 8,
    "mgs_series": [
      {
        "name": "Survival Bros english",
        "description": "Survival Bros en",
        "started_playing_date": "2021-02-02T06:00:00.000Z",
        "started_playing_date_format": "DD/MM/AAAA",
        "slug": "survival-bros",
        "locale": "en",
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
      {
        "name": "Separate Survival Bros INGLÉS",
        "description": "Separate Survival Bros eN",
        "started_playing_date": "2022-03-03T06:00:00.000Z",
        "started_playing_date_format": "DD/MM/AAAA",
        "slug": "separate-survival-bros",
        "locale": "en",
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

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/mgs-videogames/noexisto```):

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

La colección que guarda los posts referentes a las series de videojuegos de los que quiero hablar

La estructura de la colección es la siguiente:

- **name:** Text *(Short text, required, localization enabled)*: Nombre de la serie
- **description:** Rich text (Markdown) *(Localization enabled)*: Descripción sobre la serie
- **slug:** UID *(Required)*: Slug que se usa desde el FrontEnd para acceder a un elemento específico de la colección
- **started_playing_date:** Date *(Datetime, required)*: Fecha en la que empecé a jugar la serie
- **started_playing_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha en la que empecé a jugar la serie en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año
- **logo:** Media *(Single media, only images allowed, required)*: Imagen en escala 1:1 del logotipo de la serie
- **mgs_videogame** Relation with MGS-Videogame *(MGS-Videogame has many MGS-Series)*: Relación con los videojuegos que puedan mostrar esta serie
- **grade** Number *(Decimal)*: La calificación que le doy a la serie de 0 a 100 con solamente un decimal posible

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/mgs-series

Obtener todas las series

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mgs-series?locale=es-419```: Obtiene todas las series en español usando los parámetros de filtrado, orden y paginación por defecto
- ```/api/mgs-series?orderBy=name-asc&videogame=minecraft&page=2&pageSize=2```: Obtiene todas las series que pertenezcan al videojuego con slug minecraft ordenándolas por nombre ascendentemente usando una paginación de dos registros por página ubicado en la página 2
- ```/api/mgs-series?randomSeed=10&exclude=survival-bros```: Obtiene los registros usando una semilla aleatoria para mezclar los videojuegos y excluyendo la serie con slug survival-bros

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Se programó manualmente el parámetro ```videogame``` para agrupar las series por el slug de un videojuego. Si no se le pasa nada, regresa todas las series

Se programó manualmente el parámetro ```search``` para poder realizar búsquedas de series. Si este parámetro está vacío, no realizará ninguna búsqueda pero de llevar algo, buscará solamente coincidencias con el campo del nombre de la serie

Se programó manualmente el parámetro ```exclude``` que permite excluir un registro a través de pasarle su slug. Esto enfocado para cuando se quieran dar sugerencias dentro de una consulta de una serie y evitar sugerir la misma serie que se está consultando. Se pasaría entonces el slug de la serie que se quiere excluir

Se programó manualmente la paginación a través de las variables ```page``` y ```pageSize``` que describen el número de página y el tamaño de la página deseado respectivamente. Si el número de página no es indicado, por defecto tomará el valor de 1. Si el tamaño de la página no es indicado, por defecto tomará el valor de la longitud del arreglo regresado. Si el número de página es mayor al total de páginas que habría según los parámetros de paginación, el número de página pasa a ser 1 devolviendo a la primera página

Se programó una forma de ordenar los resultados de este endpoint a través de la variable ```orderBy``` la cual puede obtener los siguientes valores:

- ```name-asc```: Ordena los resultados alfabéticamente en función del nombre
- ```name-desc```: Ordena los resultados en orden alfabético inverso en función del nombre
- ```startedPlayingDate-asc```: Ordena los resultados de forma ascendente en función de la fecha en la que empecé a jugar el videojuego
- ```startedPlayingDate-desc```: Ordena los resultados de forma descendente en función de la fecha en la que empecé a jugar el videojuego
- ```createdAtDate-asc```: Ordena los resultados de forma ascendente en función de la fecha en la que creé mi entrada de blog sobre esta serie
- ```createdAtDate-desc```: Ordena los resultados de forma descendente en función de la fecha en la que creé mi entrada de blog sobre esta serie
- ```grade-asc```: Ordena los resultados de forma ascendente en función de la calificación que le di a esta serie
- ```grade-desc```: Ordena los resultados de forma descendente en función de la calificación que le di a esta serie
- Cualquier otro valor que se le pase, incluso si no se le pasa un valor, ordenará por defecto el resultado alfabéticamente en función del nombre

Se programó manualmente a través de la variable ```randomSeed``` una semilla aleatoria para mezclar el resultado de documentos y poder mostrarlos de forma aleatoria en el FrontEnd. Si se pasa este parámetro, sobrescribirá al parámetro de ```orderBy```. Si el parámetro no recibe nada, por defecto los ordenará como se deseé con el parámetro ```orderBy```

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mgs-series?orderBy=name-asc&randomSeed=15&page=2&pageSize=2```):

```json
{
  "data": [
    {
      "name": "Separate Survival Bros INGLÉS",
      "description": "Separate Survival Bros eN",
      "started_playing_date": "2022-03-03T06:00:00.000Z",
      "started_playing_date_format": "DD/MM/AAAA",
      "slug": "separate-survival-bros",
      "grade": 85,
      "locale": "en",
      "createdAt": "2025-04-25T21:57:44.233Z",
      "id": 17,
      "mgs_videogame": {
        "name": "Minecraft test en",
        "description": "Minecraft english test",
        "release_date": "2009-05-05T05:00:00.000Z",
        "release_date_format": "DD/MM/AAAA",
        "started_playing_date": "2014-05-04T05:00:00.000Z",
        "started_playing_date_format": "??/MM/AAAA",
        "slug": "minecraft",
        "locale": "en",
        "id": 8,
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

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/mgs-series?locale=ea```):

```json
{
  "data": [],
  "meta": {
    "page": 1,
    "pageSize": "2",
    "totalPages": 0
  }
}
```

### ℹ️ GET /api/mgs-series/:slug

Obtener una serie en específico

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/mgs-series/survival-bros```: Regresa el recurso con el slug indicado usando la configuración de localización predeterminada
- ```/api/mgs-series/hardcore-bros?locale=es-419```: Regresa el recurso con el slug indicado usando la configuración de localización de español latino
- ```/api/mgs-series/separate-survival-bros?locale=en```: Regresa el recurso con el slug indicado usando la configuración de localización de inglés

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/mgs-series/survival-bros```):

```json
{
  "data": {
    "name": "Survival Bros english",
    "description": "Survival Bros en",
    "started_playing_date": "2021-02-02T06:00:00.000Z",
    "started_playing_date_format": "DD/MM/AAAA",
    "slug": "survival-bros",
    "grade": 85,
    "locale": "en",
    "createdAt": "2025-04-25T21:55:09.421Z",
    "id": 8,
    "mgs_videogame": {
      "name": "Minecraft test en",
      "description": "Minecraft english test",
      "release_date": "2009-05-05T05:00:00.000Z",
      "release_date_format": "DD/MM/AAAA",
      "started_playing_date": "2014-05-04T05:00:00.000Z",
      "started_playing_date_format": "??/MM/AAAA",
      "slug": "minecraft",
      "locale": "en",
      "id": 8,
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

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/mgs-series/noexisto```):

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