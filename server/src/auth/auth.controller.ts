import { Controller, Post, Body, Request, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Request() req):any{
    return this.authService.login(req.user)
  }

  @Post('signup')
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Get('protected')
  @UseGuards(JwtAuthGuard)
  getHello():string{
    return 'hello'
  }
}
