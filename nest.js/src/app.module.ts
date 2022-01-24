import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetsController } from './pets/pets.controller';
import { PetsService } from './pets/pets.service';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { RequestCounterMiddleware } from './request-counter.middleware';

@Module({
  imports: [],
  controllers: [AppController, PetsController, MoviesController],
  providers: [AppService, PetsService, MoviesService],
})
export class AppModule {

  configure(consumer: MiddlewareConsumer) {
    
    consumer.apply(RequestCounterMiddleware).forRoutes(PetsController);

    consumer.apply(RequestCounterMiddleware).forRoutes(
      { path: 'movies', method: RequestMethod.GET },
      { path: 'movies/:id', method: RequestMethod.GET },
      );

  }

}
