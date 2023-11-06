import { DataSource } from "typeorm"
import { TypeOrmModuleOptions } from "@nestjs/typeorm"
import { SnakeNamingStrategy } from "typeorm-naming-strategies"

export const typeOrmMySqlDbConfig = (): TypeOrmModuleOptions => ({
  type: "mysql",
  host: process.env.DATABASE_HOST || "localhost",
  port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  username: process.env.DATABASE_USER || "root",
  password: process.env.DATABASE_PASSWORD || "",
  database: process.env.DATABASE_NAME || "nest_starter_typeorm_mysql",
  entities: [__dirname + "/app/**/*.entity{.ts,.js}"],
  synchronize: process.env.TYPEORM_SYNCHRONIZE === "true" || false,
  namingStrategy: new SnakeNamingStrategy()
})

export const appDataSource = new DataSource({
  type: "mysql",
  host: process.env.DATABASE_HOST || "localhost",
  port: parseInt(process.env.DATABASE_PORT, 10) || 3306,
  username: process.env.DATABASE_USER || "root",
  password: process.env.DATABASE_PASSWORD || "",
  database: process.env.DATABASE_NAME || "nest_starter_typeorm_mysql",
  entities: [__dirname + "/app/**/*.entity{.ts,.js}"],
  synchronize: process.env.TYPEORM_SYNCHRONIZE === "true" || false,
  migrations: ["src/database/migrations/**/*.ts"]
})

appDataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!")
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err)
  })
