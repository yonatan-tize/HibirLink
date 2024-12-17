import { IsEmail, IsNotEmpty, IsString, Max, Min } from "class-validator"
export class CreateUserDto{

  @IsString()
  @IsNotEmpty()
  username: string

  @IsEmail()
  @IsNotEmpty()
  email: string

  @IsString()
  @Min(6)
  @Max(20)
  password: string
}