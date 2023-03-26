import {NavigateFunction} from 'react-router-dom';
import {IRecoilReturnState} from '../../../shared'

export interface ICountryDetailsCard {
  name: string;
  navigate: NavigateFunction
}

export interface ICurrency {
  code: string;
  name: string;
  symbol: string;
}

export interface ILanguage {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface ICountryInfo {
  name: string;
  nativeName: string;
  flag: string;
  capital: string;
  population: number;
  region: string;
  subregion: string;
  topLevelDomain: string[];
  currencies: ICurrency[],
  languages: ILanguage[],
  borders: string[],
  push: NavigateFunction,
}

export interface ICountryDetails extends IRecoilReturnState<ICountryInfo[]> {
}

export interface INeighbors extends IRecoilReturnState<string[]> {
}