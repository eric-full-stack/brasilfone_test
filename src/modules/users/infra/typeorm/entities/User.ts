import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
} from 'typeorm';
import { Exclude } from 'class-transformer';


@Entity('users')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;
 
}
