import {atom} from 'recoil';
import {Theme} from '../types';

export const themeState = atom<Theme>({
  key: 'theme',
  default: 'light',
});
