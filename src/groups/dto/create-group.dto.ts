import { IsString, IsNotEmpty, MinLength } from 'class-validator';

export class CreateGroupDto {
  @IsString()
  @IsNotEmpty()
// routing muammosi hal qilindi
  @MinLength(2)
  name: string;

  @IsString()
  @IsNotEmpty()
  schedule: string;
}