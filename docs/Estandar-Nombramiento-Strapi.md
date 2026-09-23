# Estándar de Organización de Nombramiento en Strapi

## Para el contenido multimedia en el Media Library

El multimedia se carga directamente a Strapi desde el apartado de Media Library. Aquí he de crear primero carpetas por cada proyecto blog independiente usando la abreviación de tres letras ya definida por mí. Hasta el momento el proyecto blog y su abreviación respectiva son los siguientes:

- ygg: Yggdrasil
- mgs: My Gaming Station
- mht: My Home Theater
- mbs: My Bookshelf
- mml: My Music Library

Dentro de cada carpeta irán como subcarpetas las colecciones las cuales tendrán que guardar multimedia ya sea como un logotipo o dentro de su descripción estilo entrada de blog que yo le dé

Un ejemplo de subcarpetas es como en Yggdrasil donde existe la colección de Jobs y Studies y en el Media Library, existen estas carpetas: jobs y studies dentro de la carpeta ygg. Esto se hace con todas las colecciones correspondientes a cada proyecto blog

Si es en el primer caso como logotipo, la imagen llevará de nombre el slug de la entrada, de otra forma, si pertenecen a entradas tipo blog, dado que pueden ser más de una, añadiré una carpeta con el nombre del slug de la entrada y ahí estarán las imágenes pertenecientes a esta entrada y les añadiré al nombre del slug cuatro dígitos comenzando por el 0001 y aumentando de uno en uno

## Slugs y títulos

Para Yggdrasil y My Gaming Station puedo usar una convención que me agrade a mí

Solo menciono que para My Gaming Station, para las series les pondré en el inicio del slug el nombre del videojuego al que pertenecen. Es decir, por ejemplo, para el videojuego: *Minecraft* (cuya slug me imagino que sería: ```minecraft```) existe la serie *Minecraft: Survival Bros*. Es así que su slug sería (me imagino yo) ```minecraft-survival-bros```

### My Home Theater

En el apartado de películas y series:

- Las franquicias pueden ir bajo una convención de mi gusto
- Las películas irán tituladas en español y en inglés con sus nombres en sus países (o si me gusta más dejarlo en su idioma original, así lo haría. Es decir, puedo poner *Star Wars Episode III: Revenge of the Sith* y *Star Wars Episodio III: La Venganza de los Sith* así como si yo quiero, puedo ponerle *Avengers: Infinity War* a ambos idiomas o al español sí ponerle *Vengadores: La Guerra del Infinito*) pero el slug será el título de la película (en su idioma original) seguido de su año. Así me supongo yo que los slugs que uso para los ejemplos anteriores será ```star-wars-episode-3-revenge-of-the-sith-2005```
- Con las series, el título será el mismo caso que con las películas así como con el slug. Yo decido si le pongo *Star Wars: The Clone Wars* a ambos idiomas o al español sí le cambio a *Star Wars: La Guerra de los Clones*. En cuanto al slug, sucederá lo mismo usando de año el año de inicio de emisión de la serie. Para el ejemplo pasado sería: ```star-wars-the-clone-wars-2008```
- Con las temporadas pasará algo muy curioso
  - Por ejemplo *Star Wars: The Clone Wars* o *Ninjago* sí le ponen nombres a sus temporadas. De ser así, se le pondrá el nombre de la temporada. Por ejemplo, la temporada 7 de *Star Wars: The Clone Wars* se le pondrá *The Final Season* o *La Temporada Final* o la temporada 3 de *Ninjago* se llama *Rebooted* (no sé si dejarle *Reiniciado* en español) y de slug se propone anidar el slug de la serie más el correspondiente slug de la temporada como: ```star-wars-the-clone-wars-2008-the-final-season-2020``` y ```ninjago-2011-rebooted-2014```. Los especiales también entran aquí contándose no como número de temporada sino como "special" (así como las temporadas piloto "pilot") como es el caso de *Ninjago* con *Day of the Departed*: ```ninjago-2011-day-of-the-departed-2016```
  - Para el caso de series sin nombre en sus temporadas solo se deja como *Season 1* o *Temporada 1* igualmente para sus slugs. Un ejemplo: ```obi-wan-kenobi-2022-season-1-2022```
- Con los capítulos de las series se les puede poner el nombre que tenga el capítulo y en el slug por ejemplo el episodio 13 de Ninjago o el 34: *Rise of the Great Devourer* (*El Ascenso del Gran Devorador*) y *The Titanium Ninja* (*El Ninja de Titanio*) cuyos slugs serían respectivamente: ```ninjago-2011-rise-of-the-snakes-2011-ep-13``` y ```ninjago-2011-rebooted-2014-ep-8``` siguiendo el número del capítulo interno de la temporada, no el global de toda la serie. Así también para aquellos casos donde los capítulos no tengan nombre simplemente serán *Chapter 13* o *Capítulo 13*

En el apartado del contenido en internet:

- Los canales son sencillos pues es el título y slug adaptado al título: *ElRichMC* tendrá de slug ```elrichmc```. *Vicky Palami* será ```vicky-palami```. *Ultimo Player* será ```ultimo-player```
- Los videos tendrán de título el nombre del video y de slug su adaptación con el nombre del autor del video más el título adaptado a slug en su idioma original. Por ejemplo el video de *TheOdd1sOut* de nombre *What Your Early Twenties Will Be Like* tendrá de slug: ```theodd1sout-what-your-early-twenties-will-be-like``` independientemente de si el idioma es o no inglés pues ese es el título del video
- Las playlists llevarán de nombre y slug similar a canales: sencillos y ya. Si yo hago una playlist de *EliteCraft* este será su nombre y su slug: ```elitecraft``` o de Permadeath desde el POV de Shadoune: *Permadeath (Shadoune's POV)* y *Permadeath (POV de Shadoune)* para distintos idiomas y teniendo de slug ```permadeath-pov-de-shadoune``` (por ser una colección de videos en español todos o en su mayoría)

En el apartado de deportes:

- Un deporte tendrá nombramiento sencillo: El basketball se llamará *Basketball* con slug ```basketball```. Automovilismo será *Motor Racing* o *Automovilismo* con slug ```motor-racing``` (lo tendré estándar en inglés). Fútbol será *Soccer* o *Fútbol* con slug ```soccer```
- Una liga igual más su concatenación: La *NBA* será: ```basketball-nba``` o el *Basketball Olímpico* se llamará así con slug ```basketball-olympics```. La *Formula 1* será ```motor-racing-formula-1``` o la *Formula E* será similar: ```motor-racing-formula-e```. La *Liga MX* será: ```soccer-liga-mx``` o el mundial como *World Cup* o *Copa Mundial*: ```soccer-world-cup```
- Un torneo será igual con su concatenación: La NBA como se disputa entre dos años la temporada 2024 - 2025 cuyo nombre sería *Season 2024 - 2025* o *Temporada 2024 - 2025* tendría un slug ```basketball-nba-season-2024-2025```. Los olímpicos de basket del 2024 tendrían de slug: ```basketball-olympics-year-2024``` con nombre *Año 2024* o *Year 2024*. Las temporadas anuales como la Formula 1 solo contendrían su año propio: ```motor-racing-formula-1-season-2024```. La Liga MX tendría algo como: ```soccer-liga-mx-clausura-2013``` debido a sus dos torneos por año
- Un partido tendría su concatenación pero incluyendo la fecha de disputa del partido:
  - *Golden State Warriors vs Portland TrailBlazers (23/11/2024)* el cual creo que sería nombre para ambos idiomas con slug: ```basketball-nba-season-2024-2025-gsw-vs-por-23-11-2024```
  - *Indiana Pacers vs Oklahoma City Thunder (Juego 7 de las Finales) (22/06/2025)* o en inglés *Indiana Pacers vs Oklahoma City Thunder (The Finals Game 7) (22/06/2025)* con slug: ```basketball-nba-season-2024-2025-ind-vs-okc-22-06-2025```
  - Por ejemplo si quisiera hablar de juegos de playoffs en los paréntesis podría poner (Western Finals o Finales del Oeste, Eastern Semifinals o Semifinales del Este, Western First Round o Primera Ronda del Oeste) así como para play-in (Play-In Match 1 o Partido 1 del Play-In) y para el In Season por ejemplo el de 2023 (In-Season Tournament Final o Final del In-Season Tournament) y 2024 (NBA Cup Final o Final de la Copa NBA) pero ya sería cosa más de títulos pues en slug sería por equipos y fechas
  - *Francia vs Estados Unidos (Juego por el Oro) (10/08/2024)* o en inglés *France vs United States (Gold Medal Game) (10/08/2024)* con slug: ```basketball-olympics-2024-fra-vs-usa-10-08-2024```
  - *Gran Premio de Canadá 2025* o en inglés: *2025 Canadian Grand Prix* con slug: ```motor-racing-formula-1-season-2025-gp-canada```

### My Music Library

Para los artistas usaré nombramiento y slug sencillos: *The Fold* será ```the-fold```. *One Direction* será ```one-direction```

Para las canciones, como sí es identificable fácilmente el artista principal, el slug tendría al artista principal en el slug y al final el año de salida de la canción. El nombre será solamente el nombre del artista: *Drive* de Ed Sheeran tendrá de slug: ```ed-sheeran-drive-2025``` o *Getaway Dreams* de Kevin Kiner tendrá de slug: ```kevin-kiner-getaway-dreams-2020```

Para los álbumes es difícil identificar el artista principal en álbumes de compilaciones de modo que solo será el nombre del álbum, el tipo del álbum ("a" para álbum, "e" para EP, "s" para sencillo y "c" para compilación) y el año de salida del álbum. *Moving Past* de The Fold tendría de slug ```moving-past-a-2013```

### My Bookshelf

PENDIENTE (aún no pienso en ninguna review a algún libro)