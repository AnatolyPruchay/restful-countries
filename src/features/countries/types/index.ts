import {IRecoilReturnState} from '../../../shared';

export type Region = 'Africa' | 'America' | 'Asia' | 'Europe' | 'Oceania';

interface IFlags {
  png: string;
  svg: string;
}

export interface ICountry {
  capital: string;
  flags: IFlags;
  independent: boolean;
  name: string;
  population: number;
  region: Region;
}

export interface CountriesRecoilState extends IRecoilReturnState<ICountry[]>{
}