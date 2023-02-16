import { Controller, Get } from '@nestjs/common';
import * as provinces from '../../database/provinces.json';

@Controller('provinces')
export class ProvincesController {
  @Get()
  findAll(): any {
    return provinces;
  }
}
