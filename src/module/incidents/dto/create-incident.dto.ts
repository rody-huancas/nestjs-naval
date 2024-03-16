import { IsString, IsUUID, IsNotEmpty, IsDate } from 'class-validator';

export class CreateIncidentDto {
  @IsString()
  @IsNotEmpty()
  in_description: string;

  @IsUUID()
  @IsNotEmpty()
  in_iduser: string;

  @IsUUID()
  @IsNotEmpty()
  in_idtypein: string;

  @IsString()
  @IsNotEmpty()
  in_date: string;

  @IsString()
  @IsNotEmpty()
  in_site: string;

  @IsUUID()
  @IsNotEmpty()
  in_idcomp: string;
}
