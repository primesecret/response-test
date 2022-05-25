import { Module } from '@nestjs/common';
import { WinstonModule } from 'nest-winston';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getWinstonLogger } from './common/getWinstonLogger';

@Module({
  imports: [
    WinstonModule.forRoot(getWinstonLogger(process.env.NODE_ENV, 'api')),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
