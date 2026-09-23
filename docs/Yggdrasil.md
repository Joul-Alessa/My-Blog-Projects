Tabla de contenidos:

- [Yggdrasil](#yggdrasil)
  - [Estudios](#estudios)
    - [ℹ️ GET /api/ygg-studies](#ℹ️-get-apiygg-studies)
    - [ℹ️ GET /api/ygg-studies/:slug](#ℹ️-get-apiygg-studiesslug)
  - [Trabajos](#trabajos)
    - [ℹ️ GET /api/ygg-jobs](#ℹ️-get-apiygg-jobs)
    - [ℹ️ GET /api/ygg-jobs/:slug](#ℹ️-get-apiygg-jobsslug)
  - [Proyectos](#proyectos)
    - [ℹ️ GET /api/ygg-projects](#ℹ️-get-apiygg-projects)
    - [ℹ️ GET /api/ygg-projects/:slug](#ℹ️-get-apiygg-projectsslug)
  - [Recursos](#recursos)
    - [ℹ️ GET /api/ygg-resources](#ℹ️-get-apiygg-resources)
    - [ℹ️ GET /api/ygg-resources/:slug](#ℹ️-get-apiygg-resourcesslug)
  - [Tecnologías](#tecnologías)
    - [ℹ️ GET /api/ygg-technologies](#ℹ️-get-apiygg-technologies)
  - [Habilidades](#habilidades)
    - [ℹ️ GET /api/ygg-skills](#ℹ️-get-apiygg-skills)
  - [Perfiles](#perfiles)
    - [ℹ️ GET /api/ygg-profiles/:slug](#ℹ️-get-apiygg-profilesslug)
  - [Eventos de mi Falso Currículum](#eventos-de-mi-falso-currículum)
    - [ℹ️ GET /api/ygg-false-cv-events](#ℹ️-get-apiygg-false-cv-events)
    - [ℹ️ GET /api/ygg-false-cv-events/:slug](#ℹ️-get-apiygg-false-cv-eventsslug)
  - [Grupos de mi Falso Currículum](#grupos-de-mi-falso-currículum)
    - [ℹ️ GET /api/ygg-false-cv-groups](#ℹ️-get-apiygg-false-cv-groups)

# Yggdrasil

Yggdrasil es el título del proyecto que compone mi portafolio. Dentro de My Blog Projects, todas las tablas y colecciones que corresponden a este proyecto llevan el prefijo "YGG"

Las tablas, colecciones y endpoints de Yggdrasil se enlistan a continuación:

## Estudios

La colección que guarda los posts referentes a mis estudios académicos

La estructura de la colección es la siguiente:

- **school:** Text *(Short text, required, localization enabled)*: Nombre de la institución donde cursé el estudio
- **initial_date:** Date *(Date, required)*: Fecha de inicio de curso del estudio
- **end_date:** Date *(Date)*: Fecha de fin de curso del estudio
- **study:** Text *(Short text, required, localization enabled)*: Nombre del estudio que cursé
- **logo:** Media *(Single media, only images allowed, required)*: Imagen en escala 1:1 del logotipo de la institución donde cursé el estudio
- **description:** Rich text (Markdown) *(Localization enabled)*: Descripción sobre highlights o condecoraciones a lo largo de este estudio
- **order:** Number *(Integer)*: Usado para ordenar los estudios. Entre más reciente sea el curso, mayor será el número de este campo
- **slug:** UID *(Required)*: Slug que se usa desde el FrontEnd para acceder a un elemento específico de la colección
- **background_color:** Text *(Short text, required, RegExp pattern: ```^#([A-Fa-f0-9]{6})$```)*: Color de fondo a exhibir

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/ygg-studies

Obtener todos los estudios

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/ygg-studies```: Consulta de todos los estudios regresando la localización por default que es en inglés
- ```/api/ygg-studies?locale=es-419```: Consulta de todos los estudios regresando la localización en español latinoamérica
- ```/api/ygg-studies?locale=en```: Consulta de todos los estudios regresando la localización en inglés

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Este endpoint fue programado para que regrese siempre los estudios ordenados de forma descendente

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/ygg-studies?locale=en```):

```json
{
  "data": [
    {
      "school": "Coursera",
      "study": "Google Data Analytics Certificate",
      "slug": "coursera-google-da",
      "initial_date": "2023-07-17",
      "end_date": "2023-09-29",
      "description": "Final project centered on analyze the correlation between three-point shot efficiency and percentage of victories in the NBA using Python and Matplotlib that can be consulted [here](https://github.com/Joul24py/Data-NBA-3PA).",
      "order": 4,
      "locale": "en",
      "id": 25,
      "logo": {
        "name": "04-coursera.jpg",
        "alternativeText": null,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_04-coursera.jpg",
            "hash": "thumbnail_04_coursera_a4e7373318",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 156,
            "height": 156,
            "size": 2.76,
            "sizeInBytes": 2760,
            "url": "/uploads/thumbnail_04_coursera_a4e7373318.jpg"
          },
          "medium": {
            "name": "medium_04-coursera.jpg",
            "hash": "medium_04_coursera_a4e7373318",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 750,
            "height": 750,
            "size": 18.69,
            "sizeInBytes": 18693,
            "url": "/uploads/medium_04_coursera_a4e7373318.jpg"
          },
          "small": {
            "name": "small_04-coursera.jpg",
            "hash": "small_04_coursera_a4e7373318",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 500,
            "size": 11.81,
            "sizeInBytes": 11808,
            "url": "/uploads/small_04_coursera_a4e7373318.jpg"
          },
          "large": {
            "name": "large_04-coursera.jpg",
            "hash": "large_04_coursera_a4e7373318",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 1000,
            "height": 1000,
            "size": 25.95,
            "sizeInBytes": 25946,
            "url": "/uploads/large_04_coursera_a4e7373318.jpg"
          }
        }
      }
    },
    {
      "school": "Aguascalientes Autonomous University",
      "study": "Intelligent Computing Engineering",
      "slug": "ici",
      "initial_date": "2018-07-30",
      "end_date": "2023-06-16",
      "description": "Undergraduate thesis on the implementation of supervised learning algorithms to classify neuronal activity in movement intention through a brain-computer interface.\n\nFive-time awardee of honorable mention in ACM/ICPC participations in 2018, 2019, and 2023.\n\nSix-time best grade of a semester (1st, 2nd, 3rd, 4th, 5th and 10th).\n\nClass of 2023's best grade with a performance of 9.667 (3.87 GPA equivalent).\n\nGraduated with honors after publishing and present my undergraduate thesis in the CONTIE 2023.\n\nAuthor of the article [Brain-computer interface and supervised learning for movement intention classification](https://ritie.net/es/papers) for the June 2024 issue of \"Connecting Opportunities: Inclusive Technologies for 21st Century Education\" magazine published on June 27, 2024.",
      "order": 3,
      "locale": "en",
      "id": 24,
      "logo": {
        "name": "03-uaa.jpg",
        "alternativeText": null,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_03-uaa.jpg",
            "hash": "thumbnail_03_uaa_09dc6cd46f",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 156,
            "height": 156,
            "size": 3.8,
            "sizeInBytes": 3799,
            "url": "/uploads/thumbnail_03_uaa_09dc6cd46f.jpg"
          },
          "small": {
            "name": "small_03-uaa.jpg",
            "hash": "small_03_uaa_09dc6cd46f",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 500,
            "size": 18.75,
            "sizeInBytes": 18745,
            "url": "/uploads/small_03_uaa_09dc6cd46f.jpg"
          },
          "medium": {
            "name": "medium_03-uaa.jpg",
            "hash": "medium_03_uaa_09dc6cd46f",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 750,
            "height": 750,
            "size": 30.32,
            "sizeInBytes": 30317,
            "url": "/uploads/medium_03_uaa_09dc6cd46f.jpg"
          },
          "large": {
            "name": "large_03-uaa.jpg",
            "hash": "large_03_uaa_09dc6cd46f",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 1000,
            "height": 1000,
            "size": 43.02,
            "sizeInBytes": 43023,
            "url": "/uploads/large_03_uaa_09dc6cd46f.jpg"
          }
        }
      }
    },
    {
      "school": "International Baccalaureate",
      "study": "International Baccalaureate Diploma Programme",
      "slug": "ib",
      "initial_date": "2016-08-08",
      "end_date": "2018-05-17",
      "description": "Graduated from the Diploma Programme in the May 2018 examination session with 28 points:\n\n- Spanish A: Literature (HL): 5.\n- English B (HL): 5.\n- History of America (Spanish) (HL): 4.\n- Biology (Spanish) (SL): 4.\n- Chemistry (Spanish) (SL): 3.\n- Mathematics (Spanish) (SL): 5.\n- Extended Essay in World Studies (Spanish): B.\n- Theory of Knowledge: B.\n\nAuthor of the article [Difference in soil moisture between *Eucalyptus globulus* and *Prosopis glandulosa* in different areas of Aguascalientes](https://revistas.uaa.mx/index.php/bi/article/view/1814) for the first issue of \"BInvestigation\" magazine published on March 28, 2019.",
      "order": 2,
      "locale": "en",
      "id": 21,
      "logo": {
        "name": "02-ib.jpg",
        "alternativeText": null,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_02-ib.jpg",
            "hash": "thumbnail_02_ib_f872ff0c1a",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 156,
            "height": 156,
            "size": 6.55,
            "sizeInBytes": 6551,
            "url": "/uploads/thumbnail_02_ib_f872ff0c1a.jpg"
          },
          "small": {
            "name": "small_02-ib.jpg",
            "hash": "small_02_ib_f872ff0c1a",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 500,
            "size": 30.75,
            "sizeInBytes": 30746,
            "url": "/uploads/small_02_ib_f872ff0c1a.jpg"
          },
          "medium": {
            "name": "medium_02-ib.jpg",
            "hash": "medium_02_ib_f872ff0c1a",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 750,
            "height": 750,
            "size": 49.43,
            "sizeInBytes": 49428,
            "url": "/uploads/medium_02_ib_f872ff0c1a.jpg"
          },
          "large": {
            "name": "large_02-ib.jpg",
            "hash": "large_02_ib_f872ff0c1a",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 1000,
            "height": 1000,
            "size": 69.3,
            "sizeInBytes": 69303,
            "url": "/uploads/large_02_ib_f872ff0c1a.jpg"
          }
        }
      }
    },
    {
      "school": "High School Center of the Aguascalientes Autonomous University",
      "study": "General High School Studies",
      "slug": "bachuaa",
      "initial_date": "2015-07-27",
      "end_date": "2018-06-15",
      "description": "Grade performance of 9.5 (3.84 GPA equivalent).\n\nFifth place and awardee of honorable mention in final phase of the 2017 Mathematics Mexican Olympiad, region Aguascalientes.",
      "order": 1,
      "locale": "en",
      "id": 20,
      "logo": {
        "name": "01-bachuaa.jpg",
        "alternativeText": null,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_01-bachuaa.jpg",
            "hash": "thumbnail_01_bachuaa_729a93b9ed",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 156,
            "height": 156,
            "size": 2.33,
            "sizeInBytes": 2331,
            "url": "/uploads/thumbnail_01_bachuaa_729a93b9ed.jpg"
          },
          "medium": {
            "name": "medium_01-bachuaa.jpg",
            "hash": "medium_01_bachuaa_729a93b9ed",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 750,
            "height": 750,
            "size": 22.57,
            "sizeInBytes": 22571,
            "url": "/uploads/medium_01_bachuaa_729a93b9ed.jpg"
          },
          "small": {
            "name": "small_01-bachuaa.jpg",
            "hash": "small_01_bachuaa_729a93b9ed",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 500,
            "size": 11.92,
            "sizeInBytes": 11918,
            "url": "/uploads/small_01_bachuaa_729a93b9ed.jpg"
          },
          "large": {
            "name": "large_01-bachuaa.jpg",
            "hash": "large_01_bachuaa_729a93b9ed",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 1000,
            "height": 1000,
            "size": 33.46,
            "sizeInBytes": 33462,
            "url": "/uploads/large_01_bachuaa_729a93b9ed.jpg"
          }
        }
      }
    }
  ],
  "meta": {

  }
}
```

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/ygg-studies?locale=es-419a```):

```json
{
  "data": [],
  "meta": {

  }
}
```

### ℹ️ GET /api/ygg-studies/:slug

Obtener un estudio en específico

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/ygg-studies/ici```: Consulta el estudio cuya slug es ici regresando la localización por default que es en inglés
- ```/api/ygg-studies/ib?locale=es-419```: Consulta el estudio cuya slug es ib regresando la localización en español latinoamérica
- ```/api/ygg-studies/bachuaa?locale=en```: Consulta el estudio cuya slug es bachuaa regresando la localización en inglés

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/ygg-studies/ib?locale=en```):

```json
{
  "data": {
    "school": "International Baccalaureate",
    "study": "International Baccalaureate Diploma Programme",
    "slug": "ib",
    "initial_date": "2016-08-08",
    "end_date": "2018-05-17",
    "description": "Graduated from the Diploma Programme in the May 2018 examination session with 28 points:\n\n- Spanish A: Literature (HL): 5.\n- English B (HL): 5.\n- History of America (Spanish) (HL): 4.\n- Biology (Spanish) (SL): 4.\n- Chemistry (Spanish) (SL): 3.\n- Mathematics (Spanish) (SL): 5.\n- Extended Essay in World Studies (Spanish): B.\n- Theory of Knowledge: B.\n\nAuthor of the article [Difference in soil moisture between *Eucalyptus globulus* and *Prosopis glandulosa* in different areas of Aguascalientes](https://revistas.uaa.mx/index.php/bi/article/view/1814) for the first issue of \"BInvestigation\" magazine published on March 28, 2019.",
    "order": 2,
    "locale": "en",
    "id": 21,
    "logo": {
      "name": "02-ib.jpg",
      "alternativeText": null,
      "formats": {
        "thumbnail": {
          "name": "thumbnail_02-ib.jpg",
          "hash": "thumbnail_02_ib_f872ff0c1a",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 156,
          "height": 156,
          "size": 6.55,
          "sizeInBytes": 6551,
          "url": "/uploads/thumbnail_02_ib_f872ff0c1a.jpg"
        },
        "small": {
          "name": "small_02-ib.jpg",
          "hash": "small_02_ib_f872ff0c1a",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 500,
          "height": 500,
          "size": 30.75,
          "sizeInBytes": 30746,
          "url": "/uploads/small_02_ib_f872ff0c1a.jpg"
        },
        "medium": {
          "name": "medium_02-ib.jpg",
          "hash": "medium_02_ib_f872ff0c1a",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 750,
          "height": 750,
          "size": 49.43,
          "sizeInBytes": 49428,
          "url": "/uploads/medium_02_ib_f872ff0c1a.jpg"
        },
        "large": {
          "name": "large_02-ib.jpg",
          "hash": "large_02_ib_f872ff0c1a",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 1000,
          "height": 1000,
          "size": 69.3,
          "sizeInBytes": 69303,
          "url": "/uploads/large_02_ib_f872ff0c1a.jpg"
        }
      }
    }
  },
  "meta": {

  }
}
```

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/ygg-studies/ibo```):

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

## Trabajos

La colección que guarda los posts referentes a mis experiencias laborales

La estructura de la colección es la siguiente:

- **workplace** Text *(Short text, required, localization enabled)*: Nombre de la institución donde trabajé
- **initial_date:** Date *(Date, required)*: Fecha de inicio de la experiencia laboral
- **end_date:** Date *(Date)*: Fecha de fin de la experiencia laboral
- **position** Text *(Short text, required, localization enabled)*: Nombre de la posición laboral que ocupé
- **logo:** Media *(Single media, only images allowed, required)*: Imagen en escala 1:1 del logotipo de la institución donde trabajé
- **description:** Rich text (Markdown) *(Localization enabled)*: Descripción sobre highlights o condecoraciones a lo largo de este trabajo
- **order:** Number *(Integer)*: Usado para ordenar los trabajos. Entre más reciente sea el trabajo, mayor será el número de este campo
- **ygg_technologies** Relation with YGG-Technology *(YGG-Job has many YGG-Technologies)*: Relación con las tecnologías que puedan aparecer en esta experiencia laboral
- **ygg_skills** Relation with YGG-Skill *(YGG-Job has many YGG-Skills)*: Relación con las habilidades que puedan aparecer en esta experiencia laboral
- **ygg_profiles** Relation with YGG-Profile *(YGG-Job has many YGG-Profiles)*: Relación con los perfiles que puedan mostrar esta experiencia laboral
- **slug:** UID *(Required)*: Slug que se usa desde el FrontEnd para acceder a un elemento específico de la colección
- **background_color:** Text *(Short text, required, RegExp pattern: ```^#([A-Fa-f0-9]{6})$```)*: Color de fondo a exhibir

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/ygg-jobs

Obtener todos los trabajos

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/ygg-jobs```: Consulta de todos los trabajos regresando la localización por default que es en inglés
- ```/api/ygg-jobs?locale=es-419```: Consulta de todos los trabajos regresando la localización en español latinoamérica
- ```/api/ygg-jobs?locale=en```: Consulta de todos los trabajos regresando la localización en inglés

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Este endpoint fue programado para que regrese siempre los trabajos ordenados de forma descendente

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/ygg-jobs?locale=en```):

```json
{
  "data": [
    {
      "workplace": "UAA inglés haha",
      "position": "best job test",
      "slug": "uaa",
      "initial_date": "2024-09-17",
      "end_date": null,
      "description": "this is a uaa test i love you so mucho UAA",
      "order": 3,
      "locale": "en",
      "id": 20,
      "ygg_technologies": [
        {
          "name": "C#",
          "background_color": "#3A0092",
          "font_color": "#FFFFFF"
        }
      ],
      "ygg_skills": [
        {
          "name": "Software design",
          "skill_type": "technical",
          "locale": "en"
        }
      ],
      "ygg_profiles": [
        {
          "name": "Software Developer",
          "slug": "software",
          "locale": "en"
        }
      ],
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
    {
      "workplace": "INEGI TEST but english",
      "position": "database link TEST a",
      "slug": "inegi",
      "initial_date": "2024-04-01",
      "end_date": "2024-09-13",
      "description": "This is an inegi TEST aaaaaa",
      "order": 2,
      "locale": "en",
      "id": 15,
      "ygg_technologies": [
        {
          "name": "Java",
          "background_color": "#EC2025",
          "font_color": "#000000"
        }
      ],
      "ygg_skills": [
        {
          "name": "Software design",
          "skill_type": "technical",
          "locale": "en"
        }
      ],
      "ygg_profiles": [
        {
          "name": "Database Administrator",
          "slug": "dba",
          "locale": "en"
        },
        {
          "name": "BackEnd Developer",
          "slug": "backend",
          "locale": "en"
        }
      ],
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
    {
      "workplace": "Test Hermes english",
      "position": "Backend Developer",
      "slug": "hermes",
      "initial_date": "2022-02-14",
      "end_date": "2023-04-14",
      "description": "This is an Hermes test",
      "order": 1,
      "locale": "en",
      "id": 16,
      "ygg_technologies": [
        {
          "name": "Node.js",
          "background_color": "#80BD03",
          "font_color": "#000000"
        },
        {
          "name": "MongoDB",
          "background_color": "#03EB64",
          "font_color": "#000000"
        }
      ],
      "ygg_skills": [
        {
          "name": "Software design",
          "skill_type": "technical",
          "locale": "en"
        }
      ],
      "ygg_profiles": [
        {
          "name": "BackEnd Developer",
          "slug": "backend",
          "locale": "en"
        }
      ],
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

  }
}
```

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/ygg-jobs?locale=es-419a```):

```json
{
  "data": [],
  "meta": {

  }
}
```

### ℹ️ GET /api/ygg-jobs/:slug

Obtener un estudio en específico

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/ygg-jobs/hermes```: Consulta el estudio cuya slug es hermes regresando la localización por default que es en inglés
- ```/api/ygg-jobs/uaa?locale=es-419```: Consulta el estudio cuya slug es uaa regresando la localización en español latinoamérica
- ```/api/ygg-jobs/inegi?locale=en```: Consulta el estudio cuya slug es inegi regresando la localización en inglés

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Este endpoint fue programado para que regrese siempre los estudios ordenados de forma descendente

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/ygg-jobs/uaa?locale=es-419```):

```json
{
  "data": {
    "workplace": "UAA spanish jaja",
    "position": "el mejor trabajo test",
    "slug": "uaa",
    "initial_date": "2024-09-17",
    "end_date": null,
    "description": "Este es un test de la UAA te quiero mucho UAA",
    "order": 3,
    "locale": "es-419",
    "id": 18,
    "ygg_technologies": [
      {
        "name": "C#",
        "background_color": "#3A0092",
        "font_color": "#FFFFFF"
      }
    ],
    "ygg_skills": [
      {
        "name": "Diseño de software",
        "skill_type": "technical",
        "locale": "es-419"
      }
    ],
    "ygg_profiles": [
      {
        "name": "Desarrollador de Software",
        "slug": "software",
        "locale": "es-419"
      }
    ],
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

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/ygg-jobs/oaa?locale=es-419```):

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

## Proyectos

La colección que guarda los proyectos que he hecho y exhibo en mi portafolio

La estructura de la colección es la siguiente:

- **name:** Text *(Short text, required, localization enabled)*: Nombre del proyecto
- **ygg_technologies** Relation with YGG-Technology *(YGG-Project has many YGG-Technologies)*: Relación con las tecnologías que puedan aparecer en este proyecto
- **ygg_skills** Relation with YGG-Skill *(YGG-Project has many YGG-Skills)*: Relación con las habilidades que puedan aparecer en este proyecto
- **logo:** Media *(Single media, only images allowed, required)*: Imagen en escala 4:3 de la imagen del proyecto
- **review:** Text *(Long text, localization enabled)*: Pequeña reseña del proyecto
- **description:** Rich text (Markdown) *(Localization enabled)*: Descripción más extensa del proyecto
- **project_type** Enumeration *(Values: ['personal', 'learning', 'product', 'contribution', 'collaboration'], required)*: El tipo de proyecto que es el registro
- **know_me_better_project** Boolean *(Required, default value: false)*: Describe si el proyecto es de tipo para conocerme mejor a mí
- **ygg_profiles** Relation with YGG-Profile *(YGG-Project has many YGG-Profiles)*: Relación con los perfiles que puedan mostrar este proyecto
- **order:** Number *(Integer)*: Usado para ordenar los proyectos. Entre más importante sea para mí el proyecto, mayor será el número de este campo
- **url:** Text *(Short text)*: URL a la web del proyecto, sea donde está desplegada, repositorio de GitHub u otro tipo de URL del proyecto
- **slug:** UID *(Required)*: Slug que se usa desde el FrontEnd para acceder a un elemento específico de la colección

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/ygg-projects

Obtener todos los proyectos

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/ygg-projects```: Obtiene los proyectos usando los valores por defecto de localización, perfil, tipo de proyecto y paginación
- ```/api/ygg-projects?locale=es-419&page=3&pageSize=2```: Obtiene los proyectos en español usando una paginación de tamaño 2 ubicándose en la tercera página
- ```/api/ygg-projects?locale=es-419&profile=mobile&projectType=knowMe```: Obtiene los proyectos dentro del perfil de desarrollador móvil y que sean para conocerme mejor en la localización de español latinoamérica

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Se programó manualmente el filtrado de este endpoint a través de la variable ```profile``` a la que se le espera el slug de un perfil existente. De no enviársele un perfil existente será igual como no enviarle ningún valor lo cual resultará en traer todos los proyectos

Se programó manualmente el filtrado en este endpoint a través de la variable ```projectType``` con el que se indica el tipo de proyecto a filtrar. Los valores posibles son los siguientes:

- personal: Regresará todos los proyectos personales (incluye los que son para conocerme mejor y los que no)
- learning: Regresará todos los proyectos de aprendizaje
- product: Regresará todos los productos
- contribution: Regresará todas las contribuciones
- collaboration: Regresará todas las colaboraciones
- knowMe: Regresará todos los proyectos personales solamente tomando aquellos que son para conocerme mejor
- notKnowMe: Regresará todos los proyectos personales solamente tomando aquellos que no son para conocerme mejor

Se programó manualmente la paginación a través de las variables ```page``` y ```pageSize``` que describen el número de página y el tamaño de la página deseado respectivamente. Si el número de página no es indicado, por defecto tomará el valor de 1. Si el tamaño de la página no es indicado, por defecto tomará el valor de la longitud del arreglo regresado. Si el número de página es mayor al total de páginas que habría según los parámetros de paginación, el número de página pasa a ser 1 devolviendo a la primera página

Este endpoint fue programado para que regrese siempre los proyectos ordenados de forma descendente

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/ygg-projects?locale=es-419&page=2&pageSize=2```):

```json
{
  "data": [
    {
      "name": "Test producto como Gym App",
      "review": "Test producto como Gym App :o",
      "url": "b",
      "locale": "es-419",
      "slug": "gym-app-test",
      "id": 16,
      "ygg_technologies": [
        {
          "name": "Flutter",
          "background_color": "#5FC9F8",
          "font_color": "#000000"
        }
      ],
      "ygg_skills": [
        {
          "name": "Análisis de requerimientos",
          "skill_type": "technical",
          "locale": "es-419"
        }
      ],
      "ygg_profiles": [
        {
          "name": "Desarrollador Móvil",
          "slug": "mobile",
          "locale": "es-419"
        }
      ],
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
      "name": "Test UAA ICI",
      "review": "UAA ICI test jaja",
      "url": "https://github.com/Joul24py/UAA-ICI",
      "locale": "es-419",
      "slug": "uaa-ici-test",
      "id": 12,
      "ygg_technologies": [
        {
          "name": "C",
          "background_color": "#3C4DAF",
          "font_color": "#FFFFFF"
        }
      ],
      "ygg_skills": [
        {
          "name": "Estructuras de datos y algoritmos",
          "skill_type": "technical",
          "locale": "es-419"
        }
      ],
      "ygg_profiles": [
        {
          "name": "Desarrollador de Software",
          "slug": "software",
          "locale": "es-419"
        }
      ],
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
  "meta": {
    "page": "2",
    "pageSize": "2",
    "totalPages": 3
  }
}
```

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/ygg-projects?locale=eas-419&page=2&pageSize=2```):

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

### ℹ️ GET /api/ygg-projects/:slug

Obtener un proyecto en específico

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/ygg-projects/test-personal-no-know-me-better```: Consulta el proyecto indicado regresando la localización por default que es en inglés
- ```/api/ygg-projects/horacio-project?locale=es-419```: Consulta el proyecto indicado regresando la localización en español latinoamérica
- ```/api/ygg-projects/la-velada?locale=en```: Consulta el proyecto indicado regresando la localización en inglés

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/ygg-projects/la-velada?locale=en```):

```json
{
  "data": {
    "name": "test contri como la velada :o",
    "review": "Como la velada :o inglés",
    "description": "Test como la velada inglés",
    "url": "https://github.com/midudev/la-velada-web-oficial",
    "locale": "en",
    "slug": "la-velada",
    "id": 22,
    "ygg_technologies": [
      {
        "name": "JavaScript",
        "background_color": "#F7DF1E",
        "font_color": "#000000"
      }
    ],
    "ygg_skills": [
      {
        "name": "Data structures and algorithms",
        "skill_type": "technical",
        "locale": "en"
      }
    ],
    "ygg_profiles": [
      {
        "name": "Software Developer",
        "slug": "software",
        "locale": "en"
      }
    ],
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
  "meta": {

  }
}
```

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/ygg-projects/hola```):

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

## Recursos

La colección que guarda recursos que he encontrado muy útiles que no son míos pero me gusta exhibir en mi portafolio

La estructura de la colección es la siguiente:

- **name:** Text *(Short text, required, localization enabled)*: Nombre del recurso
- **ygg_technologies** Relation with YGG-Technology *(YGG-Resource has many YGG-Technologies)*: Relación con las tecnologías que puedan aparecer en este recurso
- **ygg_skills** Relation with YGG-Skill *(YGG-Resource has many YGG-Skills)*: Relación con las habilidades que puedan aparecer en este recurso
- **logo:** Media *(Single media, only images allowed, required)*: Imagen en escala 4:3 de la imagen del recurso
- **review:** Text *(Long text, localization enabled)*: Pequeña reseña del recurso
- **description:** Rich text (Markdown) *(Localization enabled)*: Descripción más extensa del recurso
- **ygg_profiles** Relation with YGG-Profile *(YGG-Resource has many YGG-Profiles)*: Relación con los perfiles que puedan mostrar este recurso
- **order:** Number *(Integer)*: Usado para ordenar los recursos. Entre más importante sea para mí el recurso, mayor será el número de este campo
- **url:** Text *(Short text)*: URL a la web del recurso, sea donde está desplegada, repositorio de GitHub, post en redes sociales u otro tipo de URL del recurso
- **slug:** UID *(Required)*: Slug que se usa desde el FrontEnd para acceder a un elemento específico de la colección

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/ygg-resources

Obtener todos los recursos

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/ygg-resources```: Obtiene todos los recursos usando los valores por defecto de localización, perfil, paginación y orden
- ```/api/ygg-resources?locale=es-419&randomSeed=22&profile=cloud```: Obtiene todos los recursos en español usando una semilla de mezclado de valor 22 buscando solamente los recursos asociados al perfil cloud
- ```/api/ygg-resources?locale=es-419&page=3&pageSize=2```: Obtiene todos los recursos en idioma español usando una paginación de tamaño de dos registros buscando la tercera página

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Se programó manualmente el filtrado de este endpoint a través de la variable ```profile``` a la que se le espera el slug de un perfil existente. De no enviársele un perfil existente será igual como no enviarle ningún valor lo cual resultará en traer todos los recursos

Se programó manualmente la paginación a través de las variables ```page``` y ```pageSize``` que describen el número de página y el tamaño de la página deseado respectivamente. Si el número de página no es indicado, por defecto tomará el valor de 1. Si el tamaño de la página no es indicado, por defecto tomará el valor de la longitd del arreglo regresado. Si el número de página es mayor al total de páginas que habría según los parámetros de paginación, el número de página pasa a ser 1 devolviendo a la primera página

Se programó manualmente a través de la variable ```randomSeed``` una semilla aleatoria para mezclar el resultado de documentos y poder mostrarlos de forma aleatoria en el FrontEnd. Si el parámetro no recibe nada, por defecto los ordenará de forma descendente según el registro order. Si se le pasa un valor numérico entero realizará la mezcla aleatoria

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/ygg-resources?locale=es-419&randomSeed=22```):

```json
{
  "data": [
    {
      "name": "LibreriasJS",
      "review": "adfasdf",
      "description": "yes yes si si",
      "url": "https://www.youtube.com/@libreriasjs",
      "locale": "es-419",
      "slug": "libreriasjs",
      "id": 2,
      "ygg_technologies": [
        {
          "name": "JavaScript",
          "background_color": "#F7DF1E",
          "font_color": "#000000"
        }
      ],
      "ygg_skills": [
        {
          "name": "Automatización",
          "skill_type": "technical",
          "locale": "es-419"
        }
      ],
      "ygg_profiles": [
        {
          "name": "Analista de Datos",
          "slug": "data-analyst",
          "locale": "es-419"
        }
      ],
      "logo": {
        "name": "libreriasjs.jpg",
        "alternativeText": null,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_libreriasjs.jpg",
            "hash": "thumbnail_libreriasjs_3c7b7ca0ff",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 208,
            "height": 156,
            "size": 4.19,
            "sizeInBytes": 4193,
            "url": "/uploads/thumbnail_libreriasjs_3c7b7ca0ff.jpg"
          },
          "medium": {
            "name": "medium_libreriasjs.jpg",
            "hash": "medium_libreriasjs_3c7b7ca0ff",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 750,
            "height": 562,
            "size": 26.82,
            "sizeInBytes": 26818,
            "url": "/uploads/medium_libreriasjs_3c7b7ca0ff.jpg"
          },
          "small": {
            "name": "small_libreriasjs.jpg",
            "hash": "small_libreriasjs_3c7b7ca0ff",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 375,
            "size": 15.83,
            "sizeInBytes": 15834,
            "url": "/uploads/small_libreriasjs_3c7b7ca0ff.jpg"
          },
          "large": {
            "name": "large_libreriasjs.jpg",
            "hash": "large_libreriasjs_3c7b7ca0ff",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 1000,
            "height": 750,
            "size": 40.3,
            "sizeInBytes": 40301,
            "url": "/uploads/large_libreriasjs_3c7b7ca0ff.jpg"
          }
        }
      }
    },
    {
      "name": "Test algo de Midudev",
      "review": "review",
      "description": "yes yes si si",
      "url": "midudev",
      "locale": "es-419",
      "slug": "test-midudev",
      "id": 7,
      "ygg_technologies": [
        {
          "name": "Angular",
          "background_color": "#C4002B",
          "font_color": "#FFFFFF"
        }
      ],
      "ygg_skills": [
        {
          "name": "Automatización",
          "skill_type": "technical",
          "locale": "es-419"
        }
      ],
      "ygg_profiles": [
        {
          "name": "Administrador de Bases de Datos",
          "slug": "dba",
          "locale": "es-419"
        }
      ],
      "logo": {
        "name": "libreriasjs.jpg",
        "alternativeText": null,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_libreriasjs.jpg",
            "hash": "thumbnail_libreriasjs_3c7b7ca0ff",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 208,
            "height": 156,
            "size": 4.19,
            "sizeInBytes": 4193,
            "url": "/uploads/thumbnail_libreriasjs_3c7b7ca0ff.jpg"
          },
          "medium": {
            "name": "medium_libreriasjs.jpg",
            "hash": "medium_libreriasjs_3c7b7ca0ff",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 750,
            "height": 562,
            "size": 26.82,
            "sizeInBytes": 26818,
            "url": "/uploads/medium_libreriasjs_3c7b7ca0ff.jpg"
          },
          "small": {
            "name": "small_libreriasjs.jpg",
            "hash": "small_libreriasjs_3c7b7ca0ff",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 375,
            "size": 15.83,
            "sizeInBytes": 15834,
            "url": "/uploads/small_libreriasjs_3c7b7ca0ff.jpg"
          },
          "large": {
            "name": "large_libreriasjs.jpg",
            "hash": "large_libreriasjs_3c7b7ca0ff",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 1000,
            "height": 750,
            "size": 40.3,
            "sizeInBytes": 40301,
            "url": "/uploads/large_libreriasjs_3c7b7ca0ff.jpg"
          }
        }
      }
    },
    {
      "name": "Test algo de MoureDev",
      "review": "review",
      "description": "yes yes si si",
      "url": "mouredev",
      "locale": "es-419",
      "slug": "test-mouredev",
      "id": 13,
      "ygg_technologies": [
        {
          "name": ".NET",
          "background_color": "#5027D5",
          "font_color": "#FFFFFF"
        }
      ],
      "ygg_skills": [
        {
          "name": "Manejo de APIs",
          "skill_type": "technical",
          "locale": "es-419"
        }
      ],
      "ygg_profiles": [
        {
          "name": "Desarrollador BackEnd",
          "slug": "backend",
          "locale": "es-419"
        }
      ],
      "logo": {
        "name": "libreriasjs.jpg",
        "alternativeText": null,
        "formats": {
          "thumbnail": {
            "name": "thumbnail_libreriasjs.jpg",
            "hash": "thumbnail_libreriasjs_3c7b7ca0ff",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 208,
            "height": 156,
            "size": 4.19,
            "sizeInBytes": 4193,
            "url": "/uploads/thumbnail_libreriasjs_3c7b7ca0ff.jpg"
          },
          "medium": {
            "name": "medium_libreriasjs.jpg",
            "hash": "medium_libreriasjs_3c7b7ca0ff",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 750,
            "height": 562,
            "size": 26.82,
            "sizeInBytes": 26818,
            "url": "/uploads/medium_libreriasjs_3c7b7ca0ff.jpg"
          },
          "small": {
            "name": "small_libreriasjs.jpg",
            "hash": "small_libreriasjs_3c7b7ca0ff",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 500,
            "height": 375,
            "size": 15.83,
            "sizeInBytes": 15834,
            "url": "/uploads/small_libreriasjs_3c7b7ca0ff.jpg"
          },
          "large": {
            "name": "large_libreriasjs.jpg",
            "hash": "large_libreriasjs_3c7b7ca0ff",
            "ext": ".jpg",
            "mime": "image/jpeg",
            "path": null,
            "width": 1000,
            "height": 750,
            "size": 40.3,
            "sizeInBytes": 40301,
            "url": "/uploads/large_libreriasjs_3c7b7ca0ff.jpg"
          }
        }
      }
    }
  ],
  "meta": {
    "page": "1",
    "pageSize": 3,
    "totalPages": 1
  }
}
```

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/ygg-resources?locale=en&randomSeed=22&profile=cloud```):

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

### ℹ️ GET /api/ygg-resources/:slug

Obtener un recurso en específico

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/ygg-resources/test-mouredev```: Trae el recurso con su respectivo slug usando el valor de localización por defecto siendo inglés
- ```/api/ygg-resources/test-midudev?locale=es-419```: Trae el recurso con su respectivo slug usando el valor de localización de español latinoamérica
- ```/api/ygg-resources/libreriasjs?locale=en```: Trae el recurso con su respectivo slug usando el valor de localización inglés

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/ygg-resources/test-mouredev?locale=es-419```):

```json
{
  "data": {
    "name": "Test algo de MoureDev",
    "review": "review",
    "description": "yes yes si si",
    "url": "mouredev",
    "locale": "es-419",
    "slug": "test-mouredev",
    "id": 13,
    "ygg_technologies": [
      {
        "name": ".NET",
        "background_color": "#5027D5",
        "font_color": "#FFFFFF"
      }
    ],
    "ygg_skills": [
      {
        "name": "Manejo de APIs",
        "skill_type": "technical",
        "locale": "es-419"
      }
    ],
    "ygg_profiles": [
      {
        "name": "Desarrollador BackEnd",
        "slug": "backend",
        "locale": "es-419"
      }
    ],
    "logo": {
      "name": "libreriasjs.jpg",
      "alternativeText": null,
      "formats": {
        "thumbnail": {
          "name": "thumbnail_libreriasjs.jpg",
          "hash": "thumbnail_libreriasjs_3c7b7ca0ff",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 208,
          "height": 156,
          "size": 4.19,
          "sizeInBytes": 4193,
          "url": "/uploads/thumbnail_libreriasjs_3c7b7ca0ff.jpg"
        },
        "medium": {
          "name": "medium_libreriasjs.jpg",
          "hash": "medium_libreriasjs_3c7b7ca0ff",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 750,
          "height": 562,
          "size": 26.82,
          "sizeInBytes": 26818,
          "url": "/uploads/medium_libreriasjs_3c7b7ca0ff.jpg"
        },
        "small": {
          "name": "small_libreriasjs.jpg",
          "hash": "small_libreriasjs_3c7b7ca0ff",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 500,
          "height": 375,
          "size": 15.83,
          "sizeInBytes": 15834,
          "url": "/uploads/small_libreriasjs_3c7b7ca0ff.jpg"
        },
        "large": {
          "name": "large_libreriasjs.jpg",
          "hash": "large_libreriasjs_3c7b7ca0ff",
          "ext": ".jpg",
          "mime": "image/jpeg",
          "path": null,
          "width": 1000,
          "height": 750,
          "size": 40.3,
          "sizeInBytes": 40301,
          "url": "/uploads/large_libreriasjs_3c7b7ca0ff.jpg"
        }
      }
    }
  },
  "meta": {

  }
}
```

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/ygg-resources/test-ia?locale=es-419```):

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

## Tecnologías

La colección que guarda las tecnologías que domino y exhibo en mi portafolio

La estructura de la colección es la siguiente:

- **name:** Text *(Short text, required, unique)*: Nombre de la tecnología
- **background_color:** Text *(Short text, required, RegExp pattern: ```^#([A-Fa-f0-9]{6})$```)*: Color de fondo a exhibir
- **font_color:** Text *(Short text, required, RegExp pattern: ```^#([A-Fa-f0-9]{6})$```)*: Color de la fuente a exhibir
- **ygg_profiles** Relation with YGG-Profile *(YGG-Technology has many YGG-Profiles)*: Relación con los perfiles que puedan mostrar esta tecnología

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/ygg-technologies

Obtener todas las tecnologías

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/ygg-technologies```: Consulta todas las tecnologías regresando un resultado sin filtrar por perfil
- ```/api/ygg-technologies?profile=devops```: Consulta todas las tecnologías filtrando por perfil cuya slug es devops
- ```/api/ygg-technologies?profile=ml-engineer&publishState=draftNotPublished```: Consulta todas las tecnologías filtrando por perfil cuya slug es ml-engineer buscando además tecnologías que se encuentren como draft sin haber sido publicadas

Se programó manualmente el filtrado de este endpoint a través de la variable ```profile``` a la que se le espera el slug de un perfil existente. De no enviársele un perfil existente será igual como no enviarle ningún valor lo cual resultará en traer todas las tecnologías

Se programó manualmente el filtrado de este endpoint a través de la variable ```publishState``` para filtrar por estado de la tecnología, ya sea publicado o como borrador. Esta variable puede recibir los siguientes valores y tendrá los siguientes comportamientos:

- published: El filtrado lo hará con base en los documentos que se encuentren en estado de publicado
- draft: Dado que Strapi considera que todos los documentos pasan por el estado de draft, este filtrado traerá los documentos que se encuentren en estado de draft sin embargo no excluye a aquellos documentos que también ya tienen un estado de publicado, haciendo parecer que trae a "todos los documentos"
- draftNotPublished: Esta implementación elimina los documentos que tengan a su vez un estado de published basando así su filtrado solamente en los documentos que tengan su estado de borrador (draft) pero no tengan otro documento que represente que estén publicados
- all: Trae todo, sean documentos de draft o de published lo cual causa que los publicados se repitan doble por mostrar el documento propio al draft y el propio al publicado
- Cualquier otro valor actuará como published

El resultado regresa con un populate a perfiles retornando el slug del perfil o perfiles con los que tiene relación. Aclaro que regresa todo tipo de perfiles estén en published o draft solamente

Si se encuentran tecnologías, un ejemplo de respuesta es el siguiente (```/api/ygg-technologies?profile=devops```):

```json
{
  "data": [
    {
      "name": "Docker",
      "background_color": "#2597EE",
      "font_color": "#000000",
      "id": 119,
      "ygg_profiles": [
        {
          "slug": "devops"
        }
      ]
    },
    {
      "name": "Podman",
      "background_color": "#882B9F",
      "font_color": "#FFFFFF",
      "id": 106,
      "ygg_profiles": [
        {
          "slug": "devops"
        }
      ]
    }
  ],
  "meta": {

  }
}
```

Otro ejemplo de respuesta es el siguiente (```/api/ygg-technologies?publishState=draftNotPublished```):

```json
{
  "data": [
    {
      "name": "Arduino",
      "background_color": "#00989D",
      "font_color": "#000000",
      "id": 5,
      "ygg_profiles": [
        {
          "slug": "software"
        }
      ]
    }
  ],
  "meta": {

  }
}
```

Si no se encuentran tecnologías, un ejemplo de respuesta es el siguiente (```/api/ygg-technologies?profile=devops&publishState=draftNotPublished```):

```json
{
  "data": [],
  "meta": {

  }
}
```

## Habilidades

La colección que guarda las habilidades que domino y exhibo en mi portafolio

La estructura de la colección es la siguiente:

- **name:** Text *(Short text, required, unique, localization enabled)*: Nombre de la habilidad
- **ygg_profiles** Relation with YGG-Profile *(YGG-Technology has many YGG-Profiles)*: Relación con los perfiles que puedan mostrar esta habilidad
- **skill_type** Enumeration *(Values: ['technical', 'soft'])*: El tipo de habilidad que es, si es habilidad técnica o habilidad blanda

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/ygg-skills

Obtener todas las habilidades

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/ygg-skills```: Consulta todas las habilidades regresando un resultado sin filtrar por perfil
- ```/api/ygg-skills?profile=devops```: Consulta todas las habilidades filtrando por perfil cuya slug es devops
- ```/api/ygg-skills?profile=frontend&locale=es-419&publishState=draftNotPublished```: Consulta todas las habilidades filtrando por perfil cuya slug es frontend usando la localización de español latinoamérica y buscando además habilidades que se encuentren como draft sin haber sido publicadas

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Se programó manualmente el filtrado de este endpoint a través de la variable ```profile``` a la que se le espera el slug de un perfil existente. De no enviársele un perfil existente será igual como no enviarle ningún valor lo cual resultará en traer todas las habilidades

Se programó manualmente el filtrado de este endpoint a través de la variable ```publishState``` para filtrar por estado de la habilidad, ya sea publicado o como borrador. Esta variable puede recibir los siguientes valores y tendrá los siguientes comportamientos:

- published: El filtrado lo hará con base en los documentos que se encuentren en estado de publicado
- draft: Dado que Strapi considera que todos los documentos pasan por el estado de draft, este filtrado traerá los documentos que se encuentren en estado de draft sin embargo no excluye a aquellos documentos que también ya tienen un estado de publicado, haciendo parecer que trae a "todos los documentos"
- draftNotPublished: Esta implementación elimina los documentos que tengan a su vez un estado de published basando así su filtrado solamente en los documentos que tengan su estado de borrador (draft) pero no tengan otro documento que represente que estén publicados
- all: Trae todo, sean documentos de draft o de published lo cual causa que los publicados se repitan doble por mostrar el documento propio al draft y el propio al publicado
- Cualquier otro valor actuará como published

El resultado regresa con un populate a perfiles retornando el slug del perfil o perfiles con los que tiene relación. Aclaro que regresa todo tipo de perfiles estén en published o draft solamente

Si se encuentran tecnologías, un ejemplo de respuesta es el siguiente (```/api/ygg-skills?profile=devops```):

```json
{
  "data": [
    {
      "name": "Automation",
      "id": 49,
      "ygg_profiles": [
        {
          "slug": "cloud"
        }
      ]
    },
    {
      "name": "CI/CD",
      "id": 61,
      "ygg_profiles": [
        {
          "slug": "cloud"
        }
      ]
    },
    {
      "name": "Code documentation",
      "id": 73,
      "ygg_profiles": [
        {
          "slug": "cloud"
        }
      ]
    },
    {
      "name": "Containers",
      "id": 65,
      "ygg_profiles": [
        {
          "slug": "cloud"
        }
      ]
    },
    {
      "name": "Deploying",
      "id": 57,
      "ygg_profiles": [
        {
          "slug": "cloud"
        }
      ]
    },
    {
      "name": "Scripting",
      "id": 53,
      "ygg_profiles": [
        {
          "slug": "cloud"
        }
      ]
    },
    {
      "name": "Security in development",
      "id": 69,
      "ygg_profiles": [
        {
          "slug": "cloud"
        }
      ]
    },
    {
      "name": "Testing",
      "id": 41,
      "ygg_profiles": [
        {
          "slug": "cloud"
        }
      ]
    }
  ],
  "meta": {

  }
}
```

Si no se encuentran tecnologías, un ejemplo de respuesta es el siguiente (```/api/ygg-skills?profile=frontend&locale=es-419&publishState=draftNotPublished```):

```json
{
  "data": [],
  "meta": {

  }
}
```

## Perfiles

La colección que guarda los perfiles por los que puede filtrarse la página de mi portafolio

La estructura de la colección es la siguiente:

- **name:** Text *(Short text, required, unique, localization enabled)*: Nombre del perfil
- **slug:** UID *(Required)*: Slug que se usa desde el FrontEnd para filtrar por este perfil

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/ygg-profiles/:slug

Obtener si este perfil existe

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/ygg-profiles/ml-engineer```: Consulta del perfil con slug ml-engineer regresando la localización por default que es en inglés
- ```/api/ygg-profiles/devops?locale=es-419```: Consulta del perfil con slug devops regresando la localización de español latinoamérica
- ```/api/ygg-profiles/dba?locale=en```: Consulta del perfil con slug dba regresando la localización de inglés

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Se programó manualmente el filtrado de este endpoint a través de la variable ```includeDrafts``` con el que si se le pasa un valor de "true" entonces también incluirá en su búsqueda perfiles que se encuentren solamente como versión draft. Si se le pasa cualquier otra cosa o nada, por defecto buscará solamente perfiles que se encuentren como publicados (esto se implementa sólo como verificación, testing y debugging pues en la práctica, el FrontEnd de Yggdrasil estaría consultando solamente perfiles publicados y no borradores)

Si el slug es encontrado, un ejemplo de respuesta es el siguiente (```/api/ygg-profiles/ml-engineer?locale=es-419```):

```json
{
  "data": {
    "name": "Ingeniero de Aprendizaje Automático",
    "slug": "ml-engineer",
    "locale": "es-419"
  },
  "meta": {

  }
}
```

Si el slug no es encontrado, un ejemplo de respuesta es el siguiente (```/api/ygg-profiles/dbao?locale=es-419```):

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

## Eventos de mi Falso Currículum

La colección que guarda los eventos de mi falso CV

La estructura de la colección es la siguiente:

- **name:** Text *(Short text, required, localization enabled)*: Nombre del evento
- **initial_date:** Date *(Date, required)*: Fecha de inicio del evento
- **end_date:** Date *(Date, required)*: Fecha de fin del evento
- **description:** Rich text (Markdown) *(Localization enabled)*: Descripción del evento
- **slug:** UID *(Required)*: Slug que se usa desde el FrontEnd para acceder a un elemento específico de la colección
- **ygg_false_cv_group** Relation with YGG-False-CV-Group *(YGG-False-CV-Event has one YGG-False-CV-Groups)*: Relación con los grupos de Falso CV

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/ygg-false-cv-events

Obtener todos los eventos

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/ygg-false-cv-events```: Consulta todos los eventos con el valor de parámetros por default para la localización
- ```/api/ygg-false-cv-events?locale=es-419```: Consulta todos los eventos con localización de español latinoamérica

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Este endpoint fue programado para que regrese siempre los eventos ordenados de forma descendente por nombre

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/ygg-ygg-false-cv-events?locale=en```):

```json
{
  "data": [
    {
      "name": "Test got in primary",
      "initial_date": "2006-02-07",
      "end_date": "2012-02-07",
      "description": "Yes primary",
      "slug": "primaria",
      "locale": "en",
      "id": 4,
      "ygg_false_cv_group": {
        "id": 10,
        "name": "Academic",
        "is_formal": true,
        "locale": "en"
      }
    }
  ],
  "meta": {

  }
}
```

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/ygg-ygg-false-cv-events?locale=es-419a```):

```json
{
  "data": [],
  "meta": {

  }
}
```

### ℹ️ GET /api/ygg-false-cv-events/:slug

Obtener un evento

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/ygg-false-cv-events/primaria```: Consulta el evento con el slug deseado con el valor de parámetros por default para la localización
- ```/api/ygg-false-cv-events/primaria?locale=es-419```: Consulta el evento con el slug deseado con localización de español latinoamérica

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/ygg-ygg-false-cv-events?locale=en```):

```json
{
  "data": {
    "name": "Test got in primary",
    "initial_date": "2006-02-07",
    "end_date": "2012-02-07",
    "description": "Yes primary",
    "slug": "primaria",
    "locale": "en",
    "id": 4,
    "ygg_false_cv_group": {
      "id": 10,
      "name": "Academic",
      "is_formal": true,
      "locale": "en"
    }
  },
  "meta": {

  }
}
```

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/ygg-ygg-false-cv-events?locale=es-419a```):

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

## Grupos de mi Falso Currículum

La colección que guarda los grupos para los eventos de mi falso CV

La estructura de la colección es la siguiente:

- **name:** Text *(Short text, required, localization enabled)*: Nombre del grupo
- **is_formal** Boolean *(Required, default value: false)*: Describe si el grupo es formal o no

Los endpoints que usa esta colección son los siguientes:

### ℹ️ GET /api/ygg-false-cv-groups

Obtener todos los grupos

Algunos ejemplos de la consulta al endpoint son los siguientes:

- ```/api/ygg-false-cv-groups```: Consulta todos los grupos con el valor de parámetros por default para la localización
- ```/api/ygg-false-cv-groups?locale=es-419```: Consulta todos los grupos con localización de español latinoamérica

Se programó el filtrado de este endpoint a través de la variable ```locale``` con el que se indica la localización deseada a filtrar con valores como "es-419" y "en". Si no se le indica nada tomará por defecto la localización en inglés

Este endpoint fue programado para que regrese siempre los eventos ordenados de forma descendente por nombre

Si la respuesta es correcta, un ejemplo de respuesta es la siguiente (```/api/ygg-ygg-false-cv-groups?locale=es-419```):

```json
{
  "data": [
    {
      "id": 9,
      "name": "Académico",
      "is_formal": true,
      "locale": "es-419"
    },
    {
      "id": 8,
      "name": "Deportivo",
      "is_formal": false,
      "locale": "es-419"
    }
  ],
  "meta": {

  }
}
```

Si la respuesta no es correcta, un ejemplo de respuesta es la siguiente (```/api/ygg-ygg-false-cv-groups?locale=es-419a```):

```json
{
  "data": [],
  "meta": {

  }
}
```