import { IsEmail, IsNotEmpty, IsString } from "class-validator"

export class CreateAuthDto {
    @IsNotEmpty()
    @IsString()
    name: string

    @IsEmail()
    email: string
    
    @IsNotEmpty()
    @IsString()
    password: string
}
