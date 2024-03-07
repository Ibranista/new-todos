import { IsIn, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  userName: string;

  @IsString()
  @IsIn(['house', 'cable-guy'])
  position: string;
}
