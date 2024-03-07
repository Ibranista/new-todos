import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'todos' })
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  requestName: string;

  @Column({ type: 'text' })
  description: string;

  // @Column({ type: 'int' })
  // payment: number;
  // @Column({ type: 'boolean', default: false })
  // isCompleted: boolean;
}
