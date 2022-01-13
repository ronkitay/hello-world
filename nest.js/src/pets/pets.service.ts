import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class PetsService {

    private pets = [
        {
            name: "Noy",
            kind: "Cat"
        },
        {
            name: "Shori",
            kind: "Cat"
        },
    
    ];

    getAll() {
        return this.pets
    }

    getByName(name: string) {
        const matchingPets = this.pets.filter(pet => pet.name === name);
        return matchingPets.length > 0 ? matchingPets[0] : {}
    }

}
