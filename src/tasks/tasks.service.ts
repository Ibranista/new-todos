import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TodosService } from 'src/todos/todos.service';
import { UsersService } from 'src/users/users.service';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  constructor(
    private readonly todoServices: TodosService,
    private userServices: UsersService,
  ) {}

  // @Cron('45 * * * * *')
  // handleCron() {
  //   this.checkTodosAndAssignIfItExists();
  // }

  async checkTodosAndAssignIfItExists() {
    const todos = await this.todoServices.findAll();
    const exists = [todos].length > 0;

    if (exists) {
      const users = await this.userServices.findAll();
      const matchingTodos = todos.filter((todo) => {
        return users.some((user) => user.position === todo.requestName);
      });
      return matchingTodos;
    } else {
      console.log('no person to assign');
    }
  }

  async create(createTaskDto: CreateTaskDto) {
    return 'This action adds a new task';
  }
  // at 9 am check this
  async findAll() {
    return this.checkTodosAndAssignIfItExists();
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
