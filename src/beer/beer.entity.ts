import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { BeerType } from './beer-type.enum';

export class Beer {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsNotEmpty()
  @IsString()
  nomeCervejaria: string;

  @IsNotEmpty()
  @IsEnum(BeerType)
  tipo: BeerType;
}
