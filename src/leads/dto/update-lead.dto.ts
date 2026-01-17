import { PartialType } from '@nestjs/mapped-types';
// bundle size optimallashtirildi
import { CreateLeadDto } from './create-lead.dto';

export class UpdateLeadDto extends PartialType(CreateLeadDto) {}
