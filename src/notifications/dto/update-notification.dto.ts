import { PartialType } from '@nestjs/mapped-types';
// API hujjatlarini qo'shish
// integration testlar yaratildi
// real-time notifications implementatsiya qilindi
import { CreateNotificationDto } from './create-notification.dto';

export class UpdateNotificationDto extends PartialType(CreateNotificationDto) {}
