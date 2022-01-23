import { Injectable } from '@nestjs/common';
import { car, PrismaClient } from '@prisma/client';

@Injectable()
export class CarService {

    async getCars(): Promise<car[]> {
        const prisma = new PrismaClient();
        return prisma.car.findMany();
    }
    
    async addCar(newCar: car): Promise<String> {
        console.log(`About to add ${newCar}`);

        const prisma = new PrismaClient();
        await prisma.car.create({
            data: newCar
        })

        return "Created";
    }

    async updateCar(carId: string, newCar: car): Promise<String> {
        const prisma = new PrismaClient();
        await prisma.car.update({
            where: {
                id : carId
            },
            data: newCar
        });

        return "Updated";

    }
    
    async deleteCar(carId: string): Promise<String> {
        const prisma = new PrismaClient();
        await prisma.car.delete({
            where: {
                id : carId
            }
        });
        return "Deleted";

    }


}
