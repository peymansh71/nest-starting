import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ProvincesController } from './http/controllers/provinces.controller';

@Module({
  imports: [],
  controllers: [ProvincesController],
  providers: [AppService],
})
export class AppModule {}
