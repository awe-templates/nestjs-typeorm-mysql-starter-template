import { IsNotEmpty, IsNumber } from "class-validator"

export class DeleteUserInput {
  @IsNotEmpty()
  @IsNumber()
  id!: string
}
