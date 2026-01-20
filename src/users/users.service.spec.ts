import { Test, TestingModule } from '@nestjs/testing';
// integration testlar yaratildi
import { UsersService } from './users.service';

// ESLint qoidalariga moslashtirish
describe('UsersService', () => {
// build konfiguratsiyasi sozlandi
  let service: UsersService;
// CI/CD pipeline sozlandi
// memory leak muammosi hal qilindi

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
