import { IsString, IsBoolean } from 'class-validator';

export class CreateTypeIncidentDto {
  @IsString()
  ti_name: string;

  @IsBoolean()
  ti_estatus: boolean;
}
