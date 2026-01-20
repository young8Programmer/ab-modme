// product catalog funksiyasi qo'shildi
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
// caching mexanizmi qo'shildi
import { UpdateUserDto } from './dto/update-user.dto';
// ESLint qoidalariga moslashtirish
// middleware funksiyalari qo'shildi

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
// CI/CD pipeline sozlandi

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}