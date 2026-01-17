// installation qo'llanmasi yaratildi
import { Controller, Get } from '@nestjs/common';
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
