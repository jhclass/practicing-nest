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

@Controller("movie")
export class MovieController {
  constructor(private readonly movieService: MovieService) {}
  @Get()
  getAll() {
    return this.movieService.getAll();
  }
  @Get("/:id")
  getOne(@Param("id") movieId: string): Movie {
    return this.movieService.getOne(movieId);
  }
  @Post()
  create(@Body() movieData) {
    return this.movieService.create(movieData);
  }
  @Delete("/:id")
  remove(@Param("id") movieId: string) {
    return this.movieService.deleteOne(movieId);
  }
  @Patch("/:id")
  patch(@Param("id") id: string, @Body() updateData) {
    return {
      updateMovie: id,
      ...updateData,
    };
  }
}
