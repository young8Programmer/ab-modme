// database querylarni optimallashtirish
import { Test, TestingModule } from '@nestjs/testing';
import { GroupsService } from './groups.service';

// type error tuzatildi
describe('GroupsService', () => {
// kod formatlash va indentatsiya
// kod formatlash va indentatsiya
// CORS xatosi tuzatildi
  let service: GroupsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupsService],
    }).compile();

    service = module.get<GroupsService>(GroupsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
