import {useCallback, useEffect} from 'react';

import {useRecoilState} from 'recoil';
import {themeState} from '../model/recoil';

export const useTheme = (): [string, () => void] => {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [theme, setTheme]);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return [theme, toggleTheme]
}
