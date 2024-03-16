import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Company } from 'src/module/companies/entities/company.entity';
import { TypeIncident } from 'src/module/type-incidents/entities/type-incident.entity';
import { User } from 'src/module/users/entities/user.entity';

@Entity({ name: 'incident' })
export class Incident {
  @PrimaryGeneratedColumn('uuid')
  in_id: string;

  @Column({ type: 'varchar', unique: true })
  in_description: string;

  @Column({ type: 'uuid' }) // id user
  in_iduser: string;

  @Column({ type: 'uuid'}) // id type incident
  in_idtypein: string;

  @Column({ type: 'varchar' })
  in_date: string;

  @Column({ type: 'varchar' })
  in_site: string;

  @Column({ type: 'uuid' }) // id company
  in_idcomp: string;

  // Relations
  @ManyToOne(() => User, { eager: true })
  @JoinColumn({ name: 'in_iduser' })
  user: User;

  @ManyToOne(() => TypeIncident, { eager: true })
  @JoinColumn({ name: 'in_idtypein' })
  type_incident: TypeIncident;

  @ManyToOne(() => Company, { eager: true })
  @JoinColumn({ name: 'in_idcomp' })
  company: Company;
}
