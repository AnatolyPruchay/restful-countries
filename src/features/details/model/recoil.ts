import {selectorFamily} from 'recoil';
import {countryDetailsService} from '../api/countryDetailsService';
import {ICountryDetails, INeighbors} from '../types';

export const loadCountryByName = selectorFamily<ICountryDetails, { name: string }>({
  key: 'loadCountryByName',
  get: query => async () => {
    if (!query.name) {
      return {content: [], errorMessage: ''}
    }
    try {
      const result = await countryDetailsService.getCountryByName(query.name);
      return {content: result, errorMessage: ''};
    } catch (e) {
      if (e instanceof Error) {
        return {content: [], errorMessage: e.message}
      }
      return {content: [], errorMessage: ''}
    }
  }
});

export const loadNeighborsByBorder = selectorFamily<INeighbors, { borders: string[] }>({
  key: 'loadNeighborsByBorder',
  get: query => async () => {
    if (!query.borders.length) {
      return {content: [], errorMessage: ''}
    }
    try {
      const result = await countryDetailsService.getNeighborsByCodes(query.borders);
      const names = result.map((country) => country.name);
      return {content: names, errorMessage: ''};
    } catch (e) {
      if (e instanceof Error) {
        return {content: [], errorMessage: e.message}
      }
      return {content: [], errorMessage: ''}
    }
  }
});