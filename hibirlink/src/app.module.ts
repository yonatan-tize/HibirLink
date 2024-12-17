import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CartsModule } from './carts/carts.module';
import { ProductsModule } from './products/products.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    JwtModule.registerAsync(
      {
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: async (config) =>({
          secret: config.get('JWT_SECRET'),
          signOptions: { expiresIn: '1d' },
        }),
        global: true
      }
    ),
    AuthModule, UsersModule, CartsModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
