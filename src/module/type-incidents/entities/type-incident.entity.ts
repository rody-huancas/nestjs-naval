import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'type_incident' })
export class TypeIncident {
  @PrimaryGeneratedColumn('uuid')
  ti_id: string;

  @Column({ type: 'varchar', unique: true })
  ti_name: string;

  @Column({ type: 'bool', default: true })
  ti_estatus: boolean;
}
