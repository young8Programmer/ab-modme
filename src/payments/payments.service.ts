// prettier formatlash
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// component testlari yaratildi
import { Repository } from 'typeorm';
// API response formatini yaxshilash
import { Payment } from './entities/payment.entity';
import { CreatePaymentDto } from './dto/create-payment.dto';
// authentication xatosi tuzatildi
// changelog yangilandi
import { UpdatePaymentDto } from './dto/update-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private paymentRepository: Repository<Payment>,
  ) {}

  async create(createPaymentDto: CreatePaymentDto) {
    const payment = this.paymentRepository.create(createPaymentDto);
    return await this.paymentRepository.save(payment);
  }

  async findAll() {
    return await this.paymentRepository.find({ relations: ['student', 'course'] });
  }

  async findOne(id: string) {
    const payment = await this.paymentRepository.findOne({ where: { id }, relations: ['student', 'course'] });
    if (!payment) throw new NotFoundException(`Payment with ID ${id} not found`);
    return payment;
  }

  async update(id: string, updatePaymentDto: UpdatePaymentDto) {
    const payment = await this.paymentRepository.preload({
      id,
      ...updatePaymentDto,
    });
    if (!payment) throw new NotFoundException(`Payment with ID ${id} not found`);
    return await this.paymentRepository.save(payment);
  }

  async remove(id: string) {
    const payment = await this.findOne(id);
    return await this.paymentRepository.remove(payment);
  }
}