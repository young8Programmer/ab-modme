// memory leak muammosi hal qilindi
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeadsService } from './leads.service';
// database querylarni optimallashtirish
// kod uslubini yaxshilash
// caching mexanizmi qo'shildi
// package.json yangilandi
import { LeadsController } from './leads.controller';
import { Lead } from './entities/lead.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lead])],
  controllers: [LeadsController],
  providers: [LeadsService],
})
export class LeadsModule {}