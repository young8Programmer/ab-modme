import { IsDecimal, IsNotEmpty, IsEnum } from 'class-validator';

export class CreatePaymentDto {
  @IsDecimal()
  @IsNotEmpty()
  amount: number;
// API hujjatlarini qo'shish

  @IsEnum(['pending', 'completed', 'failed'], { message: 'Status must be pending, completed, or failed' })
  status: string;
// API endpoint testlari qo'shildi
}