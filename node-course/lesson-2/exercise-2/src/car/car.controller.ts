import { Controller, Get } from '@nestjs/common';
import { car } from '@prisma/client';
import { CarService } from './car.service';

@Controller('car')
export class CarController {
    constructor (private service: CarService) {}

    @Get()
    async getCars(): Promise<car[]> {
        return await this.service.getCars();
    }
}
