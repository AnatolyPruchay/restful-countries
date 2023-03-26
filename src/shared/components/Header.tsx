import styled from 'styled-components';
import {Container} from './Container';
import {IHeader} from '../types';

const Header = ({children}: IHeader): JSX.Element => {
  return (
    <HeaderEl>
      <Container>
        {children}
      </Container>
    </HeaderEl>
  );
};

export {Header}

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: var(--colors-ui-base);
`;

