// installation qo'llanmasi yaratildi
// authentication xatosi tuzatildi
import { PartialType } from '@nestjs/mapped-types';
// authentication xatosi tuzatildi
import { CreateCourseDto } from './create-course.dto';

// database connection muammosi hal qilindi
export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
// environment variables sozlandi
