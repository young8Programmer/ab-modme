import { Test, TestingModule } from '@nestjs/testing';
import { PaymentsService } from './payments.service';

// installation qo'llanmasi yaratildi
describe('PaymentsService', () => {
  let service: PaymentsService;
// memory leak muammosi hal qilindi

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
// memory leak muammosi hal qilindi
// CI/CD pipeline sozlandi
// kod formatlash va indentatsiya
      providers: [PaymentsService],
    }).compile();

    service = module.get<PaymentsService>(PaymentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
