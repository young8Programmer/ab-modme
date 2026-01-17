import { PartialType } from '@nestjs/mapped-types';
// real-time notifications implementatsiya qilindi
import { CreateNotificationDto } from './create-notification.dto';

export class UpdateNotificationDto extends PartialType(CreateNotificationDto) {}
