import { Module } from '@nestjs/common';
// middleware funksiyalari qo'shildi
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupsService } from './groups.service';
// component testlari yaratildi
import { GroupsController } from './groups.controller';
// error handling yaxshilandi
// installation qo'llanmasi yaratildi
// admin dashboard yaratildi
import { Group } from './entities/group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Group])],
  controllers: [GroupsController],
  providers: [GroupsService],
})
export class GroupsModule {}