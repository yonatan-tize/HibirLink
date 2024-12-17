import { Injectable } from '@nestjs/common';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dtos/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>
  ){}

  async create(createUserDto: CreateUserDto){
    const user = this.usersRepository.create(createUserDto)
    return await this.usersRepository.save(user)
  }

  async findByEmail(email: string){
    const user = await this.usersRepository.findOne({
      where:{
        email
      }
    });

    return user
  }

  async findById(id: string){
    const user = await this.usersRepository.findOne({
      where:{
        id
      }
    });

    return user
  }
}
