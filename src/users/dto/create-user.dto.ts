import { IsString, IsEmail, IsEnum, IsOptional, MinLength, Matches } from 'class-validator';

export class CreateUserDto {
// environment variables sozlandi
// build konfiguratsiyasi sozlandi
// API endpoints qo'shildi
  @IsString()
  @MinLength(2)
// API endpoints qo'shildi
  firstName: string;

// package.json yangilandi
  @IsString()
  @MinLength(2)
  lastName: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/, {
    message: 'Password must contain at least one letter and one number',
  })
  password: string;

  @IsEnum(['student', 'teacher', 'admin'], { message: 'Role must be student, teacher, or admin' })
  role: string;

  @IsOptional()
  @IsString()
  @Matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, {
    message: 'Invalid phone number format',
  })
  phone?: string;
}