import { Injectable, NotFoundException, BadRequestException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TypeIncident } from './entities/type-incident.entity';
import { CreateTypeIncidentDto } from './dto/create-type-incident.dto';
import { UpdateTypeIncidentDto } from './dto/update-type-incident.dto';
import { validate } from 'class-validator';

@Injectable()
export class TypeIncidentsService {
  constructor(
    @InjectRepository(TypeIncident)
    private readonly typeIncidentRepository: Repository<TypeIncident>,
  ) {}

  async create(createTypeIncidentDto: CreateTypeIncidentDto): Promise<TypeIncident> {
    const existingTypeIncident = await this.typeIncidentRepository.findOne({ where: { ti_name: createTypeIncidentDto.ti_name } });
    if (existingTypeIncident) {
      throw new ConflictException(`TypeIncident with name '${createTypeIncidentDto.ti_name}' already exists`);
    }

    const newTypeIncident = this.typeIncidentRepository.create(createTypeIncidentDto);

    const errors = await validate(newTypeIncident);
    if (errors.length > 0) {
      throw new BadRequestException(`Validation failed: ${errors.join(', ')}`);
    }

    return this.typeIncidentRepository.save(newTypeIncident);
  }

  findAll(): Promise<TypeIncident[]> {
    return this.typeIncidentRepository.find();
  }

  async findOne(id: string): Promise<TypeIncident> {
    const typeIncident = await this.typeIncidentRepository.findOne({ where: { ti_id: id } });
    if (!typeIncident) {
      throw new NotFoundException(`TypeIncident with id ${id} not found`);
    }
    return typeIncident;
  }

  async update(id: string, updateTypeIncidentDto: UpdateTypeIncidentDto): Promise<TypeIncident> {
    const typeIncident = await this.typeIncidentRepository.findOne({ where: { ti_id: id } });

    if (!typeIncident) {
      throw new NotFoundException(`TypeIncident with id ${id} not found`);
    }

    const existingTypeIncident = await this.typeIncidentRepository.findOne({ where: { ti_name: updateTypeIncidentDto.ti_name } });
    if (existingTypeIncident && existingTypeIncident.ti_id !== id) {
      throw new ConflictException(`TypeIncident with name '${updateTypeIncidentDto.ti_name}' already exists`);
    }

    Object.assign(typeIncident, updateTypeIncidentDto);

    const errors = await validate(typeIncident);
    if (errors.length > 0) {
      throw new BadRequestException(`Validation failed: ${errors.join(', ')}`);
    }

    return this.typeIncidentRepository.save(typeIncident);
  }


  async remove(id: string) {
    const typeIncident = await this.findOne(id);
    await this.typeIncidentRepository.remove(typeIncident);
    return { meessage: "Deleted" }
  }
}
