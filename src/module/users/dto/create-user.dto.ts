import { IsString, IsNotEmpty, IsEmail, IsDate, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  user_name: string;

  @IsString()
  @IsNotEmpty()
  user_lastname: string;

  @IsString()
  @IsNotEmpty()
  user_dni: string;

  @IsString()
  @IsNotEmpty()
  user_birthdate: string;

  @IsString()
  @IsNotEmpty()
  user_phone: string;

  @IsEmail()
  @IsNotEmpty()
  user_email: string;

  @IsString()
  @IsNotEmpty()
  user_username: string;

  @IsString()
  @IsNotEmpty()
  user_password: string;

  @IsBoolean()
  @IsNotEmpty()
  user_status: boolean;
}
