import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './entities/company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  async create(createCompanyDto: CreateCompanyDto): Promise<Company> {
    // Check if company with the same name or RUC already exists
    const existingCompany = await this.companyRepository.findOne({
      where: [{ co_name: createCompanyDto.co_name }, { co_ruc: createCompanyDto.co_ruc }],
    });
    if (existingCompany) {
      throw new ConflictException(`Company with name '${createCompanyDto.co_name}' or RUC '${createCompanyDto.co_ruc}' already exists`);
    }

    const newCompany = this.companyRepository.create(createCompanyDto);
    return this.companyRepository.save(newCompany);
  }

  findAll(): Promise<Company[]> {
    return this.companyRepository.find();
  }

  async findOne(id: string): Promise<Company> {
    const company = await this.companyRepository.findOne({ where: { co_id: id } });
    if (!company) {
      throw new NotFoundException(`Company with id ${id} not found`);
    }
    return company;
  }

  async update(id: string, updateCompanyDto: UpdateCompanyDto): Promise<Company> {
    const company = await this.findOne(id);

    const existingCompany = await this.companyRepository.findOne({
      where: [{ co_name: updateCompanyDto.co_name }, { co_ruc: updateCompanyDto.co_ruc }],
    });
    if (existingCompany && existingCompany.co_id !== id) {
      throw new ConflictException(`Company with name '${updateCompanyDto.co_name}' or RUC '${updateCompanyDto.co_ruc}' already exists`);
    }

    Object.assign(company, updateCompanyDto);
    return this.companyRepository.save(company);
  }

  async remove(id: string): Promise<void> {
    const company = await this.findOne(id);
    await this.companyRepository.remove(company);
  }
}