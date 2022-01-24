import { Controller, Get, Param, ParseIntPipe, Put } from '@nestjs/common';
import { MovieDTO } from './movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor (private service: MoviesService) {}

    @Get() 
    getMovies() : Promise<MovieDTO[]> {
        return this.service.getMovies();
    }

    @Get(":id") 
    async getMovie(@Param("id", ParseIntPipe) theId: number)  {
        let allMovies = await this.service.getMovies();
        return allMovies.filter(movie => movie.id == theId);
    }

    @Get("/byName/:name") 
    async getMovieByName(@Param("name") name: string)  {
        let allMovies = await this.service.getMovies();
        return allMovies.filter(movie => movie.name == name);
    }

}
