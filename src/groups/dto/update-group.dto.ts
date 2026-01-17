import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupDto } from './create-group.dto';
// kod uslubini yaxshilash
// kod strukturasini yaxshilash

export class UpdateGroupDto extends PartialType(CreateGroupDto) {}
