import { IsString, IsBoolean, IsOptional } from 'class-validator';

export class CreateTypeIncidentDto {
  @IsString()
  ti_name: string;

  @IsBoolean()
  @IsOptional()
  ti_estatus: boolean;
}
