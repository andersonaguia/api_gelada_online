import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { BeerModule } from './beer/beer.module';
import { TransformResponseInterceptor } from './core/http/transform-response-interceptor';
import { Database } from './database/database';

@Module({
  imports: [BeerModule],
  controllers: [],
  providers: [
    Database,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformResponseInterceptor,
    },
  ],
})
export class AppModule {}
