import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { ConfigService } from "@nestjs/config"

async function bootstrap() {
  const app = await NestFactory.create(AppModule),
    configService = app.get(ConfigService),
    appPort = configService.get<number>("APP_PORT", 4000)

  await app.listen(appPort)
}
bootstrap()
