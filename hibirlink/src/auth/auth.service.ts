import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { compare, hash } from 'bcrypt';
import { create } from 'domain';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dtos/login.dto';
import { Http2ServerRequest } from 'http2';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService
  ){}
  async signup(createUserDto: CreateUserDto){
    const hashPassword = await hash(createUserDto.password, 10)
    createUserDto.password = hashPassword 
    const newUser = await this.usersService.create(createUserDto)

    return newUser
  }

  async signin(logInDto: LoginDto){
    const foundUser = await this.usersService.findByEmail(logInDto.email)
    if (!foundUser){
      throw new BadRequestException("invalid credentials")
    }

    const passwordMatch = await compare(logInDto.password, foundUser.password)
    if (!passwordMatch){
      throw new BadRequestException("invalid credentials")
    }

  }

  async validate(email: string, password: string){
    const foundUser = await this.usersService.findByEmail(email)
    if (!foundUser){
      return null
    }
    const passwordMatch = await compare(password, foundUser.password)
    if (!passwordMatch){
      return null
    }

    return foundUser
  }
}
