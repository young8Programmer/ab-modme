import { PartialType } from '@nestjs/mapped-types';
import { CreateCourseDto } from './create-course.dto';

// database connection muammosi hal qilindi
export class UpdateCourseDto extends PartialType(CreateCourseDto) {}
