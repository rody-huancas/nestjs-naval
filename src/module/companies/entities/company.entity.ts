import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'company' })
export class Company {
  @PrimaryGeneratedColumn('uuid')
  co_id: string;

  @Column({ type: 'varchar', unique: true })
  co_name: string;

  @Column({ type: 'varchar', unique: true })
  co_ruc: string;

  @Column({ type: 'varchar'})
  co_address: string;

  @Column({ type: 'varchar'})
  co_phone: string;

  @Column({ type: 'varchar'})
  co_email: string;
}
