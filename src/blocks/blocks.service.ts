import { Injectable } from "@nestjs/common";
import { Block } from "./models/block.model";
import { CreateBlockDto } from "./dto/create-block.dto";
import { InjectModel } from "@nestjs/sequelize";
import { UpdateBlockDto } from "./dto/update-block.dto";

@Injectable()
export class BlocksService {
  constructor(@InjectModel(Block) private blockModel: typeof Block) {}

  create(createBlockDto: CreateBlockDto) {
    return this.blockModel.create(createBlockDto);
  }

  findAll() {
    return this.blockModel.findAll({include:{all:true}});
  }

  findOne(id: number) {
    return this.blockModel.findByPk(id);
  }

  update(id: number, updateBlockDto: UpdateBlockDto) {
    return this.blockModel.update(updateBlockDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.blockModel.destroy({ where: { id } });
  }
}
