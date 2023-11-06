import { UpdateUserInput } from "./dto/inputs/update-user.input"
import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { UserEntity } from "@shared/entities/user/user.entity"
import { IUser } from "@shared/models/user/user"
import * as bcrypt from "bcrypt"
import { CreateUserInput } from "./dto/inputs/create-user.input"

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  public async create(createUserInput: CreateUserInput): Promise<UserEntity> {
    createUserInput.password = await bcrypt.hash(createUserInput.password, 10)

    return await this.userRepository.save(createUserInput)
  }

  public async getAll(): Promise<IUser[]> {
    return await this.userRepository.find()
  }

  public async getById(id: number): Promise<IUser> {
    return await this.userRepository.findOne({
      where: {
        id: id
      }
    })
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    if (updateUserInput.password) {
      updateUserInput.password = await bcrypt.hash(updateUserInput.password, 10)
    }

    return await this.userRepository.save({ ...{ id: id }, ...updateUserInput })
  }

  public async delete(id: number) {
    return await this.userRepository.delete(id)
  }
}
