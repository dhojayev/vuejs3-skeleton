# Project skeleton with Encore / VueJS3 / TypeScript / vuex / SASS / eslint / tslint / stylelint / bootstrap 5 / docker-compose

This project includes all the typical packages that I use for VueJS development.

## Prerequisites

To run the project on a host machine you must have installed:

- nodejs v16
- yarn

To run using docker-compose you must have installed:

- docker
- docker-compose

## Setup

Assuming you will use docker-compose to run the project run the below:

```shell
docker-compose up --build
```

This will start a dev-webserver. You can also start it detached.

**Important**: If you want to run `docker-compose` on macOS using NFS storage please always
run `docker-compose -f docker-compose.yml -f docker-compose.macos.yml` instead of simply running `docker-compose`.

Example:
Do NOT run

```shell
docker-compose up --build
```

But always run:

```shell
docker-compose -f docker-compose.yml -f docker-compose.macos.yml up --build
```

## Access via browser
Navigate to `http://localhost:4200/`

## Troubleshooting

No known issues.
