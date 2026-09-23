Tabla de contenidos:

- [My Music Library](#my-music-library)
  - [Artistas](#artistas)
    - [ℹ️ GET /api/mml-artists](#ℹ️-get-apimml-artists)
    - [ℹ️ GET /api/mml-artists/:slug](#ℹ️-get-apimml-artistsslug)
  - [Álbumes](#álbumes)
    - [ℹ️ GET /api/mml-albums](#ℹ️-get-apimml-albums)
    - [ℹ️ GET /api/mml-albums/:slug](#ℹ️-get-apimml-albumsslug)
  - [Canciones](#canciones)
    - [ℹ️ GET /api/mml-songs](#ℹ️-get-apimml-songs)
    - [ℹ️ GET /api/mml-songs/:slug](#ℹ️-get-apimml-songsslug)

# My Music Library

My Music Library es el título del proyecto blog dirigido a hablar de música. Dentro de My Blog Projects, todas las tablas y colecciones que corresponden a este proyecto llevan el prefijo "MML"

Las tablas, colecciones y endpoints de My Gaming Station se enlistan a continuación:

## Artistas

La colección que guarda los posts referentes a los artistas de los que quiero hablar

La estructura de la colección es la siguiente:

- **name:** Text *(Short text, required, localization enabled)*: Nombre del artista
- **slug:** UID *(Required)*: Slug que se usa desde el FrontEnd para acceder a un elemento específico de la colección
- **description:** Rich text (Markdown) *(Localization enabled)*: Descripción sobre el artista
- **logo:** Media *(Single media, only images allowed, required)*: Imagen en escala 1:1 del logotipo del artista
- **meeting_date:** Date *(Datetime, required)*: Fecha en la que conocí a este artista
- **meeting_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha en la que conocí a este artista indicada en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año
- **grade** Number *(Decimal)*: La calificación que le doy al videojuego de 0 a 100 con solamente un decimal posible
- **mml_songs** Relation with MML-Song *(MML-Artists has and belongs to many MML-Songs)*: Relación con las canciones relacionadas a este artista

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/mml-artists

### ℹ️ GET /api/mml-artists/:slug

## Álbumes

La colección que guarda los posts referentes a los álbumes de los que quiero hablar

La estructura de la colección es la siguiente:

- **name:** Text *(Short text, required, localization enabled)*: Nombre del álbum
- **slug:** UID *(Required)*: Slug que se usa desde el FrontEnd para acceder a un elemento específico de la colección
- **description:** Rich text (Markdown) *(Localization enabled)*: Descripción sobre el álbum
- **logo:** Media *(Single media, only images allowed, required)*: Imagen en escala 1:1 del logotipo del álbum
- **meeting_date:** Date *(Datetime, required)*: Fecha en la que conocí a este artista
- **meeting_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha en la que conocí a este artista indicada en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año
- **release_date:** Date *(Datetime, required)*: Fecha de salida del álbum
- **release_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha de salida del álbum indicada en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año
- **grade** Number *(Decimal)*: La calificación que le doy al videojuego de 0 a 100 con solamente un decimal posible
- **album_type:** Enumeration *(Values: ['album', 'ep', 'single', 'compilation'])*: Tipo del álbum. Si es álbum, EP, sencillo o compilación
- **mml_songs** Relation with MML-Song *(MML-Albums has and belongs to many MML-Songs)*: Relación con las canciones relacionadas a este álbum

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/mml-albums

### ℹ️ GET /api/mml-albums/:slug

## Canciones

La colección que guarda los posts referentes a las canciones de los que quiero hablar

La estructura de la colección es la siguiente:

- **name:** Text *(Short text, required, localization enabled)*: Nombre de la canción
- **slug:** UID *(Required)*: Slug que se usa desde el FrontEnd para acceder a un elemento específico de la colección
- **description:** Rich text (Markdown) *(Localization enabled)*: Descripción sobre la canción
- **meeting_date:** Date *(Datetime, required)*: Fecha en la que conocí a esta canción
- **meeting_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha en la que conocí a esta canción indicada en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año
- **grade** Number *(Decimal)*: La calificación que le doy a la canción de 0 a 100 con solamente un decimal posible
- **release_date:** Date *(Datetime, required)*: Fecha de salida de la canción
- **release_date_format:** Enumeration *(Values: ['DD/MM/AAAA', '??/MM/AAAA', '??/??/AAAA'])*: Formato de la fecha de salida de la canción indicada en caso de conozca de forma certera hasta el día, o desconozca el día pero todavía el mes, o ni siquiera el mes y solamente conozca el año
- **mml_artists** Relation with MML-Artist *(MML-Songs has and belongs to many MML-Artists)*: Relación con los artistas relacionados a esta canción
- **mml_albums** Relation with MML-Album *(MML-Songs has and belongs to many MML-Albums)*: Relación con los álbumes relacionados a esta canción

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/mml-songs

### ℹ️ GET /api/mml-songs/:slug