import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import *as bcrypt from "bcrypt"
import { User } from 'src/users/models/user.model';
import { SignInDto } from './dto/sign-in.dto';
import { FileService } from '../file/file.service';


@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService,
        private readonly jwtService:JwtService,
        private readonly fileService: FileService
        
    ) {}

    private async generateTokens(user:User){
        const payload = {
            id:user.id,
            email:user.email
        }
    
        return {token:this.jwtService.sign(payload)}
    }

    async signUp(createUserDto: CreateUserDto, image:any) {
        // const candidate = await this.userService.findByEmail(createUserDto.email);        
        
        // if (!candidate) {
        // //   throw new HttpException(
        // //     "Bunday emailli foydalanuvchi mavjud",
        // //     HttpStatus.BAD_REQUEST
        // //   );
        //   throw new BadRequestException("Bunday emailli foydalanuvchi mavjud")
        // }
        const hashedPassword = await bcrypt.hash(createUserDto.password, 7)
        createUserDto.password = hashedPassword
        const fileName = await this.fileService.saveFile(image)

        const newUser = await this.userService.create({...createUserDto, photo:fileName })
        return newUser
      }

      async signIn(signInDto:SignInDto){
    
        const user = await this.userService.findByEmail(signInDto.email)
        
        if(!user){
            throw new UnauthorizedException("Email yoki parol noto'g'ri")
        }
        const validPassword = await bcrypt.compare(signInDto.password, user.password)
        if(!validPassword){
            throw new UnauthorizedException("Email yoki parol noto'g'ri")
        }
    
        return this.generateTokens(user)
      }
}
