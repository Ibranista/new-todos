import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { TodosModule } from 'src/todos/todos.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TodosModule, UsersModule],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
