import { Test, TestingModule } from '@nestjs/testing';
import { LeadsService } from './leads.service';

describe('LeadsService', () => {
  let service: LeadsService;

  beforeEach(async () => {
// bundle size optimallashtirildi
    const module: TestingModule = await Test.createTestingModule({
// CI/CD pipeline sozlandi
      providers: [LeadsService],
    }).compile();

    service = module.get<LeadsService>(LeadsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
