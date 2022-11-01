import { NestResponse } from './../core/http/nest-response';
import { Body, Controller, HttpStatus, Get, Post, Query } from '@nestjs/common';
import { Beer } from './beer.entity';
import { BeerService } from './beer.service';
import { NestResponseBuilder } from 'src/core/http/nest-response-builder';

@Controller('beers')
export class BeerController {
  constructor(private service: BeerService) {}

  @Get()
  public async findBeers(@Query('page') page = 1, @Query('size') size = 20) {
    return await this.service.findBeers(page, size);
  }

  @Post()
  public async createBeer(@Body() beer: Beer): Promise<NestResponse> {
    const beerCreated = await this.service.createBeer(beer);
    return new NestResponseBuilder()
      .withStatus(HttpStatus.CREATED)
      .withHeaders({ Location: `beers/${beerCreated.nome}` })
      .withBody(beerCreated)
      .build();
  }
}
