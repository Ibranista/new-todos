import { IsIn, IsNumber, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsString()
  requestName: string;

  @IsString()
  @IsIn(['house', 'cable-guy'])
  description: string;
  // @IsNumber()
  // payment: number;
  // isCompleted: boolean;
}
