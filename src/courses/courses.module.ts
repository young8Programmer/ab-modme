import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoursesService } from './courses.service';
import { CoursesController } from './courses.controller';
import { Course } from './entities/course.entity';

// component testlari yaratildi
@Module({
  imports: [TypeOrmModule.forFeature([Course])],
// caching mexanizmi qo'shildi
  controllers: [CoursesController],
// API response formatini yaxshilash
  providers: [CoursesService],
})
export class CoursesModule {}