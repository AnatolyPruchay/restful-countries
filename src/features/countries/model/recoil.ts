import {atom, selector} from 'recoil';
import {CountriesRecoilState, ICountry} from '../types';
import {countriesService} from '../api/countriesService';
import {regionState, searchState} from '../../controls/model/recoil';

export const loadCountries = atom<CountriesRecoilState>({
  key: 'loadCountries',
  default: selector({
    key: 'loadCountries/Default',
    get: async () => {
      try {
        const result = await countriesService.getCountries();
        return {content: result, errorMessage: ''};
      } catch (e) {
        if (e instanceof Error) {
          return {content: [], errorMessage: e.message}
        }
        return {content: [], errorMessage: ''}
      }
    }
  }),
});

export const filteredCountryList = selector<ICountry[]>({
  key: 'filteredCountries',
  get: ({get}) => {
    const countries = get(loadCountries);
    return countries.content.filter((country) =>
      (country.name.toLowerCase().includes(get(searchState).toLowerCase()) &&
        country.region.includes(get(regionState))))
  }
});