import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { MovieDTO } from './movie.dto';

@Injectable()
export class MoviesService {
    
    async getMovies(): Promise<MovieDTO[]> {
        let response = await axios.get("https://api.tvmaze.com/shows");

        return response.data.map(movie => { 
            let movieDTO = new MovieDTO();
            movieDTO.id = movie.id;
            movieDTO.name = movie.name;
            return movieDTO;
        });
    }
}
