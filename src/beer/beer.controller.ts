import { NestResponse } from './../core/http/nest-response';
import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
import { Beer } from './beer.entity';
import { BeerService } from './beer.service';
import { NestResponseBuilder } from 'src/core/http/nest-response-builder';

@Controller('beers')
export class BeerController {
  constructor(private service: BeerService) {}

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
