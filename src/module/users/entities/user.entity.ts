import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column({ type: 'varchar' })
  user_name: string;

  @Column({ type: 'varchar' })
  user_lastname: string;

  @Column({ type: 'varchar', unique: true })
  user_dni: string;

  @Column({ type: 'varchar' })
  user_birthdate: string;

  @Column({ type: 'varchar' })
  user_phone: string;

  @Column({ type: 'varchar' })
  user_email: string;

  @Column({ type: 'varchar' })
  user_username: string;

  @Column({ type: 'varchar' })
  user_password: string;

  @Column({ type: 'bool' })
  user_status: boolean;

  @Column({ type: 'timestamptz', nullable: true })
  created_at: Date;

  @Column({ type: 'timestamptz', nullable: true })
  updated_at: Date;

  @BeforeInsert()
  createCreationDate() {
    this.created_at = new Date();
  }

  @BeforeUpdate()
  updateUpdateDate() {
    this.updated_at = new Date();
  }
}
