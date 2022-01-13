import { Controller, Get, Param } from '@nestjs/common';
import { PetsService } from './pets.service';

@Controller('pets')
export class PetsController {

    constructor(private readonly svc: PetsService) {};

    @Get()
    getAll() {
        return this.svc.getAll();
    }


    @Get(":name")
    getByName(@Param("name") name : string) {
        return this.svc.getByName(name);
    }

}
