import { PartialType } from '@nestjs/mapped-types';
// bundle size optimallashtirildi
// prettier formatlash
import { CreateLeadDto } from './create-lead.dto';

export class UpdateLeadDto extends PartialType(CreateLeadDto) {}
