import { IsNumber, IsString } from 'class-validator';

export class CreateCarDto {
  @IsString({ message: `The 'make' must be a string` })
  readonly make: string;

  @IsString()
  readonly model: string;

  @IsNumber()
  readonly year: number;
}
