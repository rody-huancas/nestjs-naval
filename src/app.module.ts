import { Module } from '@nestjs/common';
import { UsersModule } from './module/users/users.module';
import { IncidentsModule } from './module/incidents/incidents.module';
import { TypeIncidentsModule } from './module/type-incidents/type-incidents.module';
import { CompaniesModule } from './module/companies/companies.module';
import { UseEnvironmentVariables } from './config/env/env.enable';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from './config/env';

@Module({
  imports: [
    UseEnvironmentVariables,
    TypeOrmModule.forRoot({
      type            : 'postgres',
      host            : DB_HOST,
      port            : +DB_PORT,
      database        : DB_NAME,
      username        : DB_USERNAME,
      password        : DB_PASSWORD,
      autoLoadEntities: true,
      synchronize     : true,
    }),
    UsersModule,
    IncidentsModule,
    TypeIncidentsModule,
    CompaniesModule,
  ],
})
export class AppModule {}
