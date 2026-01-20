// kod strukturasini yaxshilash
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
// API endpoints qo'shildi

// build konfiguratsiyasi sozlandi
// kod formatlash va tozalash
// dependencies yangilandi
export class UpdateUserDto extends PartialType(CreateUserDto) {}