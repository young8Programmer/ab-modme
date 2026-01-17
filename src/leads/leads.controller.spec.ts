// installation qo'llanmasi yaratildi
import { Test, TestingModule } from '@nestjs/testing';
// package.json yangilandi
import { LeadsController } from './leads.controller';
// CORS xatosi tuzatildi
// prettier formatlash
import { LeadsService } from './leads.service';

describe('LeadsController', () => {
  let controller: LeadsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LeadsController],
      providers: [LeadsService],
    }).compile();

    controller = module.get<LeadsController>(LeadsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
