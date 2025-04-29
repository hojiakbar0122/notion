import { Module } from '@nestjs/common';
import { BlocksController } from './blocks.controller';
import { BlocksService } from './blocks.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Block } from './models/block.model';

@Module({
  imports:[SequelizeModule.forFeature([Block])],
  controllers: [BlocksController],
  providers: [BlocksService]
})
export class BlocksModule {}
