# NestJS TypeORM MySQL Starter Template

![NestJS TypeORM MySQL Starter Template](https://banners-laravel-ready.vercel.app/NestJS%20TypeORM%20MySQL%20Starter%20Template.png?theme=light&packageManager=&packageName=&pattern=architect&style=style_1&description=Simple+NestJS+%2B+TypeORM+%2B+MySQL+starter+template&md=1&showWatermark=1&watermarkText=Awe+Templates&fontSize=100px&images=variable)

This is a simple starter template for [NestJS](https://nestjs.com/) projects. It includes only basic configs, [TypeORM](https://typeorm.io/), [MySQL](https://www.mysql.com/) and [PNPM](https://pnpm.io/). 

## 📦 Installation

### Setup .env File

Copy `.env.example` file and rename as `.env`. Then you can specify your configs.


```bash
pnpm install
```

### Running the app

```bash
# development
pnpm run start

# watch mode
pnpm run start:dev

# production mode
pnpm run start:prod
```

### Test

```bash
# unit tests
pnpm run test

# e2e tests
pnpm run test:e2e

# test coverage
pnpm run test:cov
```

### Example Commands

#### NestJS

Create a module

```bash
nest g mo app/modules/<module-name>
```

Create a controller

```bash
nest g co app/modules/<module-name>/<controller-name>
```

Create a service

```bash
nest g s app/modules/<module-name>/<service-name>
```

Create a pipe

```bash
nest g pi app/modules/<module-name>/<pipe-name>
```

Create a model

```bash
nest g cl app/shared/<model-name>
```

#### TypeORM

Create a migration

```bash
# create migration
npm run typeorm:direct migration:create src/database/migrations/Create<table-name>Table

# run migrations
npm run typeorm migration:run

# revert migrations
npm run typeorm migration:revert

# show status of migrations
npm run typeorm migration:show

# drop all migrations
npm run typeorm schema:drop
```
