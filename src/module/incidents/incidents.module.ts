import { Module } from '@nestjs/common';
import { IncidentsService } from './incidents.service';
import { IncidentsController } from './incidents.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Incident } from './entities/incident.entity';
import { UsersModule } from '../users/users.module';
import { CompaniesModule } from '../companies/companies.module';
import { TypeIncidentsModule } from '../type-incidents/type-incidents.module';

@Module({
  controllers: [IncidentsController],
  providers: [IncidentsService],
  imports: [
    TypeOrmModule.forFeature([Incident]),
    UsersModule,
    CompaniesModule,
    TypeIncidentsModule,
  ],
  exports: [TypeOrmModule],
})
export class IncidentsModule {}
