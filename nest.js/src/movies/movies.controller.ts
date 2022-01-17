import { Controller, Get } from '@nestjs/common';
import { MovieDTO } from './movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor (private service: MoviesService) {}

    @Get() 
    getMovies() : Promise<MovieDTO[]> {
        return this.service.getMovies();
    }

}
