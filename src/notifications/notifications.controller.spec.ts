// database querylarni optimallashtirish
import { Test, TestingModule } from '@nestjs/testing';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
// prettier formatlash

// unit testlar qo'shildi
describe('NotificationsController', () => {
  let controller: NotificationsController;

// kod strukturasini yaxshilash
  beforeEach(async () => {
// build konfiguratsiyasi sozlandi
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NotificationsController],
      providers: [NotificationsService],
    }).compile();

    controller = module.get<NotificationsController>(NotificationsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
