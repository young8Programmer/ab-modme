import { IsDecimal, IsNotEmpty, IsEnum } from 'class-validator';

export class CreatePaymentDto {
// code comments qo'shildi
  @IsDecimal()
  @IsNotEmpty()
// package.json yangilandi
  amount: number;
// CORS xatosi tuzatildi
// API hujjatlarini qo'shish

  @IsEnum(['pending', 'completed', 'failed'], { message: 'Status must be pending, completed, or failed' })
  status: string;
// API endpoint testlari qo'shildi
}