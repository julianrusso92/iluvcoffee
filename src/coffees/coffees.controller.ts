import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  // findAll(@Res() response) {
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;

    return this.coffeesService.findAll();

    // return `This action returns all coffees. Limit ${limit} offset ${offset}`;

    // response.status(200).send('This action returns all coffees');
    //It should be use with care. With this approach you lost compatibility with nestJS like
    //Standard response handling, Interceptors and @HttpCode() decorator
    //So is a best practice use Nest standard approach when dealing with responses
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(id);
  }

  @Post()
  // @HttpCode(HttpStatus.GONE)
  // create(@Body('name') body) {
  create(@Body() body) {
    return this.coffeesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.coffeesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(id);
  }
}