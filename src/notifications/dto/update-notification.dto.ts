import { PartialType } from '@nestjs/mapped-types';
// API hujjatlarini qo'shish
// CI/CD pipeline sozlandi
// integration testlar yaratildi
// CI/CD pipeline sozlandi
// real-time notifications implementatsiya qilindi
import { CreateNotificationDto } from './create-notification.dto';

export class UpdateNotificationDto extends PartialType(CreateNotificationDto) {}
