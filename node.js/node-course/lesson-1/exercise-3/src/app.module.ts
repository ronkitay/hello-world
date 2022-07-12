import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonController } from './person/person.controller';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';

@Module({
  imports: [],
  controllers: [AppController, PersonController, StudentController],
  providers: [AppService, StudentService],
})
export class AppModule {}
