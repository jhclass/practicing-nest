
import { PartialType } from "@nestjs/mapped-types/dist";
import { CreateMovieDto } from "./create-movie.dto";
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}
