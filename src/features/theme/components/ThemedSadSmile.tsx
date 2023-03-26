import React, {useMemo} from 'react';
import {useTheme} from '../hooks/useTheme';
import {SadSmile} from '../../../shared';

export const ThemedSadSmile = (props: React.SVGProps<SVGSVGElement>) => {
  const [theme] = useTheme();

  const color = useMemo(() => {
    switch (true) {
      case theme === 'dark':
        return 'hsl(0, 0%, 100%)'
      case theme === 'light':
        return 'hsl(200, 15%, 8%)'
      default:
        return 'hsl(200, 15%, 8%)'
    }
  }, [theme]);

  return (
    <SadSmile {...props} color={color}/>
  );
};