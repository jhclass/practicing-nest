import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
} from "@nestjs/common";
import { MovieService } from "./movie.service";
import { Movie } from "./entities/movie.entity";
import { CreateMovieDto } from "./dto/create-movie.dto";

@Controller("movie")
export class MovieController {
  constructor(private readonly movieService: MovieService) {}
  @Get()
  getAll() {
    return this.movieService.getAll();
  }
  @Get("/:id")
  getOne(@Param("id") movieId: number): Movie {
    console.log(typeof movieId);
    return this.movieService.getOne(movieId);
  }
  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.movieService.create(movieData);
  }
  @Delete("/:id")
  remove(@Param("id") movieId: number) {
    return this.movieService.deleteOne(movieId);
  }
  @Patch("/:id")
  patch(@Param("id") movieId: number, @Body() updateData) {
    return this.movieService.update(movieId, updateData);
  }
}
