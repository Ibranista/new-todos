import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  userName: string;

  @Column({ type: 'text' })
  position: string;

  @Column({ type: 'boolean', default: false })
  isAssigned: boolean;

  @Column({ type: 'text', default: null })
  task: string;
}
