import {useRecoilValueLoadable} from 'recoil';
import {filteredCountryList, loadCountries} from '../model/recoil';
import {CountriesRecoilState, ICountry} from '../types';
import {RecoilLoadableState, useAppToast} from '../../../shared';

export const useCountries = (): [ICountry[], { state: keyof typeof RecoilLoadableState }] => {
  const {contents, state} = useRecoilValueLoadable<CountriesRecoilState>(loadCountries);
  const filtered = useRecoilValueLoadable<ICountry[]>(filteredCountryList);

  useAppToast(contents.errorMessage, 'error');

  return [filtered.contents, {state}]
}
