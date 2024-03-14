import { IsString, IsNotEmpty, IsEmail, IsOptional } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  co_name: string;

  @IsString()
  @IsNotEmpty()
  co_ruc: string;

  @IsString()
  @IsOptional()
  co_address: string;

  @IsString()
  @IsOptional()
  co_phone: string;

  @IsEmail()
  @IsOptional()
  co_email: string;
}
