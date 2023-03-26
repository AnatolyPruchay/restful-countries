import {BASE_URL, RequestService, requestService} from '../../../shared';
import {ICountryInfo} from '../types';

export class CountryDetailsService {
  readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public async getCountryByName(name: string): Promise<ICountryInfo[]> {
    try {
      return this.requestService
        .GET(`${BASE_URL}name/${name}`);
    } catch (err) {
      console.error(`Ошибка получения данных по стране: ${err}`);
      throw err;
    }
  }

  public async getNeighborsByCodes(codes: string[]): Promise<ICountryInfo[]> {
    try {
      return this.requestService
        .GET(`${BASE_URL}alpha?codes=${codes.join(',')}`);
    } catch (err) {
      console.error(`Ошибка получения данных о соседних странах: ${err}`);
      throw err;
    }
  }
}

export const countryDetailsService = new CountryDetailsService(
  requestService
);