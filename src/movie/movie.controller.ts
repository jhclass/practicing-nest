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
  constructor(private readonly moviesService: MovieService) {}
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get("/:id")
  getOne(@Param("id") movieId: string): Movie {
    return this.moviesService.getOne(movieId);
  }
  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }
  @Delete("/:id")
  remove(@Param("id") movieId: string) {
    return this.moviesService.deleteOne(movieId);
  }
  @Patch("/:id")
  patch(@Param("id") id: string, @Body() updateData) {
    return {
      updateMovie: id,
      ...updateData,
    };
  }
}
