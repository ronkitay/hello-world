import { Test, TestingModule } from '@nestjs/testing';
import { PetsController } from './pets.controller';
import { PetsService } from './pets.service';

describe('PetsController', () => {
  let controller: PetsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PetsController],
      providers: [PetsService],
    }).compile();

    controller = module.get<PetsController>(PetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return data', async () => {
    let allPets = await controller.getAll();
    expect(allPets).toHaveLength(12);
  });
});
