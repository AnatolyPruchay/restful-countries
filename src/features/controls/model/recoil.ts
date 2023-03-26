import {atom} from 'recoil';

export const searchState = atom<string>({
  key: 'search',
  default: '',
});

export const regionState = atom({
  key: 'region',
  default: '',
});