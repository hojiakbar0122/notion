import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { ActivateUserDto } from './dto/activate-user.dto';
import { FileService } from '../file/file.service';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userModel:typeof User,
  ){}

  async create(createUserDto: CreateUserDto) {
    return this.userModel.create(createUserDto);
  }

  findAll() {
    return this.userModel.findAll();
  }

  findByEmail(email: string) {
    return this.userModel.findOne({where: { email }});    
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async activateUser(activateUserDto:ActivateUserDto){
    const user = await this.findOne(activateUserDto.userId)
    if(!user){
      throw new NotFoundException("Bunday user mavjud emas")
    }

    // user.is_active = true
    // await user.save()

    return "Foydalanuvchi faollashtirildi"
  }
}
