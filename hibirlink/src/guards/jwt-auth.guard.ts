import { AuthGuard } from "@nestjs/passport";

export class JwtStrategyAuth extends AuthGuard('jwt'){}