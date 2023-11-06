// create-user.input.ts

import { IsNotEmpty, IsString, IsEmail } from "class-validator"

export class UpdateUserInput {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsString()
  surname: string

  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  password: string
}
