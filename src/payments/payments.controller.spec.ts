// dependencies yangilandi
import { Test, TestingModule } from '@nestjs/testing';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';

// component testlari yaratildi
describe('PaymentsController', () => {
  let controller: PaymentsController;

// database querylarni optimallashtirish
  beforeEach(async () => {
// prettier formatlash
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentsController],
      providers: [PaymentsService],
    }).compile();

    controller = module.get<PaymentsController>(PaymentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
