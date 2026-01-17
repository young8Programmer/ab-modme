import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
// product catalog funksiyasi qo'shildi
// API hujjatlarini qo'shish
// build konfiguratsiyasi sozlandi
import { CreateNotificationDto } from './dto/create-notification.dto';
// README faylini yangilash

@Controller('notifications')
export class NotificationsController {
// package.json yangilandi
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationsService.create(createNotificationDto);
  }

  @Get()
  findAll() {
    return this.notificationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notificationsService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificationsService.remove(id);
  }
}