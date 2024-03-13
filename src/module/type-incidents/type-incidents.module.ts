import { Module } from '@nestjs/common';
import { TypeIncidentsService } from './type-incidents.service';
import { TypeIncidentsController } from './type-incidents.controller';

@Module({
  controllers: [TypeIncidentsController],
  providers: [TypeIncidentsService],
})
export class TypeIncidentsModule {}
