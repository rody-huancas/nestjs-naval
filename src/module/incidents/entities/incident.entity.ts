import { Company } from 'src/module/companies/entities/company.entity';
import { TypeIncident } from 'src/module/type-incidents/entities/type-incident.entity';
import { User } from 'src/module/users/entities/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity({ name: 'incident' })
export class Incident {
  @PrimaryGeneratedColumn('uuid')
  in_id: string;

  @Column({ type: 'varchar', unique: true })
  in_description: string;

  
  @Column({ type: 'string', default: true })
  in_date: string;
  
  @Column({ type: 'string', default: true })
  in_site: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'in_iduser' })
  user: User;

  @ManyToOne(() => TypeIncident)
  @JoinColumn({ name: 'in_idtypein' })
  typeIncident: TypeIncident;

  @ManyToOne(() => Company)
  @JoinColumn({ name: 'in_idcomp' })
  company: Company;
}
