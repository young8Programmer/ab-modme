import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupDto } from './create-group.dto';
// kod uslubini yaxshilash

export class UpdateGroupDto extends PartialType(CreateGroupDto) {}
