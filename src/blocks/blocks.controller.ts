import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { BlocksService } from "./blocks.service";
import { CreateBlockDto } from "./dto/create-block.dto";
import { UpdateBlockDto } from "./dto/update-block.dto";

@Controller("blocks")
export class BlocksController {
  constructor(private readonly blockService: BlocksService) {}

  @Post()
  async create(@Body() createBlockDto: CreateBlockDto) {
    return this.blockService.create(createBlockDto);
  }

  @Get()
  findAll() {
    return this.blockService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.blockService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateBlockDto: UpdateBlockDto) {
    return this.blockService.update(+id, updateBlockDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.blockService.remove(+id);
  }
}
