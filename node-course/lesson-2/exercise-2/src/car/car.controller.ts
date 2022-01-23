import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { car } from '@prisma/client';
import { CarService } from './car.service';

@Controller('car')
export class CarController {
    constructor (private service: CarService) {}

    @Get()
    async getCars(): Promise<car[]> {
        return await this.service.getCars();
    }

    @Post()
    async addCar(@Body() newCar: car): Promise<String> {
        return await this.service.addCar(newCar);
    }

    @Put(":id")
    async updateCar(@Param("id") carId: string, @Body() newCar: car): Promise<String> {
        return await this.service.updateCar(carId, newCar);
    }

    @Delete(":id")
    async deleteCar(@Param("id") carId: string): Promise<String> {
        return await this.service.deleteCar(carId);
    }
}
