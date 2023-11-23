import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  ValidationPipe,
  UsePipes,
  HttpCode
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorators'
import { CreateVacancy } from './dto/create.dto'
import { VacancyService } from './vacancy.service'
import { ResponsesDto } from './dto/responses.dto'
@Controller('vacancy')
export class VacancyController {
  constructor(private readonly vacancyService: VacancyService) {}

  @Get('ribbon')
  getRibbon(@Query('page') page: number) {
    return this.vacancyService.getRibbon(page)
  }

  @Get('ribbon/:id')
  getRibbonById(@Param('id') idEmployer: number) {
    return this.vacancyService.getRibbonById(idEmployer)
  }

  // @Get('vacancy/similar')
  // getSimilar(@Param('id') idEmployer: number) {
  //   return this.vacancyService.getSimilar(idEmployer)
  // }

  @Get('getTarif')
  getTarif() {
    return this.vacancyService.getTarif()
  }

  @Get('getById/:id')
  getById(@Param('id') idVacancy: number) {
    return this.vacancyService.getById(idVacancy)
  }

  @Get('getMyVacancies/:id')
  @Auth()
  getMyVacancies(@Param('id') idEmployer: number) {
    return this.vacancyService.getMyVacancies(idEmployer)
  }

  @Delete('deleteMyVacancy/:id')
  @Auth()
  deleteMyVacancy(@Param('id') idVacancy: number) {
    return this.vacancyService.deleteMyVacancy(idVacancy)
  }

  @Patch('unpublication/:id')
  @Auth()
  unpublication(@Param('id') idVacancy: number) {
    return this.vacancyService.unpublication(idVacancy)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('create')
  @Auth()
  create(@Body() dto: CreateVacancy) {
    return this.vacancyService.create(dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put('update/:id')
  @Auth()
  async updateVacancy(@Param('id') idVacancy: number, @Body() dto: CreateVacancy) {
    return this.vacancyService.updateVacancy(idVacancy, dto)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post('response')
  @Auth()
  async response(@Body() dto: ResponsesDto) {
    return this.vacancyService.response(dto)
  }

  @Get('getFavorites/:id')
  // @Auth()
  async getFavorites(@Param('id') userId: number) {
    return this.vacancyService.getFavorites(userId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth()
  @Post('createFavorite')
  async createFavorite(@Body() dto: ResponsesDto) {
    return this.vacancyService.createFavorite(dto)
  }

  @Auth()
  @Delete('deleteFavorite/:id')
  async deleteFavorite(@Param('id') idFavorite: number) {
    return this.vacancyService.deleteFavorite(idFavorite)
  }
}
