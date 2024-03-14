import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "type_incident" })
export class TypeIncident {
    @PrimaryGeneratedColumn('uuid')
  ti_id: string;

  @Column({ type: 'varchar' })
  ti_name: string;

  @Column({ type: 'bool' })
  ti_estatus: boolean;
}
