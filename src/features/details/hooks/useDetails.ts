import {useRecoilValueLoadable} from 'recoil';
import {loadCountryByName} from '../model/recoil';
import {ICountryDetails, ICountryInfo} from '../types';
import {RecoilLoadableState, useAppToast} from '../../../shared';

export const useDetails = (name: string): [ICountryInfo, { state: keyof typeof RecoilLoadableState }] => {
  const {state, contents} = useRecoilValueLoadable<ICountryDetails>(loadCountryByName({name}));
  const [currentCountry] = contents.content ? contents.content : [];

  useAppToast(contents.errorMessage, 'error');

  return [currentCountry, {state}];
}
