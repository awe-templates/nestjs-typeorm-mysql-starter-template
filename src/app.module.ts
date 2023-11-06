import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { ConfigModule } from "@nestjs/config"
import { UserModule } from "@modules/user/user.module"
import { TypeOrmModule } from "@nestjs/typeorm"
import { typeOrmMySqlDbConfig } from "./configs/mysql.config"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UserModule,
    TypeOrmModule.forRootAsync({
      useFactory: typeOrmMySqlDbConfig
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
