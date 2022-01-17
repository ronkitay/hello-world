import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsController } from './pets/pets.controller';
import { PetsService } from './pets/pets.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

@Module({
  imports: [],
  controllers: [AppController, PetsController, MoviesController],
  providers: [AppService, PetsService, MoviesService],
})
export class AppModule {}
