import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {Header} from '../../../shared';
import {ThemeSwitcher} from './ThemeSwitcher';
import {useCleanup} from '../../controls';

export const HeaderSwitcher = (): JSX.Element => {
  const cleanUp = useCleanup();

  return (
    <Header>
      <Wrapper>
        <Title onClick={cleanUp}>Where is the world?</Title>
        <ThemeSwitcher/>
      </Wrapper>
    </Header>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;