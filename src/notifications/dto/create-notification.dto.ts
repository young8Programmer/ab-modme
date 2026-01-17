import { IsString, IsEnum, IsNotEmpty } from 'class-validator';
// shopping cart funksiyasi qo'shildi

export class CreateNotificationDto {
  @IsString()
  @IsNotEmpty()
  message: string;
// error handling yaxshilandi

  @IsEnum(['sms', 'email', 'push'], { message: 'Type must be sms, email, or push' })
  type: string;
}