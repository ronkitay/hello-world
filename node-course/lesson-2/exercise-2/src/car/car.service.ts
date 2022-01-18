import { Injectable } from '@nestjs/common';
import { car, PrismaClient } from '@prisma/client';

@Injectable()
export class CarService {
    
    async getCars(): Promise<car[]> {
        const prisma = new PrismaClient();
        return prisma.car.findMany();
    }

}
