import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from 'src/module/companies/entities/company.entity';
import { TypeIncident } from 'src/module/type-incidents/entities/type-incident.entity';
import { User } from 'src/module/users/entities/user.entity';
import { Repository } from 'typeorm';
import { Incident } from './entities/incident.entity';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { UpdateIncidentDto } from './dto/update-incident.dto';


@Injectable()
export class IncidentsService {
  constructor(
    @InjectRepository(Incident)
    private readonly incidentRepository: Repository<Incident>,
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
    @InjectRepository(TypeIncident)
    private readonly typeIncidentRepository: Repository<TypeIncident>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createIncidentDto: CreateIncidentDto): Promise<Incident> {
    const { in_description, in_iduser, in_idtypein, in_date, in_site, in_idcomp } = createIncidentDto;

    // Verificar si el usuario existe
    const user = await this.userRepository.findOne({where: {user_id: in_iduser}});
    if (!user) {
      throw new NotFoundException(`User with id ${in_iduser} not found`);
    }

    // Verificar si el tipo de incidente existe
    const typeIncident = await this.typeIncidentRepository.findOne({where: { ti_id: in_idtypein }});
    if (!typeIncident) {
      throw new NotFoundException(`TypeIncident with id ${in_idtypein} not found`);
    }

    // Verificar si la compañía existe
    const company = await this.companyRepository.findOne({ where: { co_id: in_idcomp } });
    if (!company) {
      throw new NotFoundException(`Company with id ${in_idcomp} not found`);
    }

    const newIncident = this.incidentRepository.create({
      in_description,
      user,
      type_incident: typeIncident,
      in_date,
      in_site,
      company,
    });

    return this.incidentRepository.save(newIncident);
  }

  async findAll(): Promise<Incident[]> {
    return this.incidentRepository.find();
  }

  async findOne(id: string): Promise<Incident> {
    const incident = await this.incidentRepository.findOne({where: { in_id: id }});
    if (!incident) {
      throw new NotFoundException(`Incident with id ${id} not found`);
    }
    return incident;
  }

  async update(id: string, updateIncidentDto: UpdateIncidentDto): Promise<Incident> {
    const { in_iduser, in_idtypein, in_date, in_site, in_idcomp } = updateIncidentDto;

    const incident = await this.findOne(id);

    if (in_iduser) {
      const user = await this.userRepository.findOne({where: {user_id: in_iduser}});
      if (!user) {
        throw new NotFoundException(`User with id ${in_iduser} not found`);
      }
      incident.user = user;
    }

    if (in_idtypein) {
      const typeIncident = await this.typeIncidentRepository.findOne({where: {ti_id: in_idtypein}});
      if (!typeIncident) {
        throw new NotFoundException(`TypeIncident with id ${in_idtypein} not found`);
      }
      incident.type_incident = typeIncident;
    }

    if (in_date) {
      incident.in_date = in_date;
    }

    if (in_site) {
      incident.in_site = in_site;
    }

    if (in_idcomp) {
      const company = await this.companyRepository.findOne({ where: {co_id: in_idcomp} });
      if (!company) {
        throw new NotFoundException(`Company with id ${in_idcomp} not found`);
      }
      incident.company = company;
    }

    return this.incidentRepository.save(incident);
  }

  async remove(id: string): Promise<void> {
    const incident = await this.findOne(id);
    await this.incidentRepository.remove(incident);
  }
}
