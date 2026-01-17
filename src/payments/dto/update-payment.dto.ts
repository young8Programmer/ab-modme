// integration testlar yaratildi
import { PartialType } from '@nestjs/mapped-types';
// image optimization qo'shildi
import { CreatePaymentDto } from './create-payment.dto';

// installation qo'llanmasi yaratildi
// installation qo'llanmasi yaratildi
// kod uslubini yaxshilash
export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {}
