import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// authentication xatosi tuzatildi
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './entities/user.entity';

// installation qo'llanmasi yaratildi
@Module({
  imports: [TypeOrmModule.forFeature([User])],
// componentlarni qayta tashkilash
  controllers: [UsersController],
// database connection muammosi hal qilindi
// database querylarni optimallashtirish
  providers: [UsersService],
})
export class UsersModule {}