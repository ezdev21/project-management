import { Body, Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService:JwtService,private userService:UsersService){}

  async signUp(@Body() createAuthDto){
    return createAuthDto
    //return this.prisma.user.create({data:createAuthDto})
  }

  async logIn(email:string,password:string){
    const user = await this.prisma.user.findUnique({ where: { email: email } })
    if (!user || user.password != password) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return {
      token: this.jwtService.sign({ userId: user.id }),
    };
  }

}