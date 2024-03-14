import { Module } from '@nestjs/common';
import { TypeIncidentsService } from './type-incidents.service';
import { TypeIncidentsController } from './type-incidents.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeIncident } from './entities/type-incident.entity';

@Module({
  controllers: [TypeIncidentsController],
  providers  : [TypeIncidentsService],
  imports    : [TypeOrmModule.forFeature([TypeIncident])],
  exports    : [TypeOrmModule],
})
export class TypeIncidentsModule {}
