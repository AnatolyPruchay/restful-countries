import {RequestService, requestService, BASE_URL} from '../../../shared';
import {ICountry} from '../types';

export class CountriesService {
  readonly requestService: RequestService;

  constructor(requestService: RequestService) {
    this.requestService = requestService;
  }

  public async getCountries(): Promise<ICountry[]> {
    try {
      return this.requestService
        .GET(`${BASE_URL}all?fields=name,capital,flags,population,region`);
    } catch (err) {
      console.error(`Ошибка получения данных по странам: ${err}`);
      throw err;
    }
  }
}

export const countriesService = new CountriesService(requestService);