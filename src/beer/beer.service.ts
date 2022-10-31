import { ConflictException, Injectable } from '@nestjs/common';
import { Database } from 'src/database/database';
import { Beer } from './beer.entity';

@Injectable()
export class BeerService {
  constructor(private database: Database) {}

  public async createBeer(beer: Beer): Promise<Beer> {
    const allBeers = await this.database.getBeers();
    const beerExist = allBeers.find((findbeer) => findbeer.nome === beer.nome);
    if (beerExist) {
      throw new ConflictException({
        statusCode: 409,
        message: 'Já existe outra cerveja cadastrada com o mesmo nome',
      });
    }
    await this.database.writeBeer(beer);
    return beer;
  }
}
