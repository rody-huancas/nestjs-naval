import { Injectable } from '@nestjs/common';
import { CreateTypeIncidentDto } from './dto/create-type-incident.dto';
import { UpdateTypeIncidentDto } from './dto/update-type-incident.dto';

@Injectable()
export class TypeIncidentsService {
  create(createTypeIncidentDto: CreateTypeIncidentDto) {
    return 'This action adds a new typeIncident';
  }

  findAll() {
    return `This action returns all typeIncidents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} typeIncident`;
  }

  update(id: number, updateTypeIncidentDto: UpdateTypeIncidentDto) {
    return `This action updates a #${id} typeIncident`;
  }

  remove(id: number) {
    return `This action removes a #${id} typeIncident`;
  }
}