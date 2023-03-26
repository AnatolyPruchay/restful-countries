import {ICountry} from '../types';
import {ICountryCard} from '../../../shared/types';

export const mapCountryInfo = (country: ICountry): ICountryCard => {
  return {
    img: country.flags.png,
    name: country.name,
    info: [
      {
        title: 'Population',
        description: country.population.toLocaleString(),
      },
      {
        title: 'Region',
        description: country.region,
      },
      {
        title: 'Capital',
        description: country.capital,
      },
    ],
  }
}