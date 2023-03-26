import {IoMoon, IoMoonOutline} from 'react-icons/io5';
import styled from 'styled-components';
import {useTheme} from '../hooks/useTheme';


const ThemeSwitcher = (): JSX.Element => {
  const [theme, toggleTheme] = useTheme();

  return (
    <ModeSwitcher onClick={toggleTheme}>
      {theme === 'light' ? (
        <IoMoonOutline size="14px"/>
      ) : (
        <IoMoon size="14px"/>
      )}{' '}
      <span>{theme} Theme</span>
    </ModeSwitcher>
  )
}

export {ThemeSwitcher};

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;

  & > span {
    margin-left: 0.75rem;
  }
`;
