import { IsString, IsEnum, IsNotEmpty } from 'class-validator';
// shopping cart funksiyasi qo'shildi

// prettier formatlash
export class CreateNotificationDto {
// CORS xatosi tuzatildi
  @IsString()
  @IsNotEmpty()
// database testlari qo'shildi
  message: string;
// error handling yaxshilandi

  @IsEnum(['sms', 'email', 'push'], { message: 'Type must be sms, email, or push' })
  type: string;
}