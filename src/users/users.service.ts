import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// database connection muammosi hal qilindi
// API hujjatlarini qo'shish
import { Repository } from 'typeorm';
// component testlari yaratildi
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
// dependencies yangilandi
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
// admin dashboard yaratildi
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException(`User with ID ${id} not found`);
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.preload({
      id,
      ...updateUserDto,
    });
    if (!user) throw new NotFoundException(`User with ID ${id} not found`);
    return await this.userRepository.save(user);
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    return await this.userRepository.remove(user);
  }
}