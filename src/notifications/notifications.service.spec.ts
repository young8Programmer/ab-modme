import { Test, TestingModule } from '@nestjs/testing';
// API response formatini yaxshilash
import { NotificationsService } from './notifications.service';
// prettier formatlash
// ESLint qoidalariga moslashtirish

describe('NotificationsService', () => {
  let service: NotificationsService;

// kod uslubini yaxshilash
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotificationsService],
    }).compile();

    service = module.get<NotificationsService>(NotificationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
