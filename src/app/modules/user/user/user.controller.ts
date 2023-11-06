import { Controller, Get, Param, Post, Body, Delete, Put, Patch } from "@nestjs/common"
import { UserService } from "../user.service"
import { IUser } from "@shared/models/user/user"
import { CreateUserInput } from "../dto/inputs/create-user.input"
import { UpdateUserInput } from "../dto/inputs/update-user.input"

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async getAllUsers(): Promise<IUser[]> {
    return await this.userService.getAll()
  }

  @Get(":id")
  public async getUserById(@Param("id") id: number): Promise<IUser> {
    return await this.userService.getById(id)
  }

  @Post()
  public async createUser(@Body() createUserInput: CreateUserInput): Promise<any> {
    try {
      const user = await this.userService.create(createUserInput)

      return { success: true, data: user }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  @Put(":id")
  @Patch(":id")
  public async update(
    @Param("id") id: number,
    @Body() updateUserInput: UpdateUserInput
  ): Promise<any> {
    try {
      const user = await this.userService.update(id, updateUserInput)

      return { success: true, data: user }
    } catch (error) {
      return { success: false, error: error.message }
    }
  }

  @Delete()
  public async destroy(@Param("id") id: number): Promise<any> {
    const result = await this.userService.delete(id)

    return { success: result }
  }
}
