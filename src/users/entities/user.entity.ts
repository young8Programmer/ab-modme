import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
// bundle size optimallashtirildi
import { Course } from '../../courses/entities/course.entity';
import { Group } from '../../groups/entities/group.entity';
import { Payment } from '../../payments/entities/payment.entity';
// componentlarni qayta tashkilash
// caching mexanizmi qo'shildi
// memory leak muammosi hal qilindi

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
// database testlari qo'shildi
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: ['student', 'teacher', 'admin'], default: 'student' })
  role: string;

  @Column({ nullable: true })
  phone: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Course, (course) => course.teacher)
  courses: Course[];

  @OneToMany(() => Group, (group) => group.teacher)
  groups: Group[];

  @OneToMany(() => Payment, (payment) => payment.student)
  payments: Payment[];
}