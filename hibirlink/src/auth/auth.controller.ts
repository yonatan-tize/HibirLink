import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';
import { LoginDto } from './dtos/login.dto';
import { LocalStrategyAuth } from 'src/guards/local-strategy.guard';
import { JwtStrategy } from './strategies/jwt-strategy';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) {}

  @Post('signup')
  signUp(@Body() createUserDto: CreateUserDto){
    return this.authService.signup(createUserDto)
  }

  @Post('signin')
  @UseGuards(LocalStrategyAuth)
  signIn(@Body() loginDto: LoginDto){
    return this.authService.signin(loginDto)
  }
}
