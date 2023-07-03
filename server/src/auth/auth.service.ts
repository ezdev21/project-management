import { ForbiddenException, Injectable, } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma:PrismaService,private userService: UsersService,private jwtService:JwtService){}
  
  async signUp(createAuthDto: CreateAuthDto):Promise<Tokens> {
    const hash = await this.hashData(createAuthDto.password)
    const newUser = this.prisma.user.create({
      data:{
        email:createAuthDto.email,
        hash
      }
    })
    const tokens = await this.getTokens(newUser.id,newUser.email)
    return tokens
  }

  async login(createAuthDto:CreateAuthDto){
    const user = this.prisma.user.findUnique({
      where:{
        email:createAuthDto.email,
      }
    })
    if(!user) throw new ForbiddenException('Invalid Credentials.')
    const passwordMatches = await bcrypt.compare(createAuthDto.email,user.hash)
    if(!passwordMatches) throw new ForbiddenException('Invalid Credentials.')
  }

  async logout(){
    
  }
}
