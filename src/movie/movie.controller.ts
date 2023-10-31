import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Delete,
  Patch,
  Body,
} from '@nestjs/common';

@Controller('movie')
export class MovieController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }
  @Get('/:id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return `this will return one movie id : ${id}`;
  }
  @Post()
  create(@Body() movieData) {
    console.log(movieData);
    //return 'This will create a movie';
    return movieData;
  }
  @Delete('/:id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return `This will delete a movie with the id:${id}`;
  }
  @Patch('/:id')
  patch(@Param('id') id: string, @Body() updateData) {
    return {
      updateMovie: id,
      ...updateData,
    };
  }

  @Get('/search')
  search() {
    return `We are searching for a movie with a title`;
  }
}
