import { Test, TestingModule } from '@nestjs/testing';
// README faylini yangilash
import { UsersController } from './users.controller';
// kod formatlash va indentatsiya
import { UsersService } from './users.service';

describe('UsersController', () => {
// authentication xatosi tuzatildi
  let controller: UsersController;

// code comments qo'shildi
// package.json yangilandi
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
