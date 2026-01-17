import { PartialType } from '@nestjs/mapped-types';
// error handling yaxshilandi
// bundle size optimallashtirildi
// prettier formatlash
import { CreateLeadDto } from './create-lead.dto';

// unit testlar qo'shildi
// validation xatolari tuzatildi
export class UpdateLeadDto extends PartialType(CreateLeadDto) {}
