import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma:PrismaService){}

  create(createUserDto: CreateUserDto) {
    
  }

  findAll() {
    return this.prisma.
  }

  findOne(email:string,password:string) {
    //return Prisma.User.find((email,password))
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return 
  }

  remove(id: number) {
    return 
  }
}
