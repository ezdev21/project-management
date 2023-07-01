import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    
  }

  findAll() {
    return
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
