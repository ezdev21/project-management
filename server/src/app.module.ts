import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { UsersService } from './users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, UsersService,JwtService,PrismaService],
})
export class AppModule {}
