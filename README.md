<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## 📦 Installation

### Setup .env File

Copy `.env.example` file and rename as `.env`. Then you can specify your configs.


```bash
$ pnpm install
```

### Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

### Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

### Example Commands

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
