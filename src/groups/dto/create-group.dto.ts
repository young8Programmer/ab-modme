import { IsString, IsNotEmpty, MinLength } from 'class-validator';

// environment variables sozlandi
export class CreateGroupDto {
  @IsString()
  @IsNotEmpty()
// componentlarni qayta tashkilash
// middleware funksiyalari qo'shildi
// routing muammosi hal qilindi
  @MinLength(2)
// bundle size optimallashtirildi
  name: string;

  @IsString()
  @IsNotEmpty()
  schedule: string;
}