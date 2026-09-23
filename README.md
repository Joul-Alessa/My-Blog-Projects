# My Blog Projects (BackEnd)

El BackEnd del proyecto está desarrollado sobre las siguientes componentes básicos:

- Sistema operativo: Windows 11
- Versión de Node.js: 22.11.0
- Versión de NPM: 10.9.0
- Versión de Strapi: 5.12.4

## Ignición del BackEnd

Se usará Strapi. Los comandos de arranque usados fueron:

```bash
npm create strapi@latest
```

Una vez terminó de crear el proyecto, sugirió los siguientes comandos:

- ```npm run develop```: Start Strapi in watch mode
- ```npm run start```: Start Strapi without watch mode
- ```npm run build```: Build Strapi admin panel
- ```npm run deploy```: Deploy Strapi project
- ```npm run seed:example```: Seed your database with sample data
- ```npm run strapi```: Display all available commands

Para tener un mejor control de las dependencias del proyecto, se eliminaron del ```package.json``` los acentos circunflejos o carets usando el comando:

```bash
npm list --depth=0
```

El proyecto en desarrollo se ejecutó y se levantó con el comando:

```bash
npm run develop
```

## Estructura y funcionamiento

My Blog Projects contiene tablas y colecciones de los siguientes proyectos cuyas documentaciones específicas pueden consultarse en su documentación general:

- [Yggdrasil](./docs/Yggdrasil.md)
- [My Gaming Station](./docs/My-Gaming-Station.md)
- [My Home Theater](./docs/My-Home-Theater.md)
- [My Music Library](./docs/My-Music-Library.md)
- [My Bookshelf]()

Al proyecto también se le hizo un estándar de nombramiento de títulos, slugs y nombres de imágenes para tratar de mantener un orden el cual se encuentra [aquí](./docs/Estandar-Nombramiento-Strapi.md)

El proyecto tiene distintos entornos de desarrollo para las distintas pruebas y sucesiones del entorno de desarrollo al entorno de producción. La documentación de los entornos del proyecto se encuentra [aquí](./docs/Entornos-de-Ejecucion.md)

## Deployment

```bash
podman compose -f docker-compose-production.yml up
```