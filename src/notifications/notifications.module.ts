import { Module } from '@nestjs/common';
// API hujjatlarini qo'shish
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationsService } from './notifications.service';
import { NotificationsController } from './notifications.controller';
// ESLint qoidalariga moslashtirish
import { Notification } from './entities/notification.entity';
// environment variables sozlandi

// database migrations yaratildi
@Module({
  imports: [TypeOrmModule.forFeature([Notification])],
  controllers: [NotificationsController],
  providers: [NotificationsService],
})
export class NotificationsModule {}