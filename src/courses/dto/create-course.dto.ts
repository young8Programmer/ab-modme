import { IsString, IsDecimal, IsNotEmpty, MinLength } from 'class-validator';

export class CreateCourseDto {
// API response formatini yaxshilash
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDecimal()
  @IsNotEmpty()
  price: number;
}