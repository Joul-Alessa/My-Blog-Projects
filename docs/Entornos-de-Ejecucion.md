- [Entornos de ejecución](#entornos-de-ejecución)
  - [Entorno de desarrollo (development)](#entorno-de-desarrollo-development)
  - [Integración a Podman (local)](#integración-a-podman-local)
  - [Separación de servicios por contenedores (testing)](#separación-de-servicios-por-contenedores-testing)
  - [Un espejo de producción pero en mi máquina (simulation)](#un-espejo-de-producción-pero-en-mi-máquina-simulation)
  - [Entorno producción (production)](#entorno-producción-production)

# Entornos de ejecución

Se crearon distintos entornos de ejecución del proyecto que iteran desde el extremo más próximo al entorno de desarrollo hasta el extremo más próximo al entorno de producción pasando por algunos entornos intermedios útiles para llevar el proyecto del entorno de desarrollo progresivamente al entorno de producción

Existe una configuración por default alojada en la ruta ```./config``` que funcionaría como la configuración por defecto para development aunque se sobrescribió en el siguiente entorno de ejecución pero se mantiene para evitar romper el proyecto al igual que el archivo de variables de entorno de esta configuración por default: ```.env``` que también se deja a continuación (pues se excluye de los commmits del repositorio):

```bash
# Server
HOST=
PORT=

# Secrets
APP_KEYS=
API_TOKEN_SALT=
ADMIN_JWT_SECRET=
TRANSFER_TOKEN_SALT=

# Database
DATABASE_CLIENT=
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_SSL=
DATABASE_FILENAME=
JWT_SECRET=
```

## Entorno de desarrollo (development)

Este es el entorno de desarrollo tradicional y sobre el que regularmente añado las entries localmente (es decir, no trabajo con contenedores de manera local mientras añado nuevas entries). Usando las configuraciones por defecto de cuando se inició el proyecto: Este entorno ejecuta el proyecto sobre el mismo sistema operativo anfitrión con las características ya definidas en la página general de la documentación:

- Sistema operativo: Windows 11
- Versión de Node.js: 22.11.0
- Versión de NPM: 10.9.0
- Versión de Strapi: 5.12.4

Además de mantener la base de datos SQLite en un archivo local en la ruta: ```./.tmp/data.db```

Igualmente el almacenamiento multimedia se realiza localmente en la misma localización del proyecto en la ruta: ```./public/uploads```

Las configuraciones de este entorno de ejecución se encuentran en este proyecto en la ruta ```./config/env/development``` así como se usa el archivo ```.env.development``` para las variables de entorno de este entorno de ejecución. De no contar con este archivo (pues se excluye de los commmits del repositorio) se deja a continuación:

```bash
# Server
HOST=
PORT=

# Secrets
APP_KEYS=
API_TOKEN_SALT=
ADMIN_JWT_SECRET=
TRANSFER_TOKEN_SALT=

# Database
DATABASE_CLIENT=
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_SSL=
DATABASE_FILENAME=
JWT_SECRET=
```

Para iniciar este entorno de ejecución basta con ejecutar el comando:

```bash
npm run develop
```

## Integración a Podman (local)

Este es el entorno de ejecución que lleva a un paso más cerca del desplegado al proyecto. Su principal función es revisar que el proyecto funcione correctamente dentro de un contenedor de Podman. El almacenamiento multimedia y la base de datos no evolucionan de separarse del mismo contenedor pues eso se realiza en el entorno de ejecución posterior siendo igualmente las rutas locales del proyecto las que realizan este

Al realizar esta integración con Podman, se dejan las características usadas en el desarrollo del proyecto a continuación:

- Versión de Podman: 5.3.2
- Versión de Podman Desktop: 1.18.1

También como ya se implementa la integración con Podman se añadieron los archivos ```Dockerfile.local```, ```docker-compose-local.yml``` y ```.dockerignore``` para este entorno de ejecución

Las configuraciones de este entorno de ejecución se encuentran en este proyecto en la ruta ```./config/env/local``` así como se usa el archivo ```.env.local``` para las variables de entorno de este entorno de ejecución. De no contar con este archivo (pues se excluye de los commmits del repositorio) se deja a continuación:

```bash
# Server
HOST=
PORT=

# Secrets
APP_KEYS=
API_TOKEN_SALT=
ADMIN_JWT_SECRET=
TRANSFER_TOKEN_SALT=

# Database
DATABASE_CLIENT=
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_SSL=
DATABASE_FILENAME=
JWT_SECRET=
```

Para iniciar este entorno de ejecución basta con ejecutar el comando:

```bash
podman compose -f docker-compose-local.yml up
```

## Separación de servicios por contenedores (testing)

## Un espejo de producción pero en mi máquina (simulation)

Este es el entorno de ejecución que básicamente copia la versión del desplegado del proyecto. El almacenamiento multimedia y la base de datos no evolucionan de separarse del mismo contenedor pero sí se crea un volumen para que esta información sea siempre persistente

Al realizar esta integración con Podman, se dejan las características usadas en el desarrollo del proyecto a continuación:

- Versión de Podman: 5.3.2
- Versión de Podman Desktop: 1.18.1

También como ya se implementa la integración con Podman se añadieron los archivos ```Dockerfile.simulation```, ```docker-compose-simulation.yml``` y ```.dockerignore``` para este entorno de ejecución

Las configuraciones de este entorno de ejecución se encuentran en este proyecto en la ruta ```./config/env/simulation``` así como se usa el archivo ```.env.simulation``` para las variables de entorno de este entorno de ejecución. De no contar con este archivo (pues se excluye de los commmits del repositorio) se deja a continuación:

```bash
# Server
HOST=
PORT=

# Secrets
APP_KEYS=
API_TOKEN_SALT=
ADMIN_JWT_SECRET=
TRANSFER_TOKEN_SALT=

# Database
DATABASE_CLIENT=
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_SSL=
DATABASE_FILENAME=
JWT_SECRET=
```

Para iniciar este entorno de ejecución basta con ejecutar el comando:

```bash
podman compose -f docker-compose-simulation.yml up
```

## Entorno producción (production)

Este es el entorno de ejecución de producción definitivo. El almacenamiento multimedia y la base de datos no evolucionan de separarse del mismo contenedor pero sí se crea un volumen para que esta información sea siempre persistente

Al realizar esta integración con Podman, se dejan las características usadas en el desarrollo del proyecto a continuación:

- Versión de Podman: 5.3.2
- Versión de Podman Desktop: 1.18.1

También como ya se implementa la integración con Podman se añadieron los archivos ```Dockerfile.production```, ```docker-compose-production.yml``` y ```.dockerignore``` para este entorno de ejecución

Las configuraciones de este entorno de ejecución se encuentran en este proyecto en la ruta ```./config/env/production``` así como se usa el archivo ```.env.production``` para las variables de entorno de este entorno de ejecución. De no contar con este archivo (pues se excluye de los commmits del repositorio) se deja a continuación:

```bash
# Server
HOST=
PORT=

# Secrets
APP_KEYS=
API_TOKEN_SALT=
ADMIN_JWT_SECRET=
TRANSFER_TOKEN_SALT=

# Database
DATABASE_CLIENT=
DATABASE_HOST=
DATABASE_PORT=
DATABASE_NAME=
DATABASE_USERNAME=
DATABASE_PASSWORD=
DATABASE_SSL=
DATABASE_FILENAME=
JWT_SECRET=
```

Para iniciar este entorno de ejecución basta con ejecutar el comando:

```bash
podman compose -f docker-compose-production.yml up
```