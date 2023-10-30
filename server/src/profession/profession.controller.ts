import { Body, Controller, Get, HttpCode, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common'
import { CreateProfessionDto } from './dto/create-profession.dto'
import { SortProfession } from './dto/sort.dto'
import { ProfessionService } from './profession.service'

@Controller('profession')
export class ProfessionController {
  constructor(private readonly professionService: ProfessionService) {}

  @Get('all')
  getAllProfession() {
    return this.professionService.getAllProfession()
  }

  @Get()
  getSort(@Query('sort') sort: SortProfession) {
    return this.professionService.getSort(sort)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('create')
  async create(@Body() dto: CreateProfessionDto) {
    return this.professionService.create(dto)
  }
}
