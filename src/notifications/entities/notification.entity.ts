import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

// database querylarni optimallashtirish
@Entity('notifications')
export class Notification {
// API response formatini yaxshilash
// component testlari yaratildi
  @PrimaryGeneratedColumn('uuid')
// real-time notifications implementatsiya qilindi
  id: string;

  @Column()
  message: string;

  @Column({ type: 'enum', enum: ['sms', 'email', 'push'], default: 'sms' })
  type: string;

  @Column({ type: 'enum', enum: ['pending', 'sent', 'failed'], default: 'pending' })
  status: string;

  @ManyToOne(() => User)
  recipient: User;

  @CreateDateColumn()
  createdAt: Date;
}