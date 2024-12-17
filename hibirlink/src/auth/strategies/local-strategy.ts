import { PassportStrategy } from "@nestjs/passport"
import { Strategy } from "passport-local"
import { AuthService } from "../auth.service"
import { BadRequestException } from "@nestjs/common"
import { JwtService } from "@nestjs/jwt"

export class LocalStrategy extends PassportStrategy(Strategy){
  constructor(
    private readonly authService: AuthService,
    private readonly jwtService: JwtService,
  ){
    super({
      usernameField: 'email'
    })
  }

  async validate(email: string, password: string){
    const user = await this.authService.validate(email, password)
    if (!user){
      throw new BadRequestException('invalid credential')
    }
    const payload = {sub: user.id, email}
    const accessToken = await this.jwtService.signAsync(payload)

    return {
      userId: user.id,
      email,
      accessToken
    }
    
  }

}