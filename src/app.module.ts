import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProvincesController } from './http/controllers/provinces.controller';

@Module({
  imports: [],
  controllers: [AppController, ProvincesController],
  providers: [AppService],
})
export class AppModule {}
