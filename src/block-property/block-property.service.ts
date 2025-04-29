import { Injectable } from '@nestjs/common';
import { CreateBlockPropertyDto } from './dto/create-block-property.dto';
import { UpdateBlockPropertyDto } from './dto/update-block-property.dto';
import { InjectModel } from '@nestjs/sequelize';
import { BlockProperty } from './models/block-property.model';

@Injectable()
export class BlockPropertyService {
  constructor(@InjectModel(BlockProperty) private blockPropertyModel:typeof BlockProperty){}

  create(createBlockPropertyDto: CreateBlockPropertyDto) {
    return this.blockPropertyModel.create(createBlockPropertyDto);
  }

  findAll() {
    return this.blockPropertyModel.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} blockProperty`;
  }

  update(id: number, updateBlockPropertyDto: UpdateBlockPropertyDto) {
    return `This action updates a #${id} blockProperty`;
  }

  remove(id: number) {
    return `This action removes a #${id} blockProperty`;
  }
}
