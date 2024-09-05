import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Users } from '../users/users.entity';

@Entity()
export class Reports {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: false })
  approved: boolean;

  @Column()
  price: number;

  @Column()
  make: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column()
  lat: number;

  @Column()
  lng: number;

  @Column()
  mileage: number;

  @ManyToOne(() => Users, (user) => user.reports)
  user: Users;
}
