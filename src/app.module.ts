import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { ConfigModule } from "@nestjs/config"
import { UserModule } from "@modules/user/user.module"
import { TypeOrmModule } from "@nestjs/typeorm"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    UserModule,
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DATABASE_HOST || "localhost",
      port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
      username: process.env.DATABASE_USER || "root",
      password: process.env.DATABASE_PASSWORD || "",
      database: process.env.DATABASE_NAME || "nest_starter_typeorm_mysql",
      entities: [__dirname + "/app/**/*.entity{.ts,.js}"],
      synchronize: process.env.TYPEORM_SYNCHRONIZE === "true" || false
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
