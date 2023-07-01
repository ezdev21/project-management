import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from 'src/users/users.service';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UsersModule, PassportModule,JwtModule.register({
    secret:'secret',
    signOptions: {expiresIn: '7200s'}
  })],
  controllers: [AuthController],
  providers: [AuthService, UsersService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
