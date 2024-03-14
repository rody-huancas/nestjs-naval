import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { TypeIncidentsService } from './type-incidents.service';
import { CreateTypeIncidentDto } from './dto/create-type-incident.dto';
import { UpdateTypeIncidentDto } from './dto/update-type-incident.dto';

@Controller('type-incidents')
export class TypeIncidentsController {
  constructor(private readonly typeIncidentsService: TypeIncidentsService) {}

  @Post()
  create(@Body() createTypeIncidentDto: CreateTypeIncidentDto) {
    return this.typeIncidentsService.create(createTypeIncidentDto);
  }

  @Get()
  findAll() {
    return this.typeIncidentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.typeIncidentsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateTypeIncidentDto: UpdateTypeIncidentDto) {
    return this.typeIncidentsService.update(id, updateTypeIncidentDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string) {
    return this.typeIncidentsService.remove(id);
  }
}
