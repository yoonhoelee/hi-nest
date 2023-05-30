import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/:id')
  getId(@Param('id') id: string): Movie {
    return this.moviesService.getOne(id);
  }

  @Delete('/:id')
  remove(@Param('id') id: string): boolean {
    return this.moviesService.deleteById(id);
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }
}
