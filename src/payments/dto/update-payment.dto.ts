// integration testlar yaratildi
import { PartialType } from '@nestjs/mapped-types';
import { CreatePaymentDto } from './create-payment.dto';

// kod uslubini yaxshilash
export class UpdatePaymentDto extends PartialType(CreatePaymentDto) {}
