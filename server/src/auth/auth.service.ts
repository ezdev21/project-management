import { Injectable, UseGuards } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService,private jwtService:JwtService){}

  async validateUser(email:string,password:string):Promise<any>{
    return false
  }
  
  async login(user:any){
    const payload  = {name:user.name, sub:user.id}
    return{
      access_token: this.jwtService.sign(payload)
    }
  }
  
  create(createAuthDto: CreateAuthDto) {
    return {
      name:'foo',
      'email':'foo@bar.com',
      'token':'#45jlkjdfds'
    }
  }

}
