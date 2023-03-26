import styled from 'styled-components';
import {Container} from './Container';
import {IMain} from '../types';

const Main = ({children}: IMain): JSX.Element => {
  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
};

export {Main}

const Wrapper = styled.main`
  padding: 2rem 0;

  @media (min-width: 767px) {
    padding: 4rem 0;
  }
`;
