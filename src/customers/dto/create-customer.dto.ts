import { ApiProperty } from '@nestjs/swagger';
import { IsEmail } from 'class-validator';

export class CreateCustomerDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;
  @ApiProperty()
  phone: string;
}
