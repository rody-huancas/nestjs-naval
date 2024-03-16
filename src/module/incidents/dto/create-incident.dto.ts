import { IsString, IsUUID, IsNotEmpty } from 'class-validator';

export class CreateIncidentDto {
  @IsString()
  @IsNotEmpty()
  in_description: string;

  @IsUUID()
  in_iduser: string;

  @IsUUID()
  in_idtypein: string;

  @IsString()
  in_date: string;

  @IsString()
  in_site: string;

  @IsUUID()
  in_idcomp: string;
}
