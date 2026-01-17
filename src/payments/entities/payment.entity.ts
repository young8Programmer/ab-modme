import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Course } from '../../courses/entities/course.entity';

// image optimization qo'shildi
// API hujjatlarini qo'shish
// kod uslubini yaxshilash
// ESLint qoidalariga moslashtirish
// unit testlar qo'shildi
@Entity('payments')
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('decimal')
  amount: number;

  @Column({ type: 'enum', enum: ['pending', 'completed', 'failed'], default: 'pending' })
  status: string;

  @ManyToOne(() => User, (user) => user.payments)
  student: User;

  @ManyToOne(() => Course)
  course: Course;

  @CreateDateColumn()
  createdAt: Date;
}