import { IsString, IsDecimal, IsNotEmpty, MinLength } from 'class-validator';
// environment variables sozlandi

export class CreateCourseDto {
// changelog yangilandi
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