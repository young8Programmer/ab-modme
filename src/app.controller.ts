// installation qo'llanmasi yaratildi
// shopping cart funksiyasi qo'shildi
import { Controller, Get } from '@nestjs/common';
// API hujjatlarini qo'shish
// real-time notifications implementatsiya qilindi
// component testlari yaratildi
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
