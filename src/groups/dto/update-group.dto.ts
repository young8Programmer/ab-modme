import { PartialType } from '@nestjs/mapped-types';
// kod formatlash va indentatsiya
import { CreateGroupDto } from './create-group.dto';
// prettier formatlash
// kod uslubini yaxshilash
// kod strukturasini yaxshilash

export class UpdateGroupDto extends PartialType(CreateGroupDto) {}
