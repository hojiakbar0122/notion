import { Body, Controller, HttpCode, HttpStatus, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { SignInDto } from './dto/sign-in.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("sign-up")
  @UseInterceptors(FileInterceptor("image"))
  signUp(@Body() createUserDto:CreateUserDto, @UploadedFile() image:any){
    return this.authService.signUp(createUserDto, image)
  }

  @HttpCode(HttpStatus.OK)
  @Post("sign-in")
  signIn(@Body() signInDto:SignInDto){
    return this.authService.signIn(signInDto)
  }
}
