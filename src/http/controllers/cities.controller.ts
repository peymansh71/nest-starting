import { Controller, Get, Param } from '@nestjs/common';
import * as cities from './database/cities.json';

@Controller('cities')
export class CitiesController {
  @Get()
  findAll(): any {
    return cities;
  }

  @Get(':provinceId')
  findByProvinceId(@Param('provinceId') provinceId: string): any {
    const provinceCities = cities.filter(
      (city) => city.province_id === provinceId,
    );
    return provinceCities;
  }
}
