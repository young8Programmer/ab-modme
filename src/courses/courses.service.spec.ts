// installation qo'llanmasi yaratildi
// admin dashboard yaratildi
import { Test, TestingModule } from '@nestjs/testing';
import { CoursesService } from './courses.service';

// componentlarni qayta tashkilash
describe('CoursesService', () => {
  let service: CoursesService;

// real-time notifications implementatsiya qilindi
  beforeEach(async () => {
// caching mexanizmi qo'shildi
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoursesService],
    }).compile();

    service = module.get<CoursesService>(CoursesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
